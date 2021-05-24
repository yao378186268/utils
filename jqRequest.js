/**
 * 封装jquery的ajax请求
 * @date 2021-04-30
 * @param {any} options
 * @returns {any}
 */
 function request(options) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: options.url,
            type: options.type,
            data: options.data,
            success(res) {
                resolve(res)
            },
            error(err) {
                reject(err)
            },
            headers: {
                token: getToken()
            },
        })
    })
}

/**
 * 获取token
 * @date 2021-04-30
 * @returns {any}
 */
function getToken() {
    let str = sessionStorage.getItem('user_login')
    return str ? JSON.parse(str).token : null
}

/**
 * 获得登录后的用户名
 * @date 2021-04-30
 * @returns {any}
 */
function getUsername() {
    let str = sessionStorage.getItem('user_login')
    return str ? JSON.parse(str).data.userName : ''
}