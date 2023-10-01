/*La función 'sumar' toma dos números como argumentos (a y b) 
y devuelve su suma.*/
function sumar(a, b) {
    return a + b;  // Suma a y b y devuelve el resultado.
}

/*La función 'restar' toma dos números como argumentos (a y b) 
y devuelve su resta.*/
function restar(a, b) {
    return a - b;  // Resta b de a y devuelve el resultado.
}

/*La función 'multiplicar' toma dos números como argumentos (a y b) y 
devuelve su producto.*/
function multiplicar(a, b) {
    return a * b;  // Multiplica a y b y devuelve el resultado.
}

/*La función 'dividir' toma dos números como argumentos (a y b) 
y devuelve su cociente.*/
function dividir(a, b) {
    if (b != 0) {
        return a / b;  // Si b no es cero, divide a entre b y devuelve el resultado.
    } else {
        return 'Error: División por cero';  // Si b es cero, devuelve un mensaje de error.
    }
}

// Uso de las funciones
console.log("la suma es: " + sumar (4, 8));  // Imprime: 12
console.log ("la resta es: " + restar (6, 5));  // Imprime: 1
console.log ("la multiplicación es: " + multiplicar (7, 7));  // Imprime: 49
console.log ("la División es: " + dividir (8,2));  // Imprime: 4
console.log ("la División es: " + dividir (6, 0));  // Imprime: Error: División por cero
