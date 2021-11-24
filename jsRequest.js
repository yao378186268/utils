/**
 * ajax的封装
 * @date 2021-04-28
 * @param {any} options={url,type,data}
 * @returns {any}
 */

 function request(options) {
    return new Promise((resolve, reject) => {
        // 1、创建对象
        let xhr = XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject('Microsoft.XMLHTTP')

        // 4、onreadystatechange
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                let response = xhr.response
                response = response?JSON.parse(response):{}
                resolve(response)
            }else{
                reject(xhr.response)
            }
        }

        // 2、open  3、send
        let query = getPath(options.data)
        console.log(query)
        if (options.type === 'GET') {
            options.url += '?' + query
            xhr.open(options.type, options.url, true)
            xhr.setRequestHeader('token', getToken())
            xhr.send()
        } else if (options.type === 'POST') {
            xhr.open(options.type, options.url, true)
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
            xhr.setRequestHeader('token', getToken())
            xhr.send(query)
        }
    })
}

//  拼接请求路径函数
function getPath(object) {
    let arr = []
    for (let key in object) {
        arr.push(key + '=' + object[key])
    }
    return arr.join('&')
}

// 获取token值函数
function getToken() {
    let str = sessionStorage.getItem('login')
    if (str) {
        let obj = JSON.parse(str)
        return obj.token
    }
    return null
}