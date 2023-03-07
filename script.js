"use strict"; //Это включение строго режима, чтобы браузер включал все современные возможности языка.

let obj = {x: 1, y: 2, z: 3};
document.write('Было: ' + obj.x + ' ' + obj.y + ' ' + obj.z + '<br>');
obj.x = obj.x**2;
obj['y'] = obj.y**2;
obj.z = obj.z**2;
document.write('Стало: ' + obj.x + ' ' + obj.y + ' ' + obj.z);