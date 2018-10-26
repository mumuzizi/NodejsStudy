// 异步形式的最后一个参数都是完成时回调函数。传给回调函数的参数取决于具体方法，但回调函数的第一个参数都会保留给异常。 
// 如果操作成功完成，则第一个参数会是 null 或 undefined。fs与文件系统进行交互

var fs = require('fs');
fs.readFile('input.txt',function(err,data){
    //fs.readFile()是异步函数用于读取文件。
    if (err) {
        console.log(err.stack);
        return;
    }
    //如果在读取文件过程中发生错误，错误err对象就会输出错误信息
    console.log(data.toString());
    //如果没错，跳过err对象的输出，文件内容就通过回调函数输出。
});
console.log("程序执行完毕");

