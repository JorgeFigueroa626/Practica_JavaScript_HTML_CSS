///////////////////////////////////////////////////////////////////////////////////////////

/**
  ARRAYS

//OBETENER UN ARRAY

 arrays = ["verdura", "fruta", "planta", 2,9]

    document.write(arrays[2]);
//////////

//OBTENER  Y NOMBRAR UN ARRAYS EN ASOCIATIVA

let pc1 = {
    nombre: "lapto",
    procesador: "core i7",
    memoria: "14 ram",
}

let pc2 = ["lapto","core i7", "14 ram"]

let nombre= pc1["nombre"];
let procesador= pc1["procesador"];
let memoria= pc1["memoria"];

frace =`el nombre de la pc: <b> ${nombre}</b> <br>
        el procesador de la pc: ${procesador} <br>
        el memoria de la pc: ${memoria} <br>
`
document.write(frace);
 */

///////////////////////////////////////////////////////////////////////////////////////////

/**CONDICIONALES DE IF, WHILE - DO WHILE y FOR */

//EL IF EJECUTA SOLO UNA VES
/*
let numero =0;
 if (numero < 6) {
     numero++;
 }
 document.write(numero);
*/

//EL WHILE  O DO WHILE, EJECUTA HASTA CUMPLIR LA CONDICION, ES UN BUCLE INFINITO

// let numero = 0;

// while(numero <20){
//       console.log(numero)
//      numero++;

//     //OPCION PARA QUE SE DETENGA HASTA 10
//     // if (numero == 10)
//     //     breack;
//  }
//  document.write("fin")
//  //Res:1.2.3.4.5.6.7.8.9

// do{
//   console.log(numero)
//   numero++;

// }
// while (numero <20)

///////////////////////////////////////////////////////////////////////////////////////////

/////CONDICIONALES DE FOR

//const elem = [1,2,3,4,5,6,7,8,9];

// for (let index = 0; index < elem.length; index++) {
//     document.write(elem[index])
// }

//INVERSA
// for (let index = 6; index >= 0; index--) {
//     document.write(index)
// }

/*
//UTILIZANDO UNA VARIABLE
for (let index = 6; index < 20; index++) {

    //DETEMOS HASTA UN NUMERO
    if (index == 9) {
        break; //se detiene hasta el numero 9
        //continue; //continua la secuencia hasta el 20, pero omite el 9
    }
    document.write(index)
}
document.write(index);
*/

/////CONDICIONALES DE FOR IN ->DEVUELVE EL INDICE(POSICION DEL VALOR),
// PERO PODES AGREGAR "animales[animal]" y te devulve el objeto

// let animales =["gato", "perro", "tigre"];
// let numero = [0,1,2,3,4,5,6,7];

/*
for(const animal in animales){
    document.write(animales[animal] + "<br>");//muestra el valor de la posiscion,indice
    //document.write(animales[animal]); ///para que //muestra el objeto
}
*/

/////CONDICIONALES DE FOR OF ->DEVUELVE EL VALOR O OBJETO
/*
for(const num of numero){
    document.write(numero[num]);//muestra el objeto
}
*/

/*
array1 = ["maria", "jose", "luis"];
array2 = ["mary", "jorge", array1, "lucas"];

//forRancio: -> termina cuando encuentra el array en la pos
forRancio:
for (array in array2) {
  if (array == 2) {
    for (let array of array1) {
      document.write(array + "<br>");
       break forRancio;
    }
  } else {
    document.write(array2[array] + "<br>");
  }
}
*/

///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////FUNCIONES
/*
function suma(num1, num2){
    let res = num1 + num2;
    return res;
}
let sumar= suma(20,20);
document.write(sumar);

document.write("<br>");
///////////////////

function saludar(nombre){
    let saludo = `Hola como estas mi nombre es ${nombre}`;
    document.write(saludo)
}

//////////////FUNCION Arrow DE FLECHA, PERO LA MISMA
const saludar = (nombre)=>{
        let saludo = `Hola como estas mi nombre es ${nombre}`;
        document.write(saludo)
}

saludar("Pedro");
*/

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////POO/////////////////////////////////

/*
///CREAMOS UNA CLASE, UN METODO, POLIMORFISMO
//CLASE
class Animal{
    constructor(nombre, edad, color){
        this.nombre = nombre;
        this.edad = edad;
        this.color = color;
        this.info = `soy ${this.nombre}, mi edad ${this.edad} y soy de color ${this.color}`;
    }
    //METODO
    verInfo(){
        document.write(this.info + "<br>");
    }
    //POLIMORFISMO
    // ladrar(){
    //     if (this.nombre == "pero") {
    //         document.write("wan!" + "<br>");
    //     }else {
    //         document.write(`Este animal no puede ladrar por que es ${this.nombre}` + "<br>");
    //     }
    // }
}

//HERRENCIA, METODO
class Perro extends Animal {
    constructor(nombre, edad,color,raza){
        super(nombre,edad,color);
        this.raza = raza;
    }
    //METODO
    ladrar(){
        alert("WAN!");
    }
}
//DECLARAMOS LAS VARIABLE
let peros = new Perro("pero",5,"negro", "doberman");
let gato = new Animal("gato",8,"naranja");
let vaca = new Animal("vaca",10,"blanco");

//VER MODOS DE VER DATOS
// peros.verInfo();
// gato.verInfo();
// vaca.verInfo();

//VER DATOS DE HERENCIAS DEL METODO
peros.ladrar();

//VER DATOS POLIMORFISMO
// peros.ladrar();
// gato.ladrar();
// vaca.ladrar();
*/

/////////////////////////////////////////////////////////////////////////////////////

////PROBLEMA, MOSTRAR LAS CARACTERISTICAS DE UN CELULAR, DANDO LOS DATOS COLOR, PESO,RDP,RDC,RAM
//METOD INTEGRADOS APAGAR,PRENDER,REINICIAR,TOMAR FOTO
/*
class Celular {
  constructor(color, peso, rdp, rdc, ram) {
    this.color = color;
    this.peso = peso;
    this.resolpantalla = rdp;
    this.resolcamara = rdc;
    this.ram = ram;
    this.encendido = false;
  }
  prenderBotonEncendido() {
    if (this.encendido == false) {
      alert("celular prendido");
      this.encendido = true;
    } else {
      alert("celular apagado");
      this.encendido = false;
    }
  }
  reiniciar() {
    if (this.encendido == true) {
      alert("celular reiniciando");
    } else {
      alert("celular esta apagado");
    }
  }
  tomarfoto() {
    alert(`foto tomada en una resolucion de camara de ${this.resolcamara}`);
  }
  grabarvideo() {
    alert(`grabando videos ${this.resolcamara}`);
  }
  mostraInfo(){
    return `
    color : <b>${this.color}</b><br>
    peso : <b>${this.peso}</b><br>
    Pantalla : <b>${this.resolpantalla}</b><br>
    Resol Camra : <b>${this.resolcamara}</b><br>
    ram : <b>${this.ram}</b><br>
    `;
  }
}


///MOSTRAR CELULAR DE ALTA GAMA, CON LA HERENCIA DE CELULAR
//HERENCIA
class celularAltaGama extends Celular{
    constructor(color,peso,rdc,rdp,ram,rdce){
        super(color,peso,rdc,rdp,ram);
        this.resCamara = rdce;
    }
    grabarvideolento(){
        alert("esta grabando video lento");
    }
    reconFacial(){
        alert("esta reconociendo tu restro");
    }
    infocamar(){
        return this.mostraInfo() + `resolucion de camara extra: ${this.resCamara}`;
    }
}*/

/*
let celular1 = new Celular("rojo",5,"50HD","60HD","4RAM");
let celular2 = new Celular("BLANCO",80,"80HD","80HD","6RAM");
let celular3 = new Celular("NEGRO",90,"90HD","90HD","8RAM");

// celular1.prenderBotonEncendido();
// celular1.tomarfoto();
// celular1.grabarvideo();
// celular1.reiniciar();
document.write(celular1.mostraInfo() + "<br>")
document.write(celular2.mostraInfo()+ "<br>")
document.write(celular3.mostraInfo())
*/
/*
///MOSTRAR DATOS DE HERENCIA
let celular4 = new celularAltaGama("NEGRO",90,"90HD","90HD","8RAM","3px");
let celular5 = new celularAltaGama("BLANCO",90,"100HD","100HD","12RAM","5px");
document.write(celular4.infocamar()+ "<br>");
document.write(celular5.infocamar()+ "<br>");
*/

///////////////////////FUNCION PROTOTIPICA
/*
function Animal(nombre, raza){
  this.nombre=nombre,
  this.raza = raza;
}


////HERENCIA PROTOTIPICA
function Perro(nombre,raza,color){
  this.super = Animal;
  this.super(nombre,raza);
  this.color=color;
}
//HEREDANDO DE ANIMAL
Perro.prototype = new Animal();
Perro.prototype = Perro;

///LLAMADO FUNCION PROTOTIPICO
const snopy = new Animal('van', 'buldo');
console.log(snopy);

const chichi = new Animal('lulu', 'salchicha');
console.log(chichi);

//LLAMADO EN HERENCIA PROTOTIPICO
const buldoser = new Perro('may', 'salchicha','negor');
console.log(buldoser);
*/

////////////////////////////////////////////////////////////////////////////////
/*
const persona = {
  nombre: "Jorge",
  edad: 25,
  pais: "bolivia",
  datosPersonal: {
    youtube: true,
    spotify: false,
  },
  tipoPersona() {
    alert("Muy buena persona");
  },
};
*/
//const mes = 'Junio';

//persona.push(mes)
//  && = SI O SI AMBOS CONDICIONES SERAN VERDADERO => SERA  VEDADERO O SINO FALSE
//  || = SI UNA DE LAS DOS CONDICION SE CUMPLE => SERA VERDAREO, PERO SI AMBAS SON FALSA => SERA FALSO
//console.log(persona.tipoPersona());

// let numero = 30;
// let pas = 'bolivia'

// if (persona.edad > numero) {
//     if(!persona.datosPersonal.youtube){
//         console.log(`Si es mayor ${numero} y tiene un canal`);
//     }else{
//         console.log(`Si es mayor ${numero}`);
//     }
// } else if (persona.edad == numero) {
//     console.log(`Es igual a ${numero}`);
// } else {
//     console.log(`Es menor ${numero}`);
//     persona.tipoPersona();
// }

/////////
/*
if(persona.pais === 'argentina'){
    console.log('Es de argentina');
} else if(persona.pais === 'bolivia'){
    console.log('Es de bolivia');
}else{
    console.log('Es de ninguno');
}
/////
switch(persona.pais){
    case 'argentina':
        console.log('Es de argentina');
        break;
    case 'bolivia':
        console.log('Es de bolivia');
        break;
    default:
        console.log('Es de ninguno');
        break;
}
*/
////////
/*
const boleto = "vip";

let bvip = `VIP ${Math.floor(Math.random() * 15)}-${Math.floor(Math.random() * 15)}`;
let breg = "REG " + Math.floor(Math.random() * 15);

//OPERADOR TERNARIO
let tipoBoleto = boleto === "vip" ? bvip : breg;

if (tipoBoleto === bvip) {
  console.log(`Su boleto es ${tipoBoleto} tiene autorizacion a todo`);
} else if (tipoBoleto === breg) {
  console.log(`Su boleto es ${tipoBoleto} tiene restrinciones`);
}
*/

///////////////////////////////////////////////////////////////////////////////////////////
////FUNCIONES, con parametro y sin parametros  ///como ser llamadas por un button, con Onclick

// function saludo(){
//     console.log(`Saludo a todo`);
// }

// const saludo = ()=> console.log('Saludo a todos');

// let ver = 'Saludos mundo';
// function saludos(nombre){
//      console.log(`Saludo a ${nombre}`);
//  }
// const saludo = function(){
//     console.log('Saludo a todos');
//     return saludos('Jorge');
// }

/*
const suma = "suma";
const resta = "resta";

function saludos(nombre, num1, num2) {
  if (nombre === suma) {
    return num1 + num2;
  } else if (nombre === resta) {
    return num1 - num2;
  } 
}
*/
//TAMBIEN LO PUDES AGREGAR COMO PARAMETROS
/*
const s = 1 + 1;
const r = 3 - 1;
*/
// const saludo = function () {
//   ///console.log('Saludo a todos');
//   return saludos("resta", 11, 5);
// };

//devuleve el resultado de la funcion su parametro
// const saludat = saludos('suma', 15,5);
// //devuleve el valor de retorno
// console.log(saludat);

///////////////////////////////////////////////////////////////////////////////////////////
////////////////////ARRAY - AREGLOS

//const colores = ['naranja','verde','amarillo','rojo','azul','maron','verde'];
// const letras = ['A','B','C'];
// const numeros = [1,2,3,4,5,6, 'jorge'];

//GENERAR UN ARREGLO, AUTOMAICAMENTE, solo con una CONSTANTE UNICA
// const num = Math.random().toFixed(0);
// const elem = Array(20).fill(num);
// console.log(elem);

//UN ARRAY A UNA CADENA DE TEXTO
//document.body.innerHTML = colores.toString();

//UN ARRAY A UNA CADENA DE TEXTO, SEPARADO POR UN CARACTER
//document.body.innerHTML = colores.join('-');

//ORDENAR UN ARRAY DE FORMA ALFABETICA ASC o DESC
//document.body.innerHTML = colores.sort();
//document.body.innerHTML = colores.reverse();

//CONCATENAR O UNIR UN ARRAY CON VARIOS
// const unir = colores.concat(letras);
// document.body.innerHTML = unir;

//AGREGAR UN ELEM AL FINAL
// const agregar = 'negro';
// colores.push(agregar);
// console.log(colores);

//eliminar UN ELEM DEL FINAL
// colores.pop();
// console.log(colores);

//MUESTRA Y ELIMINA UN ELEM AL INICIO,
// console.log(colores);
// const eliminarInicio =  colores.shift();
// console.log(eliminarInicio);
// console.log(colores);

//MUESTRA Y AGREGA UN ELEM AL INICIO,
// console.log(colores);
// const agregIncio =  colores.unshift('blanco');
// //colores.unshift('blanco');
// console.log(agregIncio);
// console.log(colores);

//MUESTRA Y AGREGA ELEMENTOS EN POSICIONES QUE DESIGNAMOS
// console.log(colores);
// //EN QUE POSICION, PODEMOS SELECCIONAR LOS ELEMENTO A QUE REMPLAZAREMOS(O SI NO TAMBIEN), Y AGREGA LOS ELEM
// const agregPosi =  colores.splice(1,2,'pupura','lila');
// //colores.unshift('blanco');
// console.log(agregPosi);
// console.log(colores);

//EXTRAER ELEMENTOS
// console.log(colores);
// //EXTRAE ELEM ASIGNANDO UN RANGO DE POSISCIONES
// const extraer =  colores.slice(1,4);
// console.log(extraer);

///OBTENER EL INDEX O POSICION DE UN ELEM
// console.log(colores);
// console.log(colores.indexOf('verde'));
// //DEVUELVE EL INDEX O POSICION DEL ULTIMO ELEMENTO QUE ENCUENTRA
// console.log(colores.lastIndexOf('verde'));

////forEach()
//EJECUTA LA FUNCION  POR CADA ELEMENTO DEL AREGLO (colores) y TAMBIEN PODES AGREGAR PARAMETROS,
//PARA OBTENER VALORES E POSIC
// colores.forEach((color,index)=>{
//   //console.log('Hola colores');
//   console.log(`Hola el ${color} (${index})`);
// });

////find()
//EJECUTA LA FUNCION  POR CADA ELEMENTO DEL AREGLO (colores) y TAMBIEN PODES AGREGAR PARAMETROS,
//PARA QUE RETURNE LO QUE BUSCA
// console.log(colores);
// const retLetra= colores.find((color)=>{
//   if (color[0] === 'v') {
//     return color;
//   }
// });
// console.log(retLetra);

/////map()
//DEVUELVE TODO LOS ELEMENTO
//EJECUTA LA FUNCION POR CADA ELEMENTO DEL AREGLO (colores) y CREA UN NUEVO AREGLO,
//EN BASE A LA NUEVA FUNCION QUE PONEMOS(TODO MAYUS)
// const colorMayus = colores.map((color)=>{
//   return color.toLocaleUpperCase();
// });
// console.log(colorMayus);

/////filter()
//EJECUTA LA FUNCION POR CADA ELEMENTO DEL AREGLO (colores) y CREA UN NUEVO AREGLO,
//EN BASE A LA NUEVA FUNCION QUE PONEMOS (MAY O MEN DE NUMERO DE LETRA) EN UNA FUNCION
//DEVULVE SOLO LOS ELEM DE LA CONDICION
// const colorMayus = colores.filter((color)=>{
//   if (color.length >= 6) {
//     return color;
//   }
// });
// console.log(colorMayus);

//includes()
//NOS PERMITE SABER SI EL ELEM ESTA EN EL AREGLO (FALSO O VERDADER)
//console.log(colores.includes('verde'));

//every()
//NOS PERMITE SABER SI TODOS LOS ELEM DE UN AREGLO SON DEL MISMO TIPO(STRING,INT)
// const tipodato = colores.every((color)=>{
//   if (typeof color === 'string') {
//     return true;
//   }
//   else{
//     return false;
//   }
// });

// console.log(tipodato);

//some()
//NOS PERMITE SABER SI HAY ELEM DE DIFERENTES TIPO(STRING,INT) UN AREGLO
// const tipodato = numeros.some((color)=>{
//   if (typeof color !== 'string') {
//     return true;
//     //TRUE SI HAY ALGUN VALOR INVALIDO (SI HAY DE TIPOS DIFERENTES)
//   }
//   else{
//     return false;
//     //FLASE SI NO HAY ALGUN VALOR INVALIDO (SI SON DEL MISMO TIPO)

//   }
// });

// console.log(tipodato);

///////////////////////////////////////////////////////////////////////////////////////////
////////////////////POO - METODO PARA OBJETOS
// const usuarios = {
//   nombre: "Jorge",
//   edad: 20,
//   amigos: ["pedro", "luis", "matias"],
//   saludos: () => {
//     console.log("Hola tu");
//   },
// };

//OBJECTO.KEYS()
//DEVULVE TODO LOS ATRIBUTOS DE UN OBJETO EN FORMA DE ARRAY
// const resultado = Object.keys(usuarios);
// console.log(resultado);

//OBJECT.VALUES()
//DEVULVE TODO SUS VALORES DE LOS ATRIBUTOS DE UN OBJETO EN FORMA DE ARRAY
// const resultado = Object.values(usuarios);
// console.log(resultado);

//OBJECT.ENTRIES()
//DEVULVE EL ATRIBUTO Y SU VALOR DE UN OBJETO EN FORMA DE ARRAY
// const resultado = Object.entries(usuarios);
// console.log(resultado);

///PROPIEDAD 'hasOwnProperty' --> PARA SABER POR BOOLEANO SI ESTA ESA PROPIEDAD
//console.log(usuarios.hasOwnProperty('nombre'));

////////////////////////////////////////////////////////////////////
////////////////CADENAS
//const datos = 'Hola a todos';

//INDEXOF()
//DEVULVE EL INDEX O POSICION DE UNA LETRA DE UNA CADENA
// console.log(datos.indexOf('t'));

//LASTINDEXOF()
//DEVULVE EL INDEX O POSICION DE LA ULTIMA LETRA DE UNA CADENA
//console.log(datos.lastIndexOf('o'));

//SLICE()
//EXTRAER O TOMAR UN FRACMENTO DE UNA CADENA, DANDO LOS PARAMETROS(UNO O MAS) DEL FRACMENTO
//const index1 = datos.indexOf('t');
//const index2 = datos.lastIndexOf('s');
//console.log(datos.slice(0,7));

//REMPLACE();
//REMPLA UN FRACMENTO DE UNA CADENA DE TEXTO, POR OTRO QUE SEÑALAMOS
// const letra = 'mundo';
// console.log(datos.replace('todos',letra));

//SPLIT()
//CONVERTIR UNA CADENA EN UN ARREGLO, CON SEPADOR DE PALABRAS
//console.log(datos.split(' '));

/////////////////////////////////////////////////////////////////////////////////////////////
////////////////NUMEROS

// const numeros = 210;
// const numdecimal =20.7549

//CONVERTIR DE NUMERO  A STRING
// console.log(numeros, typeof numeros);

// const astring = numeros.toString();
// console.log(astring, typeof astring);

///CANTIDAD DE NUNERO DE DECIMALES
// const numeros = 3.141621;
// console.log(numeros.toFixed(3));

//PARSEINT
//TRANSFORMA UN VALOR EN UN NUMERO ENTERO, PERO SIN DECIMALESS
// const num1= parseInt(prompt('numero 1'));
// const num2= parseInt(prompt('numero 2'));
// console.log(num1 + num2);

//PARSEINT
//TRANSFORMA UN VALOR EN UN NUMERO ENTERO, CON DECIMALES
// const num1= parseFloat(prompt('numero 1'));
// const num2= parseFloat(prompt('numero 2'));
// console.log(num1 + num2);

//MATH.RANDOM()
//DEVUELVE NUMERO  A LEATORIO 0 y 1
//const num = Math.random();

//MATH.ROUNDOD()
//REDONDEA AL NUMERO MAS CERCANO
//const num = Math.round(7.4); //7
//const num = Math.round(7.5);  //8
//console.log(num);

//MATH.FLOOR()
//REDONDEA HACIA ABAJO
//console.log(Math.floor('10.1'));  //10
//console.log(Math.floor('10.99')); //10

//MATH.CEIL() - ROUND
//REDONDEA HACIA ARIBA
//console.log(Math.ceil('10.1'));  //11
//console.log(Math.ceil('10.99')); //11

//MATH.sqrt  -> LA RAIZ CUADRADA
//console.log(Math.sqrt(81));  //9

//MATH.POW  -> 2 ELEVADO A LA POTENCIA DE 5
//console.log(Math.pow(2,5)); //32

//Math.random()
//NUMERO A LASAR DEL 0 - 1000
//console.log(Math.round(Math.random() * 1000));

//DATE() DE FECHAS Y ZONAS HORARIAS
//console.log(Date());
// let fecha = new Date();
// //dia del mes
// console.log(fecha.getDate());
// //año
// console.log(fecha.getFullYear());
// //dia de la semana
// console.log(fecha.getDay());
// //numero del mes
// console.log(fecha.getMonth());
// //hora
// console.log(fecha.getHours());
// //minutos
// console.log(fecha.getMinutes());
// //segundos
// console.log(fecha.getSeconds());

// //Tue Aug 29 2023 20:42:28 GMT-0700 (hora estándar del Pacífico de México)
// console.log(fecha.toString());
// //Tue Aug 29 2023
// console.log(fecha.toDateString());
// //29/8/2023, 20:43:10
// console.log(fecha.toLocaleString());
// //29/8/2023
// console.log(fecha.toLocaleDateString());
// //20:43:29 GMT-0700 (hora estándar del Pacífico de México)
// console.log(fecha.toTimeString());

// //crear una nueva fecha
// let nuevo = new Date(2022,10,2);
// console.log(nuevo);

////OPERADOR SPREAD
///OBTIENE LOS ELEMENTOS DE AUN AREGLO O OBJETO Y EXPANDE O UNE EN OTRO SITIO,(escoje la posicion para sobre escribir);

// const nombre=['rojo','verde', 'azul'];
// const colores = ['amarillo','morado','purpura'];

// const ver = [...nombre,...colores];
// console.log(ver)

//console.log(colores, ...nombre);

// const objeto = {
//   nombre:'pedro',
//   correo:'jorge@gmail.com',
//   password :'123456',
// }
// const usuarios= {
//   nombre:'jorge',
//   ...objeto, //PONER EN UNA POSICION, PARA RENOMBRAR O NO
//   edad:20,
// }
// console.log(usuarios);

//DESTRUCTURACION DE UN OBJETO
//EXTRAER EL VALOR DE UN OBJETO
// const {nombre, edad}= usuarios;
// console.log(nombre,edad);

////OPERADOR REST
///PERMITE QUE UNA FUNCION CONTENGA UN NUMERO INDEFINIDO DE ARGUMENTO
//LOS ARGUMENTO QUE NUEVAMENTE OBTIENEN LOS CONVIERTE EN UNA AREGLO

/*
function sumar(a,b,...c){
  let resul= a + b;

  c.forEach((n)=>{
    resul += n;
  })

  return resul;
}

console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));
console.log(sumar(1,2,3,4,5));
*/

// const registrarUsuario =(nombre, correo,...datosAdicionales)=>{
//   console.log(nombre,correo,datosAdicionales);
// }

// registrarUsuario('jorge','jorge@gmail.com');
// //AGREGAMOS LOS NUEVOS ARGUMENTOS
// registrarUsuario('jorge','jorge@gmail.com',20,'bolivia');

//////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////CICLOS
//const nombre=['abel','alberto', 'armir','jorge','lucio','Mary'];

//break
//detiene el ciclo for
//  for (let index = 0; index < nombre.length; index++) {
//   if (nombre[index][0] !== 'a') {
//     console.log('HAY UN NOMBRE QUE NO EMPRIEZA CON LA A')
//       break; //detiene el ciclo, lo rompe la ejecucuin
//   }
//   console.log(nombre[index])
//  }

//const nom = 'armir';

//continue
//continua el ciclo, pero salta un nombre que especificamos
//  for (let index = 0; index < nombre.length; index++) {
//   if (nombre[index] === 'jorge') {
//       continue; //continua ejecutando, pero salta una variable especifica
//   }
//   console.log(nombre[index])
//  }

////////////////////////////////////////////////////////////////////
////////////////CLASES
/*
class Usuarios {
  tipo= 'admin';

  constructor(nombre, apellido,edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = null;

  }

  //METODO, NECESITA CREAR UN NEW OBJETO, PARA LLAMAR AL METODO
  nombrestipo(){
    console.log('obtiene el nombre');
    return `${this.nombre}`
  }
  //METODO, NECESITA CREAR UN NEW OBJETO, PARA LLAMAR AL METODO
  areglos(){
    const post =['pos1','pos2'];
    return post;
  }

  //METODOS GET Y SET PERMITE ESTABLECER Y OBTENER LOS VALORES DE LOS ATRIBUTOS DE NUESTRA CLASE
  get getEdad(){
    return this.edad;
  }
  set setEdad(edad){
    return this.edad =edad;
  }

  //METODO ESTATICO, NO NECESITA CREA UN NEW OBJETO, PUDE LLAMARLO DIRECTAMENTE
  static borrarId(id){
    console.log(`El usuario con el id ${id} fue eliminado`)
  }

  static valores = 101;
}
*/

//NUEVO OBJETO
// const nuevo = new Usuarios('pedro','luis');
// console.log(nuevo);

//NUEVO OBJETO
//const nuevaUsuario = new Usuarios('loca','lili');
// const tipo= nuevaUsuario.nombrestipo();
// console.log(tipo);

//LLAMADO ESTATICO
//Usuarios.borrarId(1);

//LLAMAMOS A LOS METODOS GET Y SET, PARA ESTABLECER UNA EDAD  A UN USUARIO
//VERIFICAMOS QUE EL DATOS ES NULO
// console.log(nuevaUsuario.getEdad);
// //ESTABLECEMOS AL NUEVO USUARIO CON EL METODO DE SET SU EDAD
// nuevaUsuario.setEdad=25;
// //LLAMAMOS A ESA FUNCION, SI LO ESTACECIO
// console.log(nuevaUsuario.getEdad);
// //COMPROBAMOS QUE LE AGREGO SU EDA AL NUEVO USUARIO
// console.log(nuevaUsuario);

/////////////////////////////HERENCIA
/*
class Moderador extends Usuarios {
  constructor(nombre, apellido,permisos){
    super(nombre,apellido);
    this.permisos = permisos;
  }

  borarId(id){
    if (this.permisos.includes('borrador')) {
      console.log(`El usuario con el ${id} ha sido borado`);
    }else{
      console.log('NO TIENE PERMISOS DE BORRAR')
    }
  }
}
*/
// const nuevo1 = new Usuarios('pedro','lulu');
// console.log(nuevo1.nombrestipo());

/*
const numero2 = new Moderador('mary','sol',['borrador','editar']);
console.log(numero2);
console.log(numero2.permisos);
numero2.borarId(2);
*/

/////////METODO ESTATICO
//NO SE NECESITA CREAR UN NUEVO OBJETO,PARA LLAMAR A UN METODO
// Usuarios.borrarId(2);
// console.log(Usuarios.valores);

////////CALLBACKS
// obtenerPostUsuario('carlos',(post)=>{
//   console.log(post);
// });

/////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////PROMESAS -async - await
//FORMA CORECTA
/*
const fechtPost = () => {
  return new Promise((req, res) => {
    setTimeout(() => {
      const post = ["post1", "post2", "post3"];
      const error = false;
      if (error) {
        res("Hubo un error en la promesa");
      } else {
        req(post);
      }
    }, 2000);
  });
};
//ESPERAMOS QUE NOS TRAIGA LA INFO(ASYNC -AWAIT), Y SE EJECUTA DESPUES
const mostrarPost = async () => {
  try {
    const post1 = await fechtPost();
    console.log(post1);
  } catch (errores) {
    console.log(errores);
  }
};
mostrarPost();
*/

/////////////////PROMISE DE CUADRADO DE UN NUMERO
//(OPC 1)
/*
function cuadradoPromise(valor) {
  if (typeof valor !== "number") {
    return Promise.reject(
      `Error, el valor "${valor}" ingresado, no es una numero`
    );
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        valor,
        ressult: valor * valor,
      });
    }, 0 | (Math.random() * 1000));
  });
}

cuadradoPromise(0)
  .then((obj) => {
    console.log("Inicie Promise");
    console.log(`Promise: ${obj.valor}, ${obj.ressult}`);
    return cuadradoPromise(1);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.valor}, ${obj.ressult}`);
    return cuadradoPromise(2);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.valor}, ${obj.ressult}`);
    return cuadradoPromise(3);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.valor}, ${obj.ressult}`);
    return cuadradoPromise(4);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.valor}, ${obj.ressult}`);
    return cuadradoPromise(5);
  })
  .then((obj) => {
    console.log(`Promise: ${obj.valor}, ${obj.ressult}`);
    console.log("Fin Promise");
  })
  .catch((err) => console.error(err));
  */

////(OPC 2)
/*
function cuadradoPromise(valor) {
  if (typeof valor !== "number") {
    return Promise.reject(
      `Error, el valor "${valor}" ingresado, no es una numero`
    );
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        valor,
        ressult: valor * valor,
      });
    }, 0 | (Math.random() * 1000));
  });
}

async function funcionCuadroDeclarado(){
  try {
    console.log('Inicio de Async Funtion');

    let obj = await cuadradoPromise(0);
    console.log(`El cuadrado de ${obj.valor} es ${obj.ressult}`);

    obj =await cuadradoPromise(1);
    console.log(`El cuadrado de ${obj.valor} es ${obj.ressult}`);

    obj =await cuadradoPromise(2);
    console.log(`El cuadrado de ${obj.valor} es ${obj.ressult}`);

    obj =await cuadradoPromise(3);
    console.log(`El cuadrado de ${obj.valor} es ${obj.ressult}`);

    obj =await cuadradoPromise(4);
    console.log(`El cuadrado de ${obj.valor} es ${obj.ressult}`);

    obj =await cuadradoPromise(5);
    console.log(`El cuadrado de ${obj.valor} es ${obj.ressult}`);

    console.log(`Fin Async Funtion`);

  } catch (error) {
   console.error(error); 
  }
}
funcionCuadroDeclarado();
*/

///(OPC 3)
/*
const funcionCuadroExpresada = async ()=>{
  try {
    console.log('Inicio de Async Funtion');

    let obj = await cuadradoPromise(6);
    console.log(`El cuadrado de ${obj.valor} es ${obj.ressult}`);

    obj =await cuadradoPromise(7);
    console.log(`El cuadrado de ${obj.valor} es ${obj.ressult}`);

    obj =await cuadradoPromise(8);
    console.log(`El cuadrado de ${obj.valor} es ${obj.ressult}`);

    obj =await cuadradoPromise(9);
    console.log(`El cuadrado de ${obj.valor} es ${obj.ressult}`);

    obj =await cuadradoPromise(10);
    console.log(`El cuadrado de ${obj.valor} es ${obj.ressult}`);

    obj =await cuadradoPromise(11);
    console.log(`El cuadrado de ${obj.valor} es ${obj.ressult}`);

    console.log(`Fin Async Funtion`);

  } catch (error) {
   console.error(error); 
  }
}
//funcionCuadroExpresada();
*/

/////////////////////////////////////////////////////////////////////////////////
////////////////////TIPOS DE DATOS
//////////////////////////////////SET
/*
const set = new Set([1,2,3,3,false,true,false,{},{},"hola","Hola","hola"]);
console.log(set);
//NUMERO DE OBJETOS
console.log(set.size);

///CREAR UNO NUEVO
const set2 = new Set();
//AÑADIR o AGREGAR UNA OBJETO
set2.add(0);
set2.add(1);
set2.add(3);
set2.add(3);
set2.add("hola");
set2.add("Hola");
set2.add("hola");
set2.add({});
console.log(set2);


//RECORRER UN SET, con FOR
for (const iterator of set) {
  console.log(iterator)
}

//RECORRER UN SET CON FOREACH
set2.forEach(elem =>console.log(elem))


///convertir OBJETO EN UN ARRAY
let array = Array.from(set);
console.log(array)
//VER EN UNA POSICION
console.log(array[7])

//ELIMINAR
set.delete("Hola");
console.log(set);

//PREGUNTAR F o V SI ESTA UN OBJETO
console.log(set.has("hola"));

//LIMPIAR UN OBJETO
set2.clear();
console.log(set2);
*/

//////////////////////////////////MAPS
/*
const  mapa= new Map();
mapa.set("nombre","Jorge");
mapa.set("apellido","Sol");
mapa.set("edad",20);

console.log(mapa);
//VER NUMERO DE ELEM
console.log(mapa.size);
//SAVER SI EL ELEM
console.log(mapa.has("nombre"));
//OBTENER EL VALOR DE NOMBRE
console.log(mapa.get("nombre"));
//RENOMBRAR EL ELEMENTO NOMBRE
mapa.set("nombre","Jorge Sol");
console.log(mapa);
console.log(mapa.get("nombre"));
//ELIMINAR UN ELEMENTO
mapa.delete("apellido");
console.log(mapa);

///RECORER ELEMENTO
for (const [key, valor] of mapa) {
  console.log(`Lave : ${key}, Valor: ${valor}`)
}
*/
//tipos de maps
// mapa.set(19,"todos");
// mapa.set(false,"falsos");
// mapa.set({},{});
// console.log(mapa);

////////////
/*
const mapas2 = new Map([
  ["nonbres","Jose"],
  ["apeliidos","Noche"],
  [null,"nulo"]
]);

console.log(mapas2);
///DESTRUCTURAR EL MAPA

//VER SOLO LAS LLAVES
const llavesMap = [...mapas2.keys()];
console.log(llavesMap);
//VER SOLO LAS VALORES
const valoresMap = [...mapas2.values()];
console.log(valoresMap);
*/

/////////////////////////////Iterables & Iterators
/*
const iterable = [1,2,3,4,5];
//const iterable = "Hola mundo";
//const iterable = new Set[1,2,3,4,5];
//const iterable = new Set[[["nombre","Jorge"],["eda",25]]];

//acceder al iterador del iterable
const iterador = iterable[Symbol.iterator]();

console.log(iterable);
console.log(iterador);
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

let next = iterador.next();
while(!next.done){
  console.log(next.value);
  next= iterador.next();
}
*/

///////////////////////////GENERATORS
/*
function* iterable(){
  yield "hola";
  console.log("Hola consola");
  yield "hola 2";
  console.log("Seguimos con mas instruciones del codigo");
  yield "hola 3";
  yield "hola 4";
}

let iterador = iterable();

for (const yield of iterador) {
  console.log(yield);
}

//convertir FUNCION EN UN ARREGLO
const arreglo = [...iterable()];
console.log(arreglo);
*/

////////////////////////PROXY
/*
const persona = {
  nombre:"",
  apellidos:"",
  edad:0
}

const manejador ={
set(obj,prop,values){
  //establecemos el new proxy que creo,pero uniendo nuevas llaves o creando nuevas llaves
  //obj[prop]= values;
  ////VALIDAMOS LAS LLAVES CREADAS POR PERSONA
  if (Object.keys(obj).indexOf(prop)===-1) {
    console.error(`La propiedad ${prop} no existe en objeto persona`);
  }
  obj[prop]= values;
}
}

///generaos el NEW PROXI
const jon = new Proxy(persona,manejador);
//creamos sus valores
jon.nombre= "Jon";
jon.apellidos= "Sol";
jon.edad = 30;
//crea una nueva llave y valor
jon.twitter= "@jfigueroa";
console.log(jon)
*/

//////////////////////OBJETOS DE LLAMAR
//this -->  LLAMA EL PRIMER OBJETO, Y LLAMA SOLO LO QUE ESTA DENTRO DE UNA FUNCION
//call -->  LLAMA EL OBJETO QUE ESPECIFICA CON UN PARAMETRO
//apply -->  LLAMA EL OBJETO QUE ESPECIFICA CON UN PARAMETRO
/*
console.log(this);
this.lugar="Contexto Global";

function saludar(saludo, aQuien){
  console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}

///LLAMADO --> this
saludar("Hola", "Ken")

const obj = {
  lugar : "Contexto objeto"
}

///LLAMADO --> call
saludar.call(obj,"Hola", "Ken");
saludar.call(null,"Hola", "Ken");
saludar.call(this,"Hola", "Ken");
///LLAMADO --> apply
saludar.apply(obj,["Hola", "Ken"]);
saludar.apply(null,["Hola", "Ken"]);
saludar.apply(this,["Hola", "Ken"]);
*/

///////////////////////////////////////////////////////////////////////////
////////////////////////////API - DOM
/*
///ANTES, PERO OPCIONAL USUARLO
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
*/

////NUEVOS Y MAS USUADOS
/*
///DEVULVE COLECIONES
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));

//DEVULVE NODO LISTAS
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a").length);

///imprimir los enclaces
document.querySelectorAll("a").forEach((elem) => console.log(elem));
//devulve una imagen
console.log(document.querySelector(".card"));
//devulve todola lista imagen
console.log(document.querySelectorAll(".card"));
//devulve una imagen especifica
console.log(document.querySelectorAll(".card")[2]);
///devulve li de Menu
console.log(document.querySelectorAll("#menu li"));

//////////////////////
///obtener los datos
console.log(document.documentElement.lang); ///-> LENGUAJE DE PAGINA
console.log(document.documentElement.getAttribute("lang"));

console.log(document.querySelector(".link-dom").href); ///-->ENLACE DE LA PAGINA
console.log(document.querySelector(".link-dom").getAttribute("href")); //NOMBRE DEL ARCHIVO DE LA PAGINA

//RENOMBRAR O MODIFCAR
document.documentElement.lang = "en";
console.log(document.documentElement.lang); ///-> LENGUAJE DE PAGINA

document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang); ///-> LENGUAJE DE PAGINA

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://youtube.com/");

///ver si tiene el atributo
console.log($linkDOM.hasAttribute("rel"));

///remover o eliminar un atributo
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//ver datos de atributos
console.log($linkDOM.getAttribute("data-description")); //ver el datos
console.log($linkDOM.dataset); //ver todo el mapa del DOM del atributo
console.log($linkDOM.dataset.description); //ver el datos
$linkDOM.dataset.description = "Comparte y susbcribete"; ///renombrar o modificar
console.log($linkDOM.dataset.description); //ver el datos
*/

///////////colocar texto

/*
const $whantlsDOM = document.getElementById("que-es");

let text = `
  <p>
    Lorem ipsum dolor sit amet, (<b><i>consectetur adipisicing elit</i></b>). Distinctio,
    recusandae aut sit modi iure facere earum ab vero corporis atque.
  </p>
  <p>
  Lorem ipsum dolor sit amet, (<b><i>consectetur adipisicing elit</i></b>). Distinctio,
  recusandae aut sit modi iure facere earum ab vero corporis atque.
</p>
<p>
    Lorem ipsum dolor sit amet, (<b><i>consectetur adipisicing elit</i></b>). Distinctio,
    recusandae aut sit modi iure facere earum ab vero corporis atque.
  </p>`
;

///traductores de html a textos

///$whantlsDOM.textContent = text;

//traduce el codigo html a texto, pero le coloca un id =1
$whantlsDOM.innerHTML = text;
//traduce el codigo html a texto
$whantlsDOM.outerHTML =  text;
*/

////recorrer el DOM
/*
const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children); //--> extraer todos los hijos
console.log($cards.children[2]); //--> extraer el hijo especifico
console.log($cards.parentElement);
console.log($cards.firstElementChild); //-->ver primer hijo
console.log($cards.lastElementChild); //-->ver ultimo hijo
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));
*/

//////////////agregar o insertar una figura de imagen
/*
const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals");
$cards = document.querySelector(".cards");

$img.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXJjaGl0ZWN0dXJlJTdEfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
);
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);
*/

///crear una lista de los meses
/*
const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "obtubre",
  "noviembre",
  "diciembre",
];

$ul3 = document.createElement("ul");
$fragmento= document.createDocumentFragment();

meses.forEach((elem)=>{
  const $li = document.createElement("li");
  $li.textContent = elem;
  $fragmento.appendChild($li);
});

document.write("<h3>Meses de Año</h3>");
$ul3.appendChild($fragmento);
document.body.appendChild($ul3)
*/

///AGREGAR O INSERTAR, REMPLZAR Y ELIMINAR
/*
const $cards = document.querySelector(".cards");
$newCard = document.createElement("figure");

$cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
<img src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXJjaGl0ZWN0dXJlJTdEfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="any" />
<figure>Any</figure>
`;
$newCard.classList.add("card");
*/

////////////////ANTIGUO METODO DE MANEJAR SECCION CON IMAGEN

//$cards.replaceChild($newCard,$cards.children[2]); ///REMPLZAR EN DICHA POSISCION
//$cards.removeChild($cards.lastElementChild);  ///ELIMINAR EL ULTIMO ELEMENTO
//$cards.insertBefore($newCard,$cards.firstElementChild);  ///INSERTAR AL INICIO
//document.body.appendChild($cloneCards); ///CLONAR UNA SEECION

////////////////NUEVO METODO DE MANEJAR SECCION CON IMAGEN

//insertAdjacent
  // .insertAdjacentElement(position,elem)
  // .insertAdjacentHTML(position,html)
  // .insertAdjacentText(position,text)

//POSICIONES
// .beforebegin(hermano anterior)
// .afterbegin(primer hijo)
// .beforeend(ultimo hijo)
// .afterend(hermano siguiente)

//////////////////////////MANEJADOR DE EVENTOS////////////////////////////
/*
function holaMundo(){
  alert("Hola");
  console.log(Event);
}

//MANEJAR EVENTOS CON PARAMETROS
function saludar(nombre ="Desconocido"){
  alert(`Hola ${nombre}`)
  console.log(Event);
}

const $eventoSematico = document.getElementById("evento-semantico");
const $eventoMultiple = document.getElementById("evento-multiple");
const $eventoRemover = document.getElementById("evento-remover");

//SOLO INVOCA UNA FUNCION
$eventoSematico.onclick = holaMundo;
$eventoSematico.onclick = function (e){
  alert("Manejador de eventos sematicos");
  console.log(e);
  console.log(Event);
}

//INVOCA VARIAS FUNCIONES
$eventoMultiple.addEventListener("click",holaMundo);
$eventoMultiple.addEventListener("click", (e)=>{
  alert("Manejador de eventos multiples");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(Event);
})

//INVOCAR FUNCIONES CON MANEJADOR DE PARAMETROS, CON UN ARROUNFUNTION
$eventoMultiple.addEventListener("click",()=>{
  saludar(),
  saludar("Jorge");
})

//REMOVER O LEIMINAR EVENTOS CON MANEJADORES MULTIPLES
const removerDobleClick = (e)=>{
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick",removerDobleClick)
  $eventoRemover.disabled=true;
}

$eventoRemover.addEventListener("dblclick", removerDobleClick);
*/

/////////////FLUJO DEL EVENTOS (BURBUJA - CAPTURA) - ///DELEGACION DE EVENTOS
/*
function flujoEventos(e){
  console.log(`Hola te saluda ${this}, el click lo origino ${e.target.className}`);
}

//SEÑALA EN DONDE DISTE CLICK O SELECION
document.addEventListener("click",(e)=>{
  console.log("Click en",e.target);

  if (e.target.matches(".eventos-flujos div")) {
    flujoEventos(e);
  }

  if (e.target.matches(".eventos-flujos a")) {
    alert("Hola soy tu amigo y docente");
    e.preventDefault();
  }
})

*/

/////////////////METODOS DE VENTANAS O PESTAÑAS
/** 
const $btnAbrir = document.getElementById("abrir-ventana");
$btnCerrar = document.getElementById("cerrar-ventana");
 $btnImprimir = document.getElementById("imprimir-ventana");

 let $ventana;

 $btnAbrir.addEventListener("click",(e)=>{
  ventana =window.open("https://jonmircha.com/");
 })

 ///ciera la venta que abriio, por lo acumulo en una variable de "ventana"
 $btnCerrar.addEventListener("click",(e)=>{
  ventana.close();
 })

 $btnImprimir.addEventListener("click",(e)=>{
  window.print()
 })
*/

//////////////////////URL OBJETO//////////////////////////////////////////
/* ********** BOM: Objetos: URL, Historial y Navegador

/* console.log("********** Objeto URL (location) **********");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname);
//location.reload();

console.log("********** Objeto Historial (history) **********");
console.log(history);
console.log(history.length);
//history.forward(1);
//history.go(-3);
//history.back(2);

console.log("********** Objeto Navegador (navigator) **********");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent); */