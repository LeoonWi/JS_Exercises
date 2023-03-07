"use strict"; //Это включение строго режима, чтобы браузер включал все современные возможности языка.

let key = 'x';

let obj = {
	[key]: 1,
	y: 2,
	z: 3
};
document.write(obj['x'] + '<br>');

let key1 = 'x';
let key2 = 'y';
let key3 = 'z';

let obj2 = {
	[key1]: 1,
	[key2]: 2,
	[key3]: 3
};
document.write(obj['x'] + ' ' + obj['y'] + ' ' + obj['z']);