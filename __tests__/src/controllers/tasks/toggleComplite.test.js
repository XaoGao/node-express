const request = require('supertest')
const { MongoMemoryServer } = require('mongodb-memory-server')
const mongoose = require('mongoose')
const app = require('../../../../src/server')
const { toggleComplit } = require('../../../../src/controllers/tasks/toggleComplite')
const Task = require('../../../../src/models/task')

describe('PUT /tasks/:id', () => {
    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create()
        await mongoose.connect(mongoServer.getUri())
    })

    afterAll(async () => {
        await Task.deleteMany({})
        await mongoose.disconnect()
        await mongoose.connection.close()
    })

    it('should be defined', () => {
        expect(toggleComplit).toBeDefined()
    })

    // it('task not found', async () => {
    //     expect(response.statusCode).toBe(400)
    //     expect(response.body.message).toBe('Task not found')
    // })

    it('toggle complited', async () => {
        const task = await Task.create({ title: 'test' })
        const response = await request(app).put(`/tasks/${task._id}`)
        expect(response.statusCode).toBe(200)
        expect(response.body.complited).toBe(true)
    })
})