function setRem() {
    let clientWidth = document.documentElement.clientWidth
    if(clientWidth > 750){
        clientWidth = 750
    }
    let rate = (clientWidth / 750) * 100
    document.documentElement.style.fontSize = parseInt(rate)+'px'
}

window.onload = setRem
window.onresize = setRem