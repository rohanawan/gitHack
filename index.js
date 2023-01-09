// const jsonfile = require('jsonfile');
var moment = require('moment-timezone');
// const simpleGit = require('simple-git')
// const FILE_PATH = './data.json';
// const { Random } = require("random-js");

// const random = new Random(); // uses the nativeMath engine

// const commit = n =>{

//     if (n===0) return simpleGit().push();
//     const DATE = moment().format();
//     const data = {
//         date : DATE
//     }
//     console.log(data)
//     jsonfile.writeFile(FILE_PATH , data , ()=>{
//         simpleGit().add([FILE_PATH]).commit(DATE , {'--date': DATE }).push();
//         commit.bind(this , --n)
//     });
// }


// commit(50);
// const last3days = moment().tz('America/New_York').subtract(3, 'days').format('DD');
// const last7days = moment().tz('America/New_York').subtract(7, 'days').format('YYYY-MM-DD');

// console.log(last3days)
// console.log(last7days)


const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

// eventEmitter.on('start', () => {
//     console.log('started');
//   });
// eventEmitter.emit('start');


// eventEmitter.on('start', number => {
//     console.log(`started ${number}`);
//   });
  
//   eventEmitter.emit('start', 23);

eventEmitter.on('start', (start, end) => {
    console.log(`started from ${start} to ${end}`);
  });
  
  eventEmitter.emit('start', 1, 100);