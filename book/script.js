
// работа с JSON 
const Jsoning = require('jsoning');
let database = new Jsoning('database.json');
//  database = new Jsoning('../database.json');

let a = {
    dishes:{
        pon:{
            name:'porn'
        }
    },
    id:09090
}

database.set("foo", "bar");
database.set("hi", 3);
database.set("en", "db"); // { "en": "db    
database.set("en", "en"); // { "en": "en" }




