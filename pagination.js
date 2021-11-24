
// 前端分页

getPageList() {
      let start = (this.pagenum - 1) * this.pagesize
      let end = start + this.pagesize
      if (end > this.rightsList.length) {
        end = this.rightsList.length
      }
      let pageList = []
      for (let i = start; i < end; i++) {
        pageList.push(this.rightsList[i])
      }
      this.pageList = pageList
    },