const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

liste(colors);

function liste(arr) {
  var sumOdd = 0;
  var sumPar = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumPar++;
    } else {
      sumOdd++;
    }
  }
  
  console.log("Odd : " + sumOdd);
  console.log("Par : " + sumPar);
}