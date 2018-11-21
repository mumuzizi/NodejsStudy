var util=require('util');
//util.inherits

function Base(){
    this.name = "base";
    this.base=1991;
    this.sayHello=function(){
        console.log('Hello'+this.base);
    };
}
    //Base有三个在构造函数内定义的属性和一个原型中定义的函数
Base.prototype.showName=function(){
    console.log(this.name);
};
function Sub(){
    this.name='sub';
}
util.inherits(Sub,Base);
    //Sub仅仅继承了Base在原型中定义的函数，而构造函数内部创造的base属性和sayHello函数都没有被Sub继承。
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub=new Sub();
objSub.showName();
console.log(objSub);

//util.inspect可以将任意对象转换为字符串，通常用于调试和错误输出。
function Person(){
    this.name='byvoid';
    this.toString = function(){
        return this.name;
    };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj,true));

//util.isArray如果给定的参数object是一个数组返回true，否则返回false。
util.isArray([])
    //true
util.isArray(new Array)
    //true
util.isArray({})
    //false

//util.isRegExp(obj)如果给定的参数"object"是一个正则表达式返回true，否则返回false。
util.isRegExp(/some regexp/)
    //true
util.isRegExp(new RegExp('another regexp'))
    //true
util.isRegExp({})
    //false

//util.isData(object)如果给定的参数 "object" 是一个日期返回true，否则返回false
util.isDate(new Date())
    // true
util.isDate(Date())
    // false (without 'new' returns a String)
util.isDate({})
    // false

//util.isError(object)如果给定的参数 "object" 是一个错误对象返回true，否则返回false
util.isError(new Error())
  // true
util.isError(new TypeError())
  // true
util.isError({ name: 'Error', message: 'an error occurred' })
  // false