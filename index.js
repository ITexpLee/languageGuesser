//Package for language identification
const franc = require('franc');
//Package for converting 3 letter code to language name
const langs = require('langs');

//Fetch the text and convert into string
const text = process.argv.slice(2).join("");

//Check the text 
const code = franc(text);

//Use this 3 letter code to fetch the langauge name
const langName = langs.where("3", code);

//Print the lang name
console.log(langName.name);