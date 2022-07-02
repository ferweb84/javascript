let contrasena = 'coder1234';
let ingresoPsw = prompt('Bienvenido a "The Entre Tablas": \n Ingresa tu Contraseña');
let intentos = 3;

while ((ingresoPsw != contrasena)){
    intentos--;
    alert ('Contraseña Incorrecta... Te quedan '+' ' + intentos + ' '+ 'oportunidades');
    ingresoPsw = prompt('Ingresa Nuevamente');
    if (intentos == 0){
        alert ('te quedaste sin intentos');
        break;
    }
    
}

let tablas = prompt ("Que tipo de Tabla quieres?").toUpperCase();

switch (tablas){
    case 'TABLA CRIOLLA':
        alert ("La tabla tiene: Quesos y Fiambres");
    break;

    case 'TABLA FRITOS':
        alert ('La tabla tiene: Papas con huevo frito, patitas y milanesas');
    break;

    case 'TABLA DE MAR':
        alert ('La tabla tiene: Rabas, mejillones, Langostinos, salsa de palta y fritas');
    break;  

    case 'TABLA VEGETARIANA':
        alert ('La tabla tiene: Verduras a la chapa, con salsas y papas fritas');
    break;  

    default:
        alert(`La ${tablas} no existe`);
    break;
    
}



// let num1 = parseFloat(prompt ('Insertar Primer numero: '));
// let operacion = (prompt ('Insertar operacion matematica: '));
// let num2 = parseFloat(prompt ('Insertar Segundo numero: '));

// for (let i =0; i <=10; i++){
//     let resultado= num1 / i;
//     console.log(`${num1} x ${i} = ${resultado}`);
// }