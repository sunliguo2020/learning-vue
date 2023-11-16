//1、变量和常量
{
    let count = 0
    count ++
    console.log(count)
    const BASE_URL = 'http://web.wuyou.com/api'
}
// console.log(count)
//2、模板字符串
const str1 = 'abc'
const stre = `efg${str1}`

//3、解构赋值
const arr = [1,2,3]
const v1 = arr[0]
const v2 = arr[2]

const [a,b,c] = [1,2,3]

const obj = {
    username:'吴悠',
    age:18,
    gender:'male'
}

const {username,age:userAge,...otherInfo} = {
    username:'吴悠',
    age:18,
    gender:'male',
    category:'user'
}
console.log(username,userAge,otherInfo)

//4、数组和对象的扩展
//4.1 扩展运算符
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = [100,...arr1,...arr2,10,20]
console.log(arr3)

const obj1 = {
    a:1
}

const obj2 = {
    b:2
}

const obj3 = {
    name:'吴悠',
    ...obj1,
    ...obj2
}
console.log(obj3)

//4.2 数组方法
function fn(){
    Array.from(arguments).forEach(function(item){
        console.log(item)
    })
    console.log(arguments)
    // arguments.push(1)
}
fn(1,2,3,4)
// Array.from()
//4.3 对象的方法 Object.assign()
const objA = {
    name:'吴悠',
    age:18
}
const objB = Object.assign({},objA)

console.log(objA,objB)
//5、Class
class A{
    constructor(name,age){
        this.name = name
        this.age = age 
    }
    intruduce(){
        console.log(`我的名字${this.name}`)
    }
}

const a1 = new A('吴悠',18)

console.log(a1)
a1.intruduce()

class B extends A {
    constructor (name,age,gender){
        super(name,age)
        this.gender = gender
    }
    sayHello(){
        console.log('你好我是'+this.name)
    }
}
//6、箭头函数
const getSum = function(n){
    return n+1
}
const getSum2 = n=>n+3
console.log(getSum2(2))

const getSum3 = (n1,n2)=> n1+n2

const getSum4 = (n1,n2,...other)=>console.log(n1,n2,other)
console.log(getSum4(10,20,30,200,1002))

const getResult = arr =>{
    let sum =0
    arr.forEach(item=>sum +=item)
    return sum
}