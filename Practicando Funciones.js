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

// Se muestra en la consola : 15,10,10,15

//5
var c = 15;
console.log(c);
function d(c){
   console.log(c);   
   return c*2;
}
var e = d(10);
console.log(e);
console.log(c);

// Se muestra en la consola : 15,10,20,15

//6
function a(n) {
    console.log('n es', n);
    y = n*2;
    return y;
}
var x = a(3) + a(5);
console.log('x es', x);

// Se muestra en la consola : 'n es',3,'n es',5,'x es',16

//7
function x(num1, num2) {  
    return num1+num2;
 }
 console.log(x(2,3))
 console.log(x(3,5))

// Se muestra en la consola : 5,8

//8
function y(num1, num2) {
    console.log(num1);   
    return num1+num2;
 }
 console.log(y(2,3))
 console.log(y(3,5))

// Se muestra en la consola : 2,5,3,8

//9
function z(a,b) {
    var c = a + b;
    console.log('c es', c);
    return c;
}
var x = z(2,3) + z(3,5);
console.log('x es', x);

// Se muestra en la consola : 'c es',5,'c es',8,'x es',13

//10
function d(a,b) {
    var c = a + b;
    console.log('c es', c);
    return c;
}
var x = d(2,3) + d(3,d(2,1)) + d(d(2,1),d(2,3));
//         5   +      6      +      3  +    5 = 19
console.log('x es', x);

// Se muestra en la consola : 'c es',5,'c es'3,'c es',6,'c es',3,'c es',5,'c es',8,'x es',19