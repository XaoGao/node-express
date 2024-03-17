const request = require('supertest')
const { MongoMemoryServer } = require('mongodb-memory-server')
const mongoose = require('mongoose')
const app = require('../../../../../src/server')
const { createRegistration } = require('../../../../../src/controllers/sessions/registration/create')
const User = require('../../../../../src/models/user')

describe('POST /registration', () => {
    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create()
        await mongoose.connect(mongoServer.getUri())
    })

    afterEach(async () => {
        await User.deleteMany()
    })

    afterAll(async () => {
        await mongoose.disconnect()
        await mongoose.connection.close()
    })

    it('should be defined', () => {
        expect(createRegistration).toBeDefined()
    })

    it('user already exists', async () => {
        await User.create({ email: 'test@example.com', password: '123' })
        const response = await request(app)
            .post('/registration')
            .send({
                email: 'test@example.com',
                password: '123'
            })

        expect(response.statusCode).toBe(400)
        expect(response.text).toBe('User already exists')
    })

    it('create user', async () => {
        const response = await request(app)
            .post('/registration')
            .send({
                email: 'test@example.com',
                password: '123'
            })

        expect(response.statusCode).toBe(302)
        expect(response.header.location).toBe('/tasks')
        expect(response.headers['set-cookie']).toContain('user_email=test%40example.com; Path=/')
        expect(await User.findOne({ email: 'test@example.com' })).toBeDefined()
    })
})