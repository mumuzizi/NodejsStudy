var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event',function(){
    console.log('some_event occured.');
});
setTimeout(function() {
    event.emit('some_event');
}, 1000);
//events 模块只提供了一个对象： events.EventEmitter。
//EventEmitter 的核心就是事件发射与事件监听器功能的封装。
//EventEmitter 的每个事件由一个事件名和若干个参 数组成，当事件发射时，注册到这个事件的事件监听器被依次调用，事件参数作 为回调函数参数传递。
//emitter.on(event,listener)和emitter.addListener(event,listener)意思一样，都是为指定事件注册一个监听器。
//EventEmitter.emit(event, [arg1], [arg2], [...]) 发射 event 事件，传递若干可选参数到事件监听器的参数表。
//EventEmitter.once(event, listener) 为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
//EventEmitter.removeListener(event, listener) 移除指定事件的某个监听器，listener 必须是该事件已经注册过的监听器。
//EventEmitter.removeAllListeners([event]) 移除所有事件的所有监听器， 如果指定 event，则移除指定事件的所有监听器。

//继承 EventEmitter
//大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。
//为什么要这样做呢？原因有两点：

//1、具有某个实体功能的对象实现事件符合语义， 事件的监听和发射应该是一个对象的方法。
//2、JavaScript 的对象机制是基于原型的，支持 部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系。