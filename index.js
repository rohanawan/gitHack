const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git')
const FILE_PATH = './data.json';
const { Random } = require("random-js");

const random = new Random(); // uses the nativeMath engine

const commit = n =>{

    if (n===0) return simpleGit().push();
    const DATE = moment().format();
    const data = {
        date : DATE
    }
    console.log(data)
    jsonfile.writeFile(FILE_PATH , data , ()=>{
        simpleGit().add([FILE_PATH]).commit(DATE , {'--date': DATE }).push();
        commit.bind(this , --n)
    });
}


commit(50);