const arrayNumeros = [25, 10, 54, 2, 17, 11, 89, 75, 62, 33];

const [numero1, ,numero3, ,numero5,...restoNumeros] = arrayNumeros;

/*console.log("Número correspondiente a la posición 0:", numero1);
console.log("Número correspondiente a la posición 2:", numero3);
console.log("Número correspondiente a la posición 4:", numero5);
console.log("Resto de los valores numéricos:", restoNumeros);*/




//Objeto literal mascota

const mascota = {
    nombre: "Tomy",
    tipo: "perro",
    color: "Negro",
    raza: "Breton"
};

const{nombre, tipo, color, raza} = mascota;

console.log(`
---------------------------------------------------------
Hola, les presento a mi mascota. Su nombre es ${nombre}.
Es un hermoso ${tipo}, de color ${color} y su raza es ${raza}.
---------------------------------------------------------
`);












