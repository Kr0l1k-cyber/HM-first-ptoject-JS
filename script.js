'use strict';

const test = function(arg) {
    if (typeof arg !== 'string') {
        console.error('Ошибка: Аргумент не является строкой');
        return;
    } 
    
    arg = arg.trim()

    if (arg.length > 30) {
        return arg.slice(0, 30) + '...';
      }

    return arg
}

console.log(test("Это длинная строка, которая содержит более 30 символов и будет обрезана"));