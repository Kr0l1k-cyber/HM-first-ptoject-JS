let num = 266219;

let mas = [...266219+''].map(Number);
const res = mas.reduce((acc, rec) => acc * rec);
const deg = (res ** 3);
const str =String(deg)
console.log(str.substring(0,2));



