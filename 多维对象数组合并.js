// 解构表格数据
    getChildren(arr) {
      return [].concat(...arr.map(item => [].concat(item, ...this.getChildren(item.children))));
    },