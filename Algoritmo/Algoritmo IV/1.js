function arraycount(x,z){
    sum = 0;
    for(var i = 0; i<x.length; i++){
        if( z < x[i] ){
            console.log(x[i]);
            sum ++;
            
        }
    }
    console.log(sum);
}
 y = arraycount([1,2,3,4,5,6,7,8,9,10],5);
 y = arraycount([2,5,8],5);
