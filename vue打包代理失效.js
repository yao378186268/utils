 


function get(){
	// 请求之前，先处理下地址就可以解决vue项目打包后，动态代理失效
 if (process.env.NODE_ENV != "development") {
    options.url = options.url.replace(/\/api/, "默认地址");
  }
  return axios.get(options.url,{params:options.data})
}
