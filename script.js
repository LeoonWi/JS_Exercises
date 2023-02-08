"use strict"; //Это включение строго режима, чтобы браузер включал все современные возможности языка.

let a = '10', b = '20';
alert(Number(a) + Number(b));

//alert( Number('2') + Number('3')); Выведет 5

//alert(2 + Number('3')); Выведет 5

//alert('2' + Number('3')); Выведет 23

a = '2', b = '3';
alert(+a + +b)