
// работа с JSON 
const Jsoning = require('jsoning');
let database = {
    base: new Jsoning('database.json')
};
database.base.clear()
let a = database.base.all();
console.log(a);