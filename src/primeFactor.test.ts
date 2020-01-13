import factor from './primeFactor'

describe('prime factor', () => {
    it('Input 2 Should be array [2]', () => {
        const expected = [2]
        const number = 2

        const actual = factor(number)
        expect(actual).toEqual(expected)
    });
})