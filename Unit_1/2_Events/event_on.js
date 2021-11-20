var events = require('events');
var myEmitter = new events.EventEmitter();

function c1() {
   console.log('an event occurred!');
}

function c2() {
   console.log('yet another event occurred!');
}

function c3() {
   console.log('Third event occurred!');
}

myEmitter.on('eventOne', c1); // Register for eventOne
myEmitter.on('eventOne', c2); // Register for eventOne
myEmitter.on('eventOne', c3);
myEmitter.emit('eventOne');

// Registering for the event to be fired only one time using once.
//myEmitter.once('eventOnce', () => console.log('eventOnce once fired')); 
//myEmitter.emit('eventOnce');

//Registering for the event with callback parameters
//myEmitter.on('status', (code, msg)=> console.log(`Got ${code} and ${msg}`));
//myEmitter.emit('status', 200, 'ok');

//Unregistering events
//myEmitter.off('eventOne', c1);
//myEmitter.emit('eventOne');

//Getting Listener count
//console.log(myEmitter.listenerCount('eventOne'));

//Getting Raw Listeners

//console.log(myEmitter.rawListeners('eventOne'));

