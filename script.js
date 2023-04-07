'use strict';

const ru = 'Понедельник, вторник, среда, четверг, пятница, суббота, восскресенье';
const en = 'Monday, tuesday, wensdey, thursday, friday, saturday';

let lang = 'en';

if (lang === 'ru') {
    console.log(ru);
} else if (lang === 'en') {
    console.log(en);
} else {
    console.log('Неверное значение переменной lang');
}
