const User = require("../../../src/models/user")

describe('.validPassword', () => {
    const user = new User({ password: '123' })

    it('password is valid', () => {
        expect(user.validPassword('123')).toBe(true)
    })

    it('password is invalid', () => {
        expect(user.validPassword('321')).toBe(false)
    })
})
