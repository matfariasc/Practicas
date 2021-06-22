//1 Obtén del 1 al 255
function array255(){
    newarray = [];
    for(var i=1; i<=255; i++){
        newarray.push(i);
    }
    return newarray;
}                                                       

z = array255();
console.log(z);

//2 Consigue pares hasta 1000
function sumanumerospares(){
    sum = 0;
    for(var i=1; i<=1000; i++){
        if(i % 2 == 0){
            sum = i + sum;
        }
    }
    return sum;
}     
z = sumanumerospares();
console.log(z);

//3 Suma impares hasta 5000
function sumanumerosimpares(){
    sum = 0;
    for(var i=1; i<=5000; i++){
        if(i % 2 == 1){
            sum = i + sum;
        }
    }
    return sum;
}     
z = sumanumerosimpares();
console.log(z);

//4 Itera un array: Escribe una función que devuelva la suma de todos los valores dentro de un array (ej:  [1,2,5] retorna 8. [-5,2,5,12] retorna 14). 
function sumarray(x){
    sum = 0;
    for(var i=0; i<x.length; i++ ){
        sum = sum + (x[i])
    }
    return sum;
}
z = sumarray([10,20,30,40]);
console.log(z);
z = sumarray([-10,20,30,-40]);
console.log(z)

//5 Encuentra el mayor (max): Dado un array con múltiples valores, escribe una función que devuelva el número mayor (ej: para [-3,3,5,7] el número mayor (max) es 7). 
function arraymax(x){
    max = x[0]
    for(var i = 0; i<x.length; i++){
        if (x[i] > max){
            max = x[i];
        }
    }
    return max;
}
y = arraymax([20,22,30,44,56,62,24,10,9,10]);
console.log(y)
y = arraymax([2,5,8]);
console.log(y)

//6 Encuentra el promedio (avg): Dado un array con múltiples valores, escribe una función que devuelva el promedio de los valores (ej: para [1,3,5,7,20] el promedio es 7.2).
function arraymax(x){
    sum = 0;
    for(var i = 0; i<x.length; i++){
        sum = sum + x[i];
    }
    prom = sum/x.length;
    return prom;
}
y = arraymax([1,3,5,7,20]);
console.log(y)

//7 Array de impares: Escribe una función que devuelva un array de todos los números impares entre 1 y 50 (ej: [1,3,5, …, 47,49]). Pista: Usa el método ‘push’.
function array50impares(){
    newarray = []
    for(var i=1; i<=50; i++){
        if(i % 2 == 1){
            newarray.push(i);
        }
    }
    return newarray;
}     
z = array50impares();
console.log(z);

//8 Mayor que Y: Dado un valor Y, escribe una función que toma un array y devuelve los valores mayores que Y. Por ejemplo, si arr = [1,3,5,7] y Y = 3, tu función devolverá 2 (hay 2 números en el array mayores que 3, esto son 5 y 7). 
function arraymaxcount(x,z){
    sum = 0;
    for(var i = 0; i<x.length; i++){
        if( z < x[i] ){
            sum ++;
            
        }
    }
    return sum;
}
y = arraymaxcount([1,3,5,7],3);
console.log(y);

//9 Cuadrados: Dado un array con múltiples valores, escribe una función que reemplace cada valor por el cuadrado del mismo valor (ej: [1,5,10,-2] será [1,25,100,4]).
function cuadradosarray(x){
    for(var i=0; i<x.length; i++){
        x[i] = x[i] * x[i];
    }
    return x;
}
z = cuadradosarray([1,5,10,-2]);
console.log(z);

//10 Negativos: Dado un array con múltiples valores, escribe una función que reemplace cualquier número negativo dentro del array por 0. Cuando el programa esté listo, el array no debiera contener números negativos (ej: [1,5,10,-2] se convertirá en [1,5,10,0]).
function resetNegativos(x){
    for(var i = 0; i<x.length; i++){
        if( x[i] <0 ){
            x[i] = 0;
        }
    }
    return x;
}

 y =  resetNegativos([1,5,10,-2]);
 console.log(y);

 //11 Max/Min/Avg: Dado un array con múltiples valores, escribe una función que devuelva un nuevo array que solo contenga el valor mayor (max), menor (min) y promedio (avg) del array original (ej: [1,5,10,-2] devolverá [10,-2,3.5]).
function arraymaxminprom(x){
    min = x[0];
    max = x[0];
    sum = 0;
    newarray = [];
    for(var i = 0; i<x.length; i++){
        sum = x[i] + sum;
        if( x[i] < min ){
            min = x[i];
        }
        else if (x[i] > max){
            max = x[i];
        }
    }
    prom = sum/x.length;
    newarray.push(max)
    newarray.push(min)
    newarray.push(prom)
    return newarray
    
}
y = arraymaxminprom([1,5,10,-2]);
console.log(y)

//12 Intercambia Valores: Escribe una función que intercambie el primer y el último valor de cualquier array. La extensión mínima predeterminada del array es 2 (ej: [1,5,10,-2] será [-2,5,10,1]). 
function changenum(x){
    frist = x[0];
    x[0] = x[x.length -1];
    x[x.length -1] = frist;
    return x;
}
y = changenum([1,5,10,-2]);
console.log(y);

//13 De Número a String: Escribe una función que tome un array de números y reemplace cualquier valor negativo por el string ‘Dojo’. Por ejemplo, dado el array = [-1,-3,2], tu función devolverá [‘Dojo’,‘Dojo’,2].
function dojofuncion(x){
    for(var i = 0; i<x.length; i++){
        if( x[i] <0 ){
            x[i] = "Dojo";
        }
    }
    return x;
}

 y = dojofuncion([-1,-3,2]);
 console.log(y);