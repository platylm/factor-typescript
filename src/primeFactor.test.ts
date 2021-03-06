import primeFactor, { primeFactorPromise } from './primeFactor'

describe('prime factor', () => {
    it('Input 2 Should be array [2]', () => {
        const expected = [2]
        const number = 2

        primeFactorPromise(number)
            .then((result) => {
                expect(result).toEqual(expected)
                return primeFactorPromise(number)
            })
    });

    it('Input 3 Should be array [3]', () => {
        const expected = [3]
        const number = 3

        primeFactor(number,function(actual:number){
            expect(actual).toEqual(expected)
        }) 
    });

    it('Input 4 Should be array [2,2]', () => {
        const expected = [2,2]
        const number = 4

        primeFactor(number,function(actual:number){
            expect(actual).toEqual(expected)
        }) 
    });

    it('Input 6 Should be array [2,3]', () => {
        const expected = [2,3]
        const number = 6

        primeFactor(number,function(actual:number){
            expect(actual).toEqual(expected)
        }) 
    });

    it('Input 9 Should be array [3,3]', () => {
        const expected = [3,3]
        const number = 9

        primeFactor(number,function(actual:number){
            expect(actual).toEqual(expected)
        }) 
    });

    it('Input 12 Should be array [2,2,3]', () => {
        const expected = [2,2,3]
        const number = 12

        primeFactor(number,function(actual:number){
            expect(actual).toEqual(expected)
        }) 
    });

    it('Input 15 Should be array [3,5]', () => {
        const expected = [3,5]
        const number = 15

        primeFactor(number,function(actual:number){
            expect(actual).toEqual(expected)
        }) 
    });

    it('Input 100000 Should be array [3,5]', () => {
        const expected = [2,2,2,2,2,5,5,5,5,5]
        const number = 100000

        primeFactor(number,function(actual:number){
            expect(actual).toEqual(expected)
        }) 
    });

    it('Input 17 Should be array [3,5]', () => {
        const expected = [17]
        const number = 17

        primeFactor(number,function(actual:number){
            expect(actual).toEqual(expected)
        }) 
    });
})