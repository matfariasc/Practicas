function printSumArray(x) {
    var sum = 0;
    for(var i=0; i<x.length; i++) {
      //your code here
      sum = x[i] + sum;
    }
    return sum;
  }
  console. log( printSumArray([1,2,3]) ); // debería imprimir 6