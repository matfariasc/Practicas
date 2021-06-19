function squareValue(x){
    // your code here
    for(var i = 0; i<x.length; i++){
        x[i] = x[i]*x[i]
    }
    return x;
 }
 y = squareValue([1,2,3]);
 console. log(y); // should log [1,4,9]
   
 y = squareValue([2,5,8]);
 console. log(y); // should log [4,25,64]