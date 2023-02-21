"use strict"; //Это включение строго режима, чтобы браузер включал все современные возможности языка.

let text = '12345';
let res = 0;
for(let i = 0; i < text.length; i++) {
    res = res + Number(text[i]);
}
alert(res);

let num = 12345;
num = String(num);
res = 0
for(let i = 0; i < num.length; i++) {
    res = res + Number(num[i]);
}
alert(res);

res = 1
for(let i = 0; i < num.length; i++) {
    res = res * num[i];
}
alert(res);

let new_num = '';
for(let i = 4; i >= 0; i--) {
    new_num += num[i];
}
alert(new_num);