
// 获得定位元素到页面顶端的top值

let getPoint = (obj) => {
    //offsetTop是obj对象距离直接定位的父级元素的top值
    let t = obj.offsetTop
    //不知到循环要执行多少次时使用
    while ((obj = obj.offsetParent)) {
      t += obj.offsetTop
    }
    return t
  }