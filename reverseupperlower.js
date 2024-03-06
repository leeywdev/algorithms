"use strict";

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    let str = input[0];

    let i = 0;
    let newstr = [];
    while (i<=str.length) {
        let char = str.charAt(i);
        const regexp = /[A-Z]/;
        if (regexp.exec(char)) {
            char = char.toLowerCase();
        } else {
            char = char.toUpperCase();
        }
        newstr.push(char);
        i++;
    }
    console.log(newstr.join(''));
});