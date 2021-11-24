一、URLSearchParams 方法
	// 创建一个URLSearchParams实例
	const urlSearchParams = new URLSearchParams(window.location.search);
	// 把键值对列表转换为一个对象
	const params = Object.fromEntries(urlSearchParams.entries());

二、split 方法
	function getParams(url) {
	  const res = {}
	  if (url.includes('?')) {
		const str = url.split('?')[1]
		const arr = str.split('&')
		arr.forEach(item => {
		  const key = item.split('=')[0]
		  const val = item.split('=')[1]
		  res[key] = decodeURIComponent(val) // 解码
		})
	  }
	  return res
	}

	// 测试
	const user = getParams('http://www.baidu.com?user=tom&age=16')
	console.log(user) // { user: 'tom', age: '16' }
