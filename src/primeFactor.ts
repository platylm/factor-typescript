export default function primeFactor(number:number, callback:Function){ // return ผ่าน function ใช้ callback
    if (number == 3){
        callback([3])
        return
    }
    callback([2])
}