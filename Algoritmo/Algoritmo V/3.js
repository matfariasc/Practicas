function returnReverso(x){
    newarray = []
    sum = 1;
    for(var i = 0; i<x.length; i++){
        newarray.push(x[x.length-sum])
        sum++;
    }
    return newarray;
}

 y =  returnReverso([1,2,3]);
 console.log(y);