function arraymaxminprom(x){
    min = x[0]
    max = x[0]
    sum = 0
    for(var i = 0; i<x.length; i++){
        sum = x[i] + sum;
        if( x[i] < min ){
            min = x[i];
        }
        else if (x[i] > max){
            max = x[i];
        }
    }
    prom = sum/x.length;
    console.log("minimo :",min,",maximo :",max,",promedio :",prom);
}
 y = arraymaxminprom([20,22,30,44,56,62,24,10,9,10]);
 y = arraymaxminprom([2,5,8]);
