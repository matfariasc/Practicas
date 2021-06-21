function repetirValores(x){
    newarray = []
    for(var i = 0; i<x.length; i++){
        newarray.push(x[i]);
        newarray.push(x[i]);
    }
    return newarray;
}

 y =  repetirValores([4,"marco", 42, false]) ;
 console.log(y);