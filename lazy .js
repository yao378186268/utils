window.onload = lazyLoad
window.onscroll = lazyLoad

function lazyLoad() {
    let clientHeight = document.documentElement.clientHeight
    let scrollTop = document.documentElement.scrollTop
    let lazy = document.getElementsByClassName('lazy')
    for (let i = 0; i < lazy.length; i++) {
        let t = getPoint(lazy[i])
        if (clientHeight + scrollTop >= t + 100) {
            lazy[i].src = lazy[i].getAttribute('imgSrc')
        }

    }

    for (let j = 0; j < lazy.length; j++) {
        let src = lazy[j].getAttribute('src')
        let imgSrc = lazy[j].getAttribute('imgSrc')
        if (src === imgSrc) {
            lazy[j].removeAttribute('imgSrc')
            lazy[j].className = ''
        }
    }
}

let getPoint = (obj) => {
    //offsetTop是obj对象距离直接定位的父级元素的top值
    let t = obj.offsetTop
    //不知到循环要执行多少次时使用
    // offsetParent找到元素的第一个定位的父级元素
    while ((obj = obj.offsetParent)) {
        t += obj.offsetTop
    }
    return t
}