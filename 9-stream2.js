//写入流
var fs=require('fs');
var data = 'W3Cschool教程官网地址：www.w3cschool.cn';
var writerStream = fs.createWriteStream('output.txt');
writerStream.write(data,'UTF8');
writerStream.end();
// 处理流事件 --> data, end, and error
writerStream.on('finish', function() {
    console.log("写入完成。");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");