"use strict"; //Это включение строго режима, чтобы браузер включал все современные возможности языка.

let a;
alert(a);

a = null;
alert(a);

let b;
a = true, b = false;
alert(a);
alert(b);
a = 'abc', b = 'def';
alert(a * b);
alert(10/0);
alert(-10/0);