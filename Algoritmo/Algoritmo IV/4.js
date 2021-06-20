function removerRango(x,y,z){
    newarray = []
    for( var i = 0; i<y; i++){
        newarray.push(x[i]);
        
    }
    for( z  ; z +1<x.length; z++){
        newarray.push(x[z]);
        
    }
    return newarray;
}

 y = removerRango([20,30,40,50,60,70],2,4);
 console.log(y);