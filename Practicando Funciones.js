//23-05-2021
//1
function a() {
    console.log('hola');
}
console.log('Dojo');

// Se muestra en la consola : 'Dojo'

//2
function b() {
    console.log('hola');
    return 15;
}
var x = b();
console.log('x es', x);

// Se muestra en la consola : 'hola','x es',5

//3
function a(n) {
    console.log('n es', n);
    return n+15;
}
var x = a(3);
console.log('x es', x);

// Se muestra en la consola : 'n es',3,'x es',18

//4
var z = 15;
console.log(z);
function a(z){
   console.log(z);   
   return z;
}
var b = a(10);
console.log(b);
console.log(z);