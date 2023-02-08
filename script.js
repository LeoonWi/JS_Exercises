"use strict"; //Это включение строго режима, чтобы браузер включал все современные возможности языка.

let a = '12345';
let b = 0;
for(let i = 0; i < a.length; i++) {
    b = b + Number(a[i]);
}
alert(b);

a = String(12345);
b = 0;
for(let i = 0; i < a.length; i++) {
    b = b + Number(a[i]);
}
alert(b);

b = 1;
for(let i = 0; i < a.length; i++) {
    b = b * a[i];
}
alert(b);

b = a[4] + a[3] + a[2] + a[1] + a[0];
alert(b);