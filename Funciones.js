// 3-funciones.js

// 1. Tu primera función
// 1.1 Escribe una función llamada `despedir` que imprima "Adiós" en la consola.
    // Tu código aquí
function despedir(){
    console.log('Adios');
}

// 1.2 Crea una función llamada `multiplicarPorDos` que tome un número como parámetro y devuelva el doble de ese número.
    // Tu código aquí
function multiplicarPorDos(numero){
    let resultado = numero * 2;
    console.log(resultado);
    return resultado;
}

// 1.3 Crea una función llamada `esMayorDeEdad` que tome un número como parámetro y devuelva `true` si es mayor de 18, o `false` en caso contrario.
    // Tu código aquí
function esMayorDeEdad(numero){
    if (numero >= 18){
        console.log(true);
    }else{
        console.log(false)
    }
}
// 2. Parámetros
// 2.1 Crea una función llamada `multiplicar` que reciba dos parámetros, los multiplique y devuelva el resultado.
    // Tu código aquí
function multiplicar(a,b){
    return a * b;
}
// 2.2 Escribe una función llamada `saludarPersonalizado` que reciba dos parámetros: `nombre` y `apellido`. La función debe devolver "Hola, [nombre] [apellido]".
    // Tu código aquí
function saludarPersonalizado(nombre,apellido){
    console.log("Hola " + nombre + apellido);
}

// 2.3 Crea una función llamada `calcularPotencia` que reciba dos parámetros: base y exponente. La función debe devolver el resultado de elevar la base al exponente.
    // Tu código aquí
function calcularPotencia(base,exponente){
    return Math.pow(base,exponente);
}

// 2.4 Escribe una función llamada `restar` que reciba dos parámetros y devuelva la diferencia entre ellos.
    // Tu código aquí
function restar(a,b){
    return a - b;
}

// 2.5 Crea una función llamada `dividir` que reciba dos parámetros y devuelva el resultado de la división del primer parámetro por el segundo.
    // Tu código aquí
function dividir(a,b){
        return a / b;
}
    
// 3. Function Expression
// 3.1 Crea una **function expression** que multiplique dos números y asígnala a la variable `funcionMultiplicar`.
    // Tu código aquí
const funcionMultiplicar = function(a, b) {
        return a * b;
};
    

// 3.2 Escribe una **function expression** llamada `saludar` que acepte un parámetro `nombre` y devuelva "Hola, [nombre]".
    // Tu código aquí
const saludar = function(nombre){
    return "Hola" + nombre;
}

// 3.3 Crea una **function expression** llamada `esPar` que acepte un número como parámetro y devuelva `true` si el número es par, o `false` en caso contrario.
    // Tu código aquí
const esPar= function(numero){
    if (numero % 2 === 0){
        console.log(true);
    }else{
        console.log(false)
    }
}
// 4. Funciones Flecha
// 4.1 Convierte la siguiente función en una función flecha llamada multiplicarFlecha:
// function multiplicar(a, b) {
//     return a * b;
// }
    // Tu código aquí
const multiplicarFlecha = (a, b) => a * b;

// 4.2 Crea una función flecha llamada `saludarFlecha` que reciba un parámetro `nombre` y devuelva "Hola [nombre]".
    // Tu código aquí
const saludarFlecha = nombre => "Hola " + nombre;

// 4.3 Escribe una función flecha llamada `calcularArea` que reciba el radio de un círculo y devuelva el área del círculo. Usa la fórmula A = π * r².
    // Tu código aquí
const calcularArea = radio => Math.PI * Math.pow(radio,2);

// 5. Recursividad
// 5.1 Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva. Por ejemplo: `suma(3) -> 1 + 2 + 3 = 6`
    // Tu código aquí
function suma(n) {
    if (n === 0){
        return 0;
    }else{
        return n + suma(n-1);
    }
}

// 5.2 Escribe una función que calcule la sucesión de Fibonacci de forma recursiva. La sucesión de Fibonacci es una serie de números que empieza por 0 y 1 y cada número es la suma de los dos anteriores. Por ejemplo: `fibonacci(6) -> 8`
    // Tu código aquí
function fibonacci(n) {
    if (n <= 1){
        return n;
    }else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

// 5.3 Crea una función recursiva llamada `factorial` que calcule el factorial de un número. El factorial de n (n!) es el producto de todos los números enteros positivos menores o iguales a n.
    // Tu código aquí
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

// 5.4 Escribe una función recursiva que calcule la potencia de un número dado el exponente. Por ejemplo: `potencia(2, 3) -> 8`
    // Tu código aquí
function potencia(base, exponente) {
    if(exponente === 0){
        return 1;
    }else{
        return base * potencia(base, exponente - 1);
    }
}

// Exportar las funciones para que puedan ser probadas
module.exports = {
    despedir,
    multiplicarPorDos,
    esMayorDeEdad,
    multiplicar,
    saludarPersonalizado,
    calcularPotencia,
    restar,
    dividir,
    funcionMultiplicar,
    saludar,
    esPar,
    calcularArea,
    suma,
    fibonacci,
    factorial,
    potencia,
    saludarFlecha,
    multiplicarFlecha,
};

//Llamamos a las funciones
//Funcion despedir
despedir();

//Funcion multiplicarPorDos
multiplicarPorDos(5);

//Funcion es MayordeEdad
esMayorDeEdad(19);

//Utilizamos la funcion multiplicar
const resultadomult = multiplicar(4, 3)
console.log(resultadomult) 

//Funcion de saludo personalizado
saludarPersonalizado('Juan ','Perez');

//Calculamos la potencia
console.log(calcularPotencia(2,3))

//Calculamos la diferencia
const resultadores = restar(5, 2)
console.log(resultadores) 

//Calculamos la division
const resultadodiv = dividir(60, 2)
console.log(resultadodiv) 

//Funcion expresion de Multiplicar
console.log(funcionMultiplicar(4,5));

//Funcion expresion saludar
console.log(saludar(' Adrian'))

//Funcion expresion esPar
esPar(2)

//Funcion multiplicarFlecha
console.log(multiplicarFlecha(4,5));

//Funcion saludarFlecha
console.log(saludarFlecha('Ivan'));

//Funcion flecha calcularArea
console.log("Area: "+ calcularArea(5));

//Recursividad suma
console.log(suma(4));

//Recursividad fibonacci
console.log(fibonacci(8));

//Recursividad de un factorial
console.log(factorial(5));

//Recursividad de una potencia
console.log(potencia(2,2))