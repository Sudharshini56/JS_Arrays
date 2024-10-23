let color = ['blue', 'black', 'white', 'pink', 'white']
console.log(color)
console.log(color[2])
console.log(color[color.length - 1])
console.log(color.length)

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[0])
console.log(matrix[0][1])
console.log(matrix[2], [0])

let cool = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', [1, 2], "xyz"]
console.log(cool[10])
console.log(cool[10][0])
console.log(cool[9])

let array = ['a', 'b', 'c', 'd', 'e']
console.log(array.push("F"))
console.log(array)
console.log(array.pop())
console.log(array)
console.log(array.shift())
console.log(array)
console.log(array.unshift('a'))
console.log(array)

array.splice(1, 1)
console.log(array)

array.splice(1, 2, 'm')
console.log(array)

array.splice(1, 2, 'x', 'y')
console.log(array)

array.splice(1, 0, 'b')
console.log(array)


console.log(array.slice(1, 3))

array.reverse()
console.log(array)

let str = array.join()
console.log(str)

let str1 = "q,r,s,t"
let aar = str1.split(',')
console.log(str1)

//concat and spread operator
let firstArr = [1, 2, 3]
let secondArr = [4, 5, 6]
let jointArr = firstArr.concat(secondArr)
console.log(jointArr)

let joint = [...firstArr, ...secondArr]
console.log(joint)