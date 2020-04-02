const EventEmitter = require('events');

// Create Class for the Events
class MyEmitter extends EventEmitter {}

// Initialize the class object
const myEmitter = new MyEmitter();

// Event Listener
myEmitter.on('event', () => {
  console.log('Event Triggered');
});

// Initialize the event
myEmitter.emit('event');
