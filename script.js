"use strict"; //Это включение строго режима, чтобы браузер включал все современные возможности языка.

let name = prompt('Введите ваш возраст:');
alert("Возраст: " + name);

let num1 = prompt('Введите первое число:');
let num2 = prompt('Введите второе число:');
alert(Number(num1) + Number(num2));

num1 = prompt('Введите одну сторону квадрата:');
alert(Number(num1)**2);

num1 = prompt('Введите первую сторону прямоугольника:');
num2 = prompt('Введите вторую сторону прямоугольника:');
alert((Number(num1) + Number(num2)) * 2);