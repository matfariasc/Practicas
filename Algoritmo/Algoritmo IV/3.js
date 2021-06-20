function dojofuncion(x){
    for(var i = 0; i<x.length; i++){
        if( x[i] <0 ){
            x[i] = "Dojo";
        }
    }
    return x;
}

 y = dojofuncion([1,2,-3,-5,5]);
 console.log(y);