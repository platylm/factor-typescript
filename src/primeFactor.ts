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

export const primeFactorPromise = function(number:number):Promise<number[]> { //promise เป็นการหุ้ม function ของ callback อีกที (promise.then == result or .catch == error) แยกผลลัพธ์กับ error ออกจากัน
    return new Promise((resolve,reject) =>{
        primeFactor(number,function(err:Error,result:number[]){
            if(err!= undefined){
                reject(err)
                return
            }
            resolve(result)
        })
    })
}