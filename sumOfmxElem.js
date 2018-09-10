//Сумма элементов матрицы. Дана матрица N x M. Определите сумму всех ее элементов.

var newMatrix = [];
var sum = 0;

function mxArray(a, b) {
  var arr = []; 
  var a = +prompt('Введите длину первого массива!');
  var b = +prompt('Введите длину второго массива!');

  if (a <= 0 || b <= 0) {
  	alert ('Дина массива должна быть больше 0!');
  }

  for (var i=0; i < a; i++) {
    arr[i] = [];
    for (var j=0; j < b; j++) {
      arr[i][j] = Math.floor(Math.random() * (10 - 1) + 1);
      sum += arr [i][j];
    }
  }
  return arr;  
}
newMatrix = mxArray(); 
console.log (newMatrix);
console.log ('Сумма элементов матрицы  = ' + sum);