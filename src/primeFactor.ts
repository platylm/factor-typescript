export default function primeFactor(number:number, callback:Function){ // return ผ่าน function ใช้ callback
    let result: number[] = new Array()
    while(number%2 == 0){
        result.push(2)
        number /= 2
    }
    while(number%3 == 0){
        result.push(3)
        number /= 3
    }
    callback(result)
}