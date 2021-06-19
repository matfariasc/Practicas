function returnOddArray(){
    // your code here
    var x = []
    for(var i = 0; i<=255; i++){
        if( i % 2 == 1){
            x.push(i);
        }
    }
    return x;
 }
 y = returnOddArray();
 console. log(y); // should log [1,3,5,...,253,255]