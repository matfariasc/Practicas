function  printSum(x) {
    var sum = 0;
    //your code here
    for(var i = 0; i<=x; i++){
        sum = i + sum;
        console.log(i,"sum",sum)
    }
    return sum
  }
  y = printSum(255) // debería imprimir todos los enteros de 0 a 255 y que cada entero imprima la suma parcial.
  console. log(y) // // debería imprimir 32640