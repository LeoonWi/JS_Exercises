"use strict"; //Это включение строго режима, чтобы браузер включал все современные возможности языка.

let str1 = 'xxx';
let str2 = 'yyy';
let txt  = `aaa ${str1} bbb ${str2} ccc`;
alert(txt);

txt = `a \nb \nc`
alert(txt);

txt = `1
2
3`;
alert(txt);
//2 способа переноса строк