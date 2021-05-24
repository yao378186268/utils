/* <div>
    <label for="data">出生日期：</label>
    <input type="text" name="data" id="data" placeholder="2016年2月1日"/>
    <span >*</span>
</div> */

/**
 * 验证生日
 * @date 2021-05-08
 * @returns {any}
 */
 function checkBirthday() {
    let v = $('#data').val().trim()
    let parent = $('#data').parent()
    let span = $('#data').next()
    span.empty()
    let reg = /^\d{1,4}-\d{2}-\d{2}$/
    if (!reg.test(v)) {
        span.html('生日的格式必须为yyyy-mm-dd')
        parent.removeClass('ok').addClass('error')
        return false
    }
    let arr = v.split('-')
    let newArr = []
    arr.map((item) => {
        item = parseInt(item)
        newArr.push(item)
    })
    //获取年份
    let y = arr[0]
    let now = new Date().getFullYear()
    if (y < 0 || y > now) {
        span.html(`生日的年份必须在0-${now}之间`)
        parent.removeClass('ok').addClass('error')
        return false
    }
    //获取月份
    let m = newArr[1]
    if (m < 0 || m > 12) {
        span.html(`生日的月份必须在0-12之间`)
        parent.removeClass('ok').addClass('error')
        return false
    }
    if (y === now) {
        span.html(`生日的月份必须在0-${new Date().getMonth()+1}之间`)
        parent.removeClass('ok').addClass('error')
        return false
    }
    //获取日子
    let d = newArr[2]
    let data = 28
    if (y % 4 === 0 && y % 100 !== 0 || y % 400 === 0) {
        data = 29
    }
    let maxDate = [31, data, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (d < 1 || d > maxDate[m - 1]) {
        span.html(`生日的月份必须在0-${maxDate[m-1]}之间`)
        parent.removeClass('ok').addClass('error')
        return false
    }
    span.html('生日正确')
    parent.removeClass('error').addClass('ok')
    return true
}