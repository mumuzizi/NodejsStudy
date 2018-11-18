//buffer类，用来创建一个专门存放二进制数据的缓冲区,一个 Buffer 类似于一个整数数组，

//创建Buffer类

    //创建长度为 10 字节的 Buffer 实例：
    var buf = new Buffer(10);

    //通过给定的数组创建 Buffer 实例：
    var buf = new Buffer([10, 20, 30, 40, 50]);

    //通过一个字符串来创建 Buffer 实例：
    var buf = new Buffer("www.w3cschool.cn","utf-8");

//写入缓冲区
    buf.write(string['写入缓冲区的字符串', offset['缓冲区开始写入的索引值,默认为 0 ', length]][any, encoding]);//length 是写入的字节数，encoding使用的编码
    //返回值 :返回实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。

    buf = new Buffer(256);
    len = buf.write('www.w3cschool.cn');
    console.log("写入的字节数："+len);

//从缓冲区读取数据
    buf.toString([encoding['utf-8',start[0,end]]]);
    //encoding 使用的编码。默认为'utf-8'。
    //tart - 指定开始读取的索引位置，默认为 0。
    //end - 结束位置，默认为缓冲区的末尾。
    //返回值 :解码缓冲区数据并使用指定的编码返回字符串。
    buf = new Buffer(26);
    for (var i = 0 ; i < 26 ; i++) {
    buf[i] = i + 97;
    }

    console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz 
    console.log( buf.toString('utf8',0,5));    // 输出: abcde
    console.log( buf.toString(undefined,0,5)); // 使用 'utf8' 编码, 并输出: abcde

//将Buffer转换为JSON对象
    buf.toJSON();
    //返回值 :返回 JSON 对象。
    var buf = new Buffer('www.w3cschool.cn');
    var json = buf.toJSON(buf);
    console.log(json);

//缓冲区合并
    Buffer.concat(list['起始位置',totalLength],list['',totalLength] )//totalLength - 指定合并后Buffer对象的总长度。
    var buffer1 = new Buffer('W3Cschool教程 ');
    var buffer2 = new Buffer('www.w3cschool.cn');
    var buffer3 = Buffer.concat([buffer1,buffer2]);
    console.log("buffer3 内容: " + buffer3.toString());

//缓冲区比较
 buf.compare(otherBuffer);//返回一个数字，表示buf在otherBuffer之前，之后或相同

//拷贝缓冲区
buf.copy(target['要拷贝的Buffer对象', targetStart['数字, 可选, 默认: 0', sourceStart['数字, 可选, 默认: 0', sourceEnd]]]);

//缓冲区裁剪
buf.slice([start['数字', end]])