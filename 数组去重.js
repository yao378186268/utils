let arr1 = [1,2,3,4,1,5,1]
let arr2 = []
// arr就是当前遍历的数组arr1
arr1.forEach((item,index,arr)=>{
	arr.indexOf(item) === index?arr1.push(item):null
})
console.log(arr2) // [1,2,3,4,5]