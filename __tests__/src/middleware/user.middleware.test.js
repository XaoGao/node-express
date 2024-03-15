const User = require('../../../src/models/user');
const { userMiddleware } = require('../../../src/middleware/user.middleware');

describe('user middleware', () => {
    it('should be defined', () => {
        expect(userMiddleware).toBeDefined();
    });

    const res = { locals: {} };
    const next = jest.fn();

    it('user found based on email in cookies', async () => {
        const req = { cookies: { user_email: 'test@example.com' } };

        const foundUser = { email: 'test@example.com' };
        User.findOne = jest.fn().mockResolvedValue(foundUser);

        await userMiddleware(req, res, next);

        expect(res.locals.currentUser.email).toBe('test@example.com');
        expect(res.locals.currentUser.signedIn).toBe(true);
        expect(next).toHaveBeenCalled();
    })

    it('user not found based on email in cookies', async () => {
        const req = { cookies: { user_email: 'nonexistent@example.com' } };

        User.findOne = jest.fn().mockResolvedValue(null);

        await userMiddleware(req, res, next);

        expect(res.locals.currentUser.email).toBe('guest');
        expect(res.locals.currentUser.signedIn).toBe(false);
        expect(next).toHaveBeenCalled();
    })
})
