/*Создание массива случайных целых чисел от 50 до 100,
используя цикл цикл for. Размер массива пусть будет 20.*/

var arR = [];

function newArray(quant, min, max, callback) {
  var arr = [];
  for (var i=0; i < quant; i++) {
  	arr[i] = [];
    arr[i] = Math.floor(Math.random() * (min - max) + min);
  } 
  console.log(arr);
  for (var i = 2; i < arr.length; i+=2) {
    arR.push (arr[i]);
  }
  callback();
}

newArray(20, 50, 100, function() {
	console.log(arR);
});