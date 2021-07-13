 exportToExcel() {
      // 先获得需要导出的数据
      let arr = this.goodsList
      if (arr.length === 0) {
        return this.$message.error('没有需要导出的数据')
      }
      // 获得表头，即对象的key
      let attrs = Object.keys(arr[0])
      if (attrs.length === 0) {
        return this.$message.error('没有需要导出的数据')
      }
      let str = ''
      str += attrs.join(',')
      str += '\n' // 拼接换行符\n
      // 拼接表格数据
      for (let i = 0, n = arr.length; i < n; i++) {
        // 方法一
        // let values = Object.values(arr[i])
        // str += values.join('\t,') //\t表示tab 下一个单元格
        // str += '\n'
        // 方法二
        for (let item in arr[i]) {
          if (!arr[i].item) {
            str += '无,'
          } else {
            str += arr[i][item] + ','
          }
        }
        str += '\n'
        console.log(str)
      }
      // 导出数据 固定格式csv表示导出文件格式utf-8字符集中文
      let uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str)
      // 创建一个a标签
      let link = document.createElement('a')
      // 定义a标签href属性
      link.href = uri
      // 定义导出文件名
      link.download = 'goods.csv'
      // 把a标签插入DOM中
      document.body.appendChild(link)
      //  模拟点击a标签事件
      link.click()
      // 删除a标签
      document.body.removeChild(link)
    },