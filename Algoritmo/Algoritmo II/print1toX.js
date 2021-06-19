function printUpTo(x) {
    // your code here
    if( x >0 ){
        for (var i = 1; i <= x; i++){
            console.log(i);
        }
    }else {
        console.log("Numero negativo");
        return false;
    }
  }
  printUpTo(1000); // debería imprimir todos los enteros de 1 to 1000
  y = printUpTo(-10); // debería imprimir falsecopy
  console. log(y); // debería imprimir f

