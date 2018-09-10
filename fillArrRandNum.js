/*Приложение, позволяющее двухмерный заполнить массив случайным образом 
значениями в диапазоне от -100 до 100 и выводит минимальное и максимальное значения.
Пользователь вводит длину массивов.*/

var newMatrix = [];
var max = 0;
var min = 0;

function mxArray(a, b) {
  var arr = []; 
  var a = +prompt('Введите длину первого массива!');
  var b = +prompt('Введите длину второго массива!');
  if (a <= 0 || b <= 0) {
  	alert('Дина массива должна быть больше 0!');
  }
  for (var i=0; i < a; i++) {
    arr[i] = [];
    for (var j=0; j < b; j++) {
      arr[i][j] = Math.floor(Math.random() * (100 - (-100 ))) + (-100);
    	if (arr[i][j] <= min) {
				min = arr[i][j];
			}
			if (arr[i][j] >= max){
				max = arr[i][j];
			}
    }
  }
  return arr;
}
newMatrix = mxArray();
console.log(newMatrix);
console.log('Максимальное значение = ' + max + ' ' + 'Минимальное значение = ' + min);