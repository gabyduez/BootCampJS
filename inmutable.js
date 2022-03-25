const juan={
    nombre:"Juan",
    apellido:"Rodriguez",
    edad: 30,
    direccion:{
        departamento:"Guatemala",
        municipio:"Guatemala"
    }
};
 
 //const juan2 = Object.assign({},juan,{nombre:'pedro'});
 //juan2.apellido='Perez';

const juan2 = {...juan, apellido:"perez", telefono:"123",
direccion:{
    ...juan.direccion
}};
juan2.direccion.municipio="Santa Catalina Pinula";

 //console.log(juan);
//console.log(juan2);

//ARREGLOS
const  numeros = [1,2,3];
//const  numeros2 = numeros;
const numeros2=[0,...numeros,4]

const index = numeros.indexOf(2);
const numero3 = [
    ...numeros.slice(0,index),1.5,...numeros.slice(index)
];
const numeros4 =numeros.filter(x=> x!=2);
const numeros5 = numeros.map(x=> x==2 ? 100 : x); //if ternario
numeros2.push(5);

console.log("numeros:",numeros);
console.log("numeros2:",numeros2);
console.log("numeros3:",numero3);
console.log("numeros4:",numeros4);
console.log("numeros5:",numeros5);