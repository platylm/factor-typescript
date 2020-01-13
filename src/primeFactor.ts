export default function primeFactor(number:number, callback:Function){ // return ผ่าน function ใช้ callback
    let result: number[] = new Array()
    let divider = 2
    while(number != 1){
        if(number % divider == 0){
            result.push(divider)
            number /= divider
        } else{
            divider++
        }
    }
    callback(result)
}