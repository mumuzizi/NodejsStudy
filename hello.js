exports.world = function(){
    console.log('Hello World');
    
}

//把一个对象封装到模块中
// module.export = function(){

// }

function Hello(){
    var name;
    this.setName = function(thyName){
        name = thyName;
    };
    this.sayHello = function(){
        console.log("Hello"+name);
        
    };
};
module.exports = Hello;