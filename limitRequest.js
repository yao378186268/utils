function limitRequest(urls = [], limit = 5) {
  return new Promise((resolve, reject) => {
    const len = urls.length
    let count = 0 // 当前进行到第几个任务

    const start = async () => {
      const url = urls.shift() // 从数组中拿取第一个任务
      if (url) {
        try {
          await axios.post(url)
          if (count == len - 1) {
            // 最后一个任务
            resolve()
          } else {
            count++
            // 成功，启动下一个任务
            start()
          }
        } catch (e) {
          count++
          // 失败，也启动下一个任务
          start()
        }
      }
    }

    // 启动limit个任务
    while (limit > 0) {
      start()
      limit -= 1
    }
  })
}

// 测试
limitRequest(['http://xxa', 'http://xxb', 'http://xxc', 'http://xxd', 'http://xxe'])
