//1-Tamaño Grande - Dado un array, escribe una función que cambie todos los números positivos en él, por el string “big”. Ejemplo: grande([-1,3,5,-5]) devuelve [-1, “big”, “big”, -5].
function grande(x){
    for(var i = 0; i<x.length; i++){
        if( x[i] > 0 ){
            x[i] = "big";
        }
    }
    return x;
}
z = grande([-1,3,5,-5]);
console.log(z);

//2-Imprime (print) el menor, devuelve (return) el mayor - Crea una función que tome un array de números. La función debería imprimir (print) el menor valor del array, y devolver (return) el mayor. 
function printmenor(x){
    min = x[0];
    max = x[0];
    for(var i = 0; i<x.length; i++){
        if( x[i] < min ){
            min = x[i];
        }
        else if (x[i] > max){
            max = x[i];
        }
    }
    console.log(min);
    return max;
}
z = printmenor([5,8,4,3,2,20]);
console.log(z);

//3-Imprime (print) uno, devuelve (return) otro- Crea una función para un array de números. La función debería imprimir (print) el penúltimo valor y devolver (return) el primer valor impar.
function printfristimpar(x){
    console.log(x[x.length -1])
    var primerimpar = 0;
    for(var i = 0; i<x.length; i++){
        if (x[i] % 2 == 0){
            primerimpar = x[i];
            break
        }
    }
    return primerimpar
}  
z = printfristimpar([1,2,3,4,5,6,7,8,9]);
console.log(z);

//4-Doble Visión - Dado un array, crea una función que devuelva un nuevo array donde cada valor se duplique. Entonces, doble([1,2,3]) debiera devolver [2, 4, 6] sin cambiar el array original. 
function doble(x){
    for(var i=0; i<x.length; i++){
        x[i] = x[i] + x[i];
    }
    return x
}
z = doble([1,2,3])
console.log(z)

//5-Contar Positivos -  Dado un array de números, crea una función para reemplazar el último valor con el número de valores positivos encontrados en el array. Ejemplo, contarPositivos([-1,1,1,1]) cambia el array original y devuelve [-1,1,1,3].
function contarPositivos(x){
    sum = 0
    for(var i=0; i<x.length; i++){
        if(x[i] > 0){
            sum++;
        }
    }
    x[x.length -1] = sum;
    return x
}
z = contarPositivos([-1,1,1,1])
console.log(z);

//6-Pares e Impares - Crea una función que acepte un array. Cada vez que ese array tenga 3 valores impares seguidos, imprime (print) “¡Qué imparcial!”, y cada vez que tenga 3 pares seguidos, imprime (print) “¡Es para bien!”.
function detectorparimpar(x){
    sumpar = 0;
    sumimpar = 0;
    for(var i=0; i<x.length ;i++){
        if(x[i] % 2 == 0){
            sumpar++;
            if(sumpar == 3){
                console.log("¡Es para bien!");
                sumpar = 0;
            }
        }else if (x[i] % 2 != 0){
            sumimpar ++;
            if(sumimpar ==3){
                console.log("¡Qué imparcial!")
                sumimpar = 0;
            }
        }
    }
}
z = detectorparimpar([1,2,3,4,5,6,7,8,9,10,11,12,13])

//7-Incrementa los Segundos - Dado un array de números llamado arr, suma 1 a los elementos, específicamente a aquellos cuyo índice es impar (arr[1], arr[3], arr[5], etc). Luego, imprime (console.log) cada valor del array y devuelve el arreglo arr. 
function incrementSeconds(arr){
    for(var i = 1; i < arr.length; i+=2){
        arr[i] = arr[i] + 1;
    }
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    return arr;
}

console.log(incrementSeconds([1,2,3,4,5]));

//8-Longitudes previas - Pasado un array (similar a decir ‘tomado un array’ o ‘dado un array’) que contiene strings, reemplaza cada string con un número de acuerdo cantidad de letras (longitud) del string anterior. Por ejemplo, longitudesPrevias([“programar”,“dojo”, “genial”]) debería devolver [“programar”,9, 4]. Pista: ¿For loops solo puede ir hacia adelante?
function longitudesPrevias(x){
    for (var i = x.length-1; i > 0; i--){
        x[i] = x[i-1].length;
    }
    return x;
}

z = longitudesPrevias(["programar","dojo", "genial"])
z = console.log(z);

//9-Agrega Siete - Construye una función que acepte un array. Devuelve un nuevo array con todos los valores del original, pero sumando 7 a cada uno. No alteres el array original. Por ejemplo, agregaSiete([1,2,3) debería devolver [8,9,10] en un nuevo array. 
function agregaSiete(x){
    for(var i=0; i<x.length; i++){
        x[i] = x[i] + 7;
    }
    return x
}
z = agregaSiete([1,2,3]);
console.log(z);

//10-Array Inverso - Dado un array, escribe una función que invierte sus valores en el lugar. Ejemplo: invertir([3,1,6,4,2)) devuelve el mismo array pero con sus valores al revés, es decir [2,4,6,1,3]. Haz esto sin crear un array temporal vacío. (Pista: necesitarás intercambiar (swap) valores).
function invertir(x){
    newarray = [];
    for(var i=x.length-1; i>=0 ; i--){
        newarray.push(x[i]);
    }
    return newarray
}
z = invertir([3,1,6,4,2]);
console.log(z);

//11-Perspectiva: Negativa - Dado un array crear y devuelve uno nuevo que contenga todos los valores del array original, pero negativos (no simplemente multiplicando por -1). Dado [1,-3,5], devuelve [-1,-3,-5].
function arraynegativo(x){
    for(var i=0; i<x.length ; i++){
        if(x[i] >0 ){
            x[i] = x[i] * -1;
        }
    }
    return x
}
z = arraynegativo([1,-3,5]);
console.log(z);

//12-Siempre hambriento - Crea una función que acepte un array e imprima (print) “yummy” cada vez que alguno de los valores sea “comida”. Si ningún valor es “comida”, entonces imprime “tengo hambre” una vez. 
function detectorhambre(x){
    comida = 0
    for(var i=0 ; i<x.length ; i++){
        if(x[i] == "comida"){
            console.log("yummy");
            comida++;
        }
    }
    if(comida == 0){
        console.log("tengo hambre")
    }
}
z = detectorhambre(["comida","comida"])
z = detectorhambre(["",""])

//13-Cambiar hacia el centro -  Dado un array, cambia el primer y último valor, el tercero con el ante penútimo, etc. Ejemplo: cambiaHaciaElCentro([true, 42, “Ada”, 2, “pizza”]) cambia el array a [“pizza¨, 42, “Ada”, 2, true]. cambiaHaciaElCentro([1,2,3,4,5,6]) cambia el array a [6,2,4,3,5,1]. No es necesario devolver (return) el array esta vez.     
function cambiaHaciaElCentror(x){
    for (var i = 0; i < x.length/2; i+=2){
        var temp = x[i];
        x[i] = x[x.length-1-i];
        x[x.length-1-i] = temp;
    }
    return x;
}
z = cambiaHaciaElCentror([1,2,3,4,5,6])
console.log(z)
z = cambiaHaciaElCentror([true,42,"ada",2,"pizza",])
console.log(z)

//14-Escala el Array - Dado un array arr y un número num, multiplica todos los valores en el array arr por el número num, y devuelve el array arr modificado. Por ejemplo, escalaArray([1,2,3], 3] debería devolver [3,6,9].
function scaleArray(arr, num){
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i]*num;
    }
    return arr;
}
console.log(scaleArray([1,2,3,4],4));