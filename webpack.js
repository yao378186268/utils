// index.js
  ;(function (list) {
    function require(file) {
      // add.js
      exports = {}
      ;(function (code) {
        eval(code)
      })(list[file])
      return exports
    }

    require("index.js")
  })({
    "index.js": `const add = require("add.js").default; console.log(add(2, 4))`,
    "add.js": `exports.default = function (a, b) {return a + b};`,
  })