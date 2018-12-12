//格式化时间
export function fortime(time){
    let min =parseInt(time%360/60)+'',
    sec =parseInt(time%60)+'' ;
    return min.padStart(2,'0')+':'+sec.padStart(2,'0')
}