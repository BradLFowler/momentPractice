const moment = require('moment');

const day = moment().format('dddd');

console.log('Today is', day);

const month = moment().format('MM');

console.log(month);

const year = moment().format('yyyy');

console.log(year);