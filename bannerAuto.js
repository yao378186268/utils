autoMove() {
      let ul = document.getElementsByClassName('ul_box')[0]
      let lis = document.getElementsByClassName('li_box')
      let num = 0
      let _this = this
      function removeLi() {
		  // this.isMove在vue中判断页面跳转取消轮播
		  // beforeDestory(){this.isMove = false}
        if (!_this.isMove) {
          clearInterval(removeUl)
          return
        }
        let w = lis[0].offsetWidth
        num += 2

        if (num <= w) {
          lis[0].style.marginRight = -num + 'px'
        } else {
          ul.appendChild(lis[0])
          lis[lis.length - 1].style.marginRight = '0px'
          num = 0
        }
      }
      let removeUl = setInterval(removeLi, 50)
      ul.onmouseover = function () {
        clearInterval(removeUl)
      }
      ul.onmouseout = function () {
        removeUl = setInterval(removeLi, 50)
      }
    },