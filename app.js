// node递归遍历 upload文件夹下的所有文件


const fs = require("fs")

let arr = []

// 检测是否是文件夹
function cheackDir(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, data) => {
      if (err) {
        console.log(err)
        reject()
        return
      }
      resolve(data.isDirectory())
    })
  })
}

// 查找文件夹下的目录
function readdirs(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, data) => {
      if (err) {
        console.log(err)
        reject()
        return
      }
      resolve(data)
    })
  })
}

async function syncDir(path) {
  let data = await readdirs(path)
  for (let i = 0; i < data.length; i++) {
    if (await cheackDir(`${path}/${data[i]}`)) {
      await syncDir(`${path}/${data[i]}`)
    } else {
      arr.push(`${path}/${data[i]}`)
    }
  }
}

;(async function () {
  await syncDir("./upload")
  console.log(arr)
})()
