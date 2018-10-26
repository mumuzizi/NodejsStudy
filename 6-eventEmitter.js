var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent',function(arg1,arg2){
    console.log('listener1',arg1,arg2);
});
emitter.on('someEvent',function(arg1,arg2){
    console.log('listener2',arg1,arg2);
});
emitter.emit('someEvent','byvoid',1991);
//emitter 为事件someEvent注册了两个事件监听器，然后发射了someEvent事件。两个事件监听器回调函数被先后调用.
