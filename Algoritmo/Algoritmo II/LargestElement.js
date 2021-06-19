y = [1,30,5,7];
for(var i =0; i<y.length; i++ ){
    if( y[0]<y[i]){
        var menor = y[0];
        y[0] = y[i];
        y[i] = menor;
    }
}
console.log(y[0]);