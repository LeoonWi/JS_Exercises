"use strict"; //Это включение строго режима, чтобы браузер включал все современные возможности языка.

let arr = [1, 2, 3];
arr[0] += 3;
arr[1] += 3;
arr[2] += 3;
document.write(arr + '<br>');
arr = [1, 2, 3];
arr[0]++;
++arr[1];
arr[2]--;
document.write(arr);