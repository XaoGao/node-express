const logger = require('../../../src/utils/logger'); 

const middlewareFunction = require('../../../src/middleware/logger.middleware');

describe('logger middleware', () => {
    const res = {};
    const next = jest.fn();

    it('log the method and URL of the request', async () => {
        const req = { method: 'GET', url: '/test' };

        const mockedInfo = jest.spyOn(logger, 'info');

        await middlewareFunction(req, res, next);

        expect(mockedInfo).toHaveBeenCalledWith('GET /test');
    });

    it('call the next function', async () => {
        const req = {};

        await middlewareFunction(req, res, next);

        expect(next).toHaveBeenCalled();
    });
});
