//与同步I/O函数不同，Node.js中异步函数大多没有返回值。
var fs=require('fs');
fs.open('input.txt','r',function(err,fd){
    if(err){
        console.error(err);
        return;
    }
    var buf=new Buffer(8);
    fs.read(fd,buf,0,8,null,function(err,bytesRead,buffer){
        if(err){
            console.error(err);
            return;
        }
        console.log('bytesRead:'+bytesRead);
        console.log(buffer);
        
        
    })
})