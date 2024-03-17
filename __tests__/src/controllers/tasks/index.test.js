const request = require('supertest')
const { MongoMemoryServer } = require('mongodb-memory-server')
const mongoose = require('mongoose')
const app = require('../../../../src/server')
const { indexTasks } = require('../../../../src/controllers/tasks/index')
const Task = require('../../../../src/models/task')

describe('GET /tasks', () => {
    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create()
        await mongoose.connect(mongoServer.getUri())
    })

    afterAll(async () => {
        await mongoose.disconnect()
        await mongoose.connection.close()
    })

    it('should be defined', () => {
        expect(indexTasks).toBeDefined()
    })

    it('should respond with a 200 status code', async () => {
        await Task.create(
            { title: 'test' },
            { title: 'test2' }) 
        const response = await request(app).get('/tasks')
        expect(response.statusCode).toBe(200)
        expect(response.text).toContain('test')
        expect(response.text).toContain('test2')
    })
})