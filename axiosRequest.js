let map = new Map()
map.set('get', get)
map.set('del', del)
map.set('post', post)
map.set('put', put)

// 设置请求的基础路径
axios.defaults.baseURL = 'https://www.sheli.net.cn:3009/'

// 请求拦截
axios.interceptors.request.use((request)=>{
    let token = getToken()
    // if(!token){
    //     alert('请先登录')
    //     location = 'login.html'
    // }
    request.headers['token'] = token
    return request
})  

// 相应拦截
axios.interceptors.response.use((response)=>{
    return response
})

// 封装request请求函数
function request(options) {
    let fn = map.get(options.type)
    if (!fn) {
        return new Promise((v) => {
            v('没有你要找得函数')
        })
    }
    return fn(options)
}

function get(options) {
    return axios.get(options.url, {
        params: options.data
    })
}

function del(options) {
    return axios.delete(options.url, {
        params: options.data
    })
}

function post(options) {
    return axios.post(options.url, options.data)
}

function put(options) {
    return axios.put(options.url, options.data)
}

function getToken(){
    let str = sessionStorage.getItem('user_login')
    if(!str){
        return null
    } 
    let obj = JSON.parse(str)
    return obj.token  
}