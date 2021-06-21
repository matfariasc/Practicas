function moverAdelante(x){
    for(var i = 0; i<x.length; i++){
        if(i == x.length - 1){
            x[i] = 0;
        }else{
            x[i] = x[i + 1];
        }
    }
    return x;
}

 y =  moverAdelante([1,2,3]);
 console.log(y);