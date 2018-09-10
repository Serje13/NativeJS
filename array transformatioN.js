/*Приложение преобразующее массив так, чтобы сначала шли все отрицательные элементы,
а потом положительные(0 считать положительным).
 Например дан массив [1, -4, 0, 6, 17, -5, 0] – будет [-4, -5, 1, 0, 6, 17, 0]*/


// Метод sort
function compareNum(a, b) {
	return a - b;
}
var arr = [1, -4, 0, 6, 17, -5, 0];
arr.sort(compareNum);
alert(arr);

// метод ForEach и splice
/*var arr = [1, -4, 0, 6, 17, -5, 0];
arr.forEach(function(item, i, arr) {
	if (item < 0) {
  	arr.splice(i, 1);
    arr.unshift(item);
  }
});
alert(arr);*/

// метод splice
/*var arr = [1, -4, 0, 6, 17, -5, 0];
arr.splice(1, 1);
alert(arr);
arr.splice(4, 1);
alert(arr);
arr.splice(0 , 0, -4, -5);
alert(arr);*/