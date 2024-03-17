const request = require('supertest')
const { MongoMemoryServer } = require('mongodb-memory-server')
const mongoose = require('mongoose')
const app = require('../../../../src/server')
const { createTask } = require('../../../../src/controllers/tasks/create')
const Task = require('../../../../src/models/task')

describe('POST /tasks', () => {
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
        expect(createTask).toBeDefined()
    })

    it('create a new task', async () => {
        await Task.create({ title: 'test' }, { title: 'test2' })
        const response = await request(app).post('/tasks').send({ title: 'test3' })
        expect(response.statusCode).toBe(200)
        expect(response.body.task.title).toBe('test3')
    })
})