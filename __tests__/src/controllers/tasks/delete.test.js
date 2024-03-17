const request = require('supertest')
const { MongoMemoryServer } = require('mongodb-memory-server')
const mongoose = require('mongoose')
const app = require('../../../../src/server')
const { deleteTask } = require('../../../../src/controllers/tasks/delete')
const Task = require('../../../../src/models/task')

describe('DELETE /tasks/:id', () => {
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
        expect(deleteTask).toBeDefined()
    })

    // it('task not found', async () => {
    //     const response = await request(app).delete('/tasks/123')
    //     expect(response.statusCode).toBe(400)
    // })

    it('delete a existing task', async () => {
        const task = await Task.create({ title: 'test'})
        const response = await request(app).delete('/tasks/' + task._id)
        expect(response.statusCode).toBe(200)
    })
})