/* Приложение, копирующее элементы 2-х массивов  в один массив следующим образом: 
сначала копируются последовательно все элементы, большие 0, затем последовательно все элементы, 
равные 0, а затем последовательно все элементы, меньшие 0.*/

var arr1 = [1, 3, -4, -20, 0, -5];
var arr2 = [-13, 4, 55, 0, -1, -8]; 
var arrAver = [];

function scunSlicePush(arr) {
	arr.forEach(function(item, i, arr) {
  	arr.slice(0);
  	arrAver.push(item);
		});
	return arrAver;
}

function scunPushPos(arr) {
	arr.forEach(function( item, i, arr) {
  	if (arr[i] > 0) { 
  	arrAver.push(item);
    }
  });
	return arrAver;
}

function scunPushNul(arr) {
	arr.forEach(function(item, i, arr) {
    if (arr[i] === 0) {
      arrAver.push(item);  
    }
  });
	return arrAver;
}  
function scunPushNeg(arr) {
	arr.forEach(function (item, i, arr) {
    if (arr[i] < 0) {
      arrAver.push(item);
    }
		});
	return arrAver;
}

scunSlicePush(arr1);
scunSlicePush(arr2);
scunPushPos(arrAver);
scunPushNul(arrAver);
scunPushNeg(arrAver);
console.log(arrAver);
