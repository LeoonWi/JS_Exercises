"use strict"; //Это включение строго режима, чтобы браузер включал все современные возможности языка.

let obj = {
	'1a': 1,
	b2: 2,
	'с-с': 3,
	'd 4': 4,
	e5: 5
};

let obj2 = {
	'1a': 1,
	b2: 2,
	'с-с': 3,
	'd 4': 4,
	e5: 5
};

document.write(obj2['1a']);
document.write(obj2.b2);
document.write(obj2['с-с']);
document.write(obj2['d 4']);
document.write(obj2.e5);