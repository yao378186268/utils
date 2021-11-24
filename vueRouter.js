// 处理Vue路由重复使用的报错，放在router/index.js文件中

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
