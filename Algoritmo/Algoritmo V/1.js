function resetNegativos(x){
    for(var i = 0; i<x.length; i++){
        if( x[i] <0 ){
            x[i] = 0;
        }
    }
    return x;
}

 y =  resetNegativos([1,2,-1,-3]);
 console.log(y);