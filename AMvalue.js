/* Приложение, 
определяющее среднее арифметическое положительных/отрицательных/ненулевых
 элементов массива.*/

var arr = [1, 5, 0, 10, 0, 20, -6, 0, -1, 2, -13];
var arrAver = new Array(3);
var amP;
var amN;
var amNZ;
var sumP = 0;
var sumN = 0;
var sumNZ = 0;
var quantityP = 0;
var quantityN = 0;
var quantityNZ = 0;

function arithMean (a, b) {
	return (a / b);
}

for (var i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    sumP += arr[i];
    quantityP++;
    amP = arithMean(sumP, quantityP);
  }
  
  if (arr[i] < 0) {
  	sumN += arr[i];
    quantityN++;
    amN = arithMean(sumN, quantityN);
  }
  
  if (arr[i] != 0) {
  	sumNZ += arr[i];
    quantityNZ++;
   	amNZ = arithMean(sumNZ, quantityNZ);
  }
}
arrAver.push (amP, amN, amNZ); 
arrAver.forEach(function(v) {
  console.log(Math.round(v *100) / 100);
});