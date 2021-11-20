const EventEmitter = require('events').EventEmitter;
const eventEmitter = new EventEmitter();

console.log('Creating listener...');
eventEmitter.on('HelloWorldEvent', () => {
    console.log('HelloWorldEvent called.');
});

console.log('Emitting event...');
eventEmitter.emit('HelloWorldEvent');
eventEmitter.emit('HelloWorldEvent');
eventEmitter.emit('HelloWorldEvent');

console.log('Removing listener...');
eventEmitter.removeAllListeners('HelloWorldEvent');

console.log('Emitting event again... This time there is no listener.');
eventEmitter.emit('HelloWorldEvent');