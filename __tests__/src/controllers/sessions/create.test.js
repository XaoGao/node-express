const request = require('supertest')
const { MongoMemoryServer } = require('mongodb-memory-server')
const mongoose = require('mongoose')
const app = require('../../../../src/server')
const { createLogin } = require('../../../../src/controllers/sessions/login/create')
const User = require('../../../../src/models/user')

describe('POST /login', () => {
    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create()
        await mongoose.connect(mongoServer.getUri())
    })

    afterAll(async () => {
        await mongoose.disconnect()
        await mongoose.connection.close()
    })

    it('should be defined', () => {
        expect(createLogin).toBeDefined()
    })

    it('user not found based on email', async () => {
        await User.create({ email: 'test@example.com', password: '123' })
        const response = await request(app)
            .post('/login')
            .send({
                email: 'wrong@example.com',
                password: '123'
            })

        expect(response.statusCode).toBe(400)
        expect(response.text).toBe('Incorrect email or password')
    })

    it('wrong password', async () => {
        await User.create({ email: 'test@example.com', password: '123' })
        const response = await request(app)
            .post('/login')
            .send({
                email: 'test@example.com',
                password: 'wrong password'
            })

        expect(response.statusCode).toBe(400)
        expect(response.text).toBe('Incorrect email or password')
    })

    it('created session', async () => {
        await User.create({ email: 'test@example.com', password: '123' })
        const response = await request(app)
            .post('/login')
            .send({
                email: 'test@example.com',
                password: '123'
            })

        expect(response.statusCode).toBe(302)
        expect(response.header.location).toBe('/tasks')
        expect(response.headers['set-cookie']).toContain('user_email=test%40example.com; Path=/')
    })
})