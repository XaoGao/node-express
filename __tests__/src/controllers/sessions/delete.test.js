const request = require('supertest')
const { MongoMemoryServer } = require('mongodb-memory-server')
const mongoose = require('mongoose')
const app = require('../../../../src/server')
const { deleteLogin } = require('../../../../src/controllers/sessions/login/delete')

describe('DELETE /logout', () => {
    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create()
        await mongoose.connect(mongoServer.getUri())
    })

    afterAll(async () => {
        await mongoose.disconnect()
        await mongoose.connection.close()
    })

    it('should be defined', () => {
        expect(deleteLogin).toBeDefined()
    })

    it("removes cookie", async () => {
        const response = await request(app)
            .delete('/logout')
            .set('Cookie', 'user_email=test@example.com')
            .set('Cookie', 'session_id=123')

        expect(response.statusCode).toBe(200)
        // TODO: check cookie
        // expect(response.cookies).toBe({})
    })
})