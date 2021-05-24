//24-05-2021
//1
function imprimeHasta(x) {
    if (x >=1 ) {
        if (x <=1000000){
            console.log(x)
        }else{
            return 'false'
        }
    }else{
        return 'false'
    }
}
imprimeHasta(1000000); // debe imprimir todos los enteros desde el 1 hasta el 1000000
y = imprimeHasta(-10); 
console.log(y); // debe imprimir false

//2
function printSum(x) {
    var sum = 0;
    for (var i = x; i >0; i--){
        sum += i
    }
    return sum
}
y = printSum(255) // debe imprimir todos los enteros desde el 0 hasta el 255, y la suma parcial en cada punto
console.log(y) // debe imprimir 32640

//3
function printSumArray(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum += x[i]
    }
    return sum;
}
console.log( printSumArray([1,2,3]) ); // debe imprimir 6

//4
function mayorElem(x) {
    var mayorHastaAhora = x[0];
    for (var i = 0; i < x.length; i++){
        if (x[0] < x[i]){
            var temp = x[0]
            x[0] = x[i]
            x[i] = temp  
        }
    }
    mayorHastaAhora = x[0]
    return mayorHastaAhora;
}
console.log( mayorElem([8,3,11,2,-8]) ); // debe imprimir 11