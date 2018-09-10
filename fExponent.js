﻿/*Функцию exponent() таким образом, 
чтобы можно было вызвать её до создания (вспомните что такое Function Expression
   и Function Declaration и выберете способ). 
Эта функция должна возводить в степень число. Она принимает на вход два параметра: число и степень. 
Поскольку возведение в степень - это умножение самого себя заданное число раз, 
то организовать всё умножением через цикл (while или for).*/

var res = 0;
var vN = 0;
var vP = 0;

vN = +prompt('Введите число!');
vP = +prompt('Введите степень, в которую необходимо возвести число!');
res =  exponent(vN, vP);
console.log('Число ' + vN + ' , ' + 'возведенное в ' +  vP + ' степень = ' + res);

function exponent(a, b) {
  var reS = 1;
  if (a === 0 || b ===0) {
  	alert('Значение не может быть равным 0!');
  }
  for (var i = 0; i < b; i++) {
  	reS  = reS * a; 
  }
  return reS; 
}