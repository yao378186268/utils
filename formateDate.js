// 日期格式化
function formateDate(v){
    let date = v?new Date(v):new Date()
    let y = date.getFullYear()
    let m = (date.getMonth()+1+'').padStart(2,'0')
    let d = (date.getDate()+'').padStart(2,'0')
    let H = (date.getHours()+'').padStart(2,'0')
    let M = (date.getMinutes()+'').padStart(2,'0')
    let S = (date.getSeconds()+'').padStart(2,'0')
    console.log(`${y}-${m}-${d} ${H}:${M}:${S}`)
}
formateDate()