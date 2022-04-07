// Import events module
// var events = require('events');
import events from 'events';

const eventEmitter = new events.EventEmitter();

eventEmitter.on('connection2', function connected(data) {
    console.log('connection succesful.', data);
    // database entry 
   // ui inform 
   // socket emit 
   // log file 
});


setTimeout(() => {
    eventEmitter.emit('connection2', "data that you want to send");
}, 5000)
