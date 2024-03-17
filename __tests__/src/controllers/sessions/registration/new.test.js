const request = require('supertest')
const { MongoMemoryServer } = require('mongodb-memory-server')
const mongoose = require('mongoose')
const app = require('../../../../../src/server')
const { newRegistration } = require('../../../../../src/controllers/sessions/registration/new')

describe('GET /registration', () => {
    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create()
        await mongoose.connect(mongoServer.getUri())
    })

    afterAll(async () => {
        await mongoose.disconnect()
        await mongoose.connection.close()
    })

    it('should be defined', () => {
        expect(newRegistration).toBeDefined()
    })

    it("should respond with a 200 status code", async () => {
        const response = await request(app).get('/registration')
        expect(response.statusCode).toBe(200)
    })
})