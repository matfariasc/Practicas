// 1. ************************************************
function cadenas(x,y){
    for(var i=0; i<x.length; i++){
        if(x.charAt(i) != y.charAt(i)){
            cambio = i;
            break
        }
    }
    return cambio
}
z = cadenas("perro","pero")
console.log(z);
z = cadenas("gatos","gato")
console.log(z);
z = cadenas("casa","Csa")
console.log(z);




// 2. ************************************************
function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function arrayrandon(){
    largo = random(3,7)
    newarray = []
    for(var i=0; i<largo; i++){
        newarray.push(random(0,99));
    }
    return newarray;
}
z = arrayrandon();
console.log(z);
z = arrayrandon();
console.log(z);
z = arrayrandon();
console.log(z);
z = arrayrandon();
console.log(z);