const event=require('events').EventEmitter;
let emitter=new event();
module.exports=emitter;

var login=require('./login');
var account=require('./account');

emitter.emit('login',1);
emitter.emit('account');