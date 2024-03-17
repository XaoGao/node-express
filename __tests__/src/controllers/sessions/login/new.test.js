const request = require('supertest')
const { MongoMemoryServer } = require('mongodb-memory-server')
const mongoose = require('mongoose')
const app = require('../../../../../src/server')
const { newLogin } = require('../../../../../src/controllers/sessions/login/new')

describe('GET /login', () => {
    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create()
        await mongoose.connect(mongoServer.getUri())
    })

    afterAll(async () => {
        await mongoose.disconnect()
        await mongoose.connection.close()
    })

    it('should be defined', () => {
        expect(newLogin).toBeDefined()
    })

    it("should respond with a 200 status code", async () => {
        const response = await request(app).get('/login')
        expect(response.statusCode).toBe(200)
    })
})