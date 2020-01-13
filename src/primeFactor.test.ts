import primeFactor from './primeFactor'

describe('prime factor', () => {
    it('Input 2 Should be array [2]', () => {
        const expected = [2]
        const number = 2

        primeFactor(number,function(actual:number){
            expect(actual).toEqual(expected)
        }) 
    });

    it('Input 3 Should be array [3]', () => {
        const expected = [3]
        const number = 3

        primeFactor(number,function(actual:number){
            expect(actual).toEqual(expected)
        }) 
    });
})