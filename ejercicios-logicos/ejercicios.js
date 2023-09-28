

///////////////////////EJERCICIO

////////////1 Programa una función que cuente el número de caracteres de una cadena de texto,
//pe. miFuncion("Hola Mundo") devolverá 10.
/*
function contar(cadenas){
  for (let index = 0; index < cadenas.length; index++) {
    const element = cadenas.length;
    //console.log(element);
   return element;
    
  }
}
//contar('Hola mundo');
const ret = contar('Hola mundo');
console.log(ret);
*/

//////////2 Programa una función que te devuelva el texto recortado según el número de caracteres indicados,
//pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

// const cadenas= 'Hola a todo el Mundo ';
// console.log(cadenas.substring(0,4));

/*
function sol(cadena,cont){
  if (cadena) {
     const devo = cadena.slice(0,cont);
     return devo;
  }
  else{
    console.log('no ingreso caracteres');
  }
}
const r = sol('Hola mundo',4)
console.log(r);
*/

// const sol2 = (cadenas,cont)=>(cadenas) ? console.log(cadenas.slice(0,cont)) : console.log('sin caractteres');
// sol2('hola mundo',4);

//////////3 Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
//pe. miFuncion('Hola a todo el Mundo', ' ') devolverá ['Hola', 'a', 'todo', 'el', 'Mundo'].

//console.log(cadenas.split(" "));

// function solucion(cadena,esp){
//   console.log(cadena.split(esp));
// }
// solucion('hola a todos mundos',' ')

/*
const sol2 = (cadenas = "", esp = undefined) =>
  !cadenas
    ? console.warn("sin caractteres")
    : esp === undefined
    ? console.warn("debes dejar un espacio en blanco")
    : console.info(cadenas.split(esp));
sol2("hola mundo"," ");
*/

///////4 Programa una función que repita un texto X veces,
///pe. miFuncion('Hola a todo el Mundo', 3) devolverá Hola a todo el Mundo Hola a todo el Mundo Hola a todo el Mundo.

// const re = cadenas.repeat(3);
// console.log(re);

//
// function solu(cadena,num){
//   //console.log(cadena.repeat(num));
//   const ele= cadena.repeat(num);
//   console.log(ele);
// }
// solu('hola mundo ',3);

/*
const sol2 = (cadenas = "", esp = undefined) =>
  !cadenas
    ? console.warn("sin caractteres")
    : esp === undefined
    ? console.warn("indice cuantas veces se repetira, la cadena")
    : cadenas.repeat(esp) == 0
    ? console.warn("el numero es 0, no pude duplicar")
    : console.info(cadenas.repeat(esp));
sol2("hola mundo ",3);
*/

////////5 Programa una función que invierta las palabras de una cadena de texto,
///pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
/*
function solucion(cadena){
  const toma = cadena.split("");
  const reve = toma.reverse();
  const une = reve.join("");
  //console.log(une);
  return une;
}
//solucion('Hola Mundo');
const ret = solucion('Hola Mundos');
console.log(ret);
*/

/*
const sol2 = (cadenas = "") =>
  !cadenas
    ? console.warn("sin caractteres")
    : console.info(cadenas.split("").reverse().join(""));
sol2("hola mundo");
*/

////////6 Programa una función para contar el número de veces que se repite una palabra en un texto largo,
/// pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
/*
const solucion = (cadena="", cont="") =>{
  if(!cadena) return console.warn('No ingreso un texto para bucar palabras repetidas');
  if(!cont) return console.warn('No ingreso la palabra para bucar repetidas');
  
  let index=0,
  conta=0;
  while(index !== -1){
    index= cadena.indexOf(cont,index);
    if (index !== -1) {
      index++;
      conta++;
    }
  }
    return console.info(`La palabra ${cont} se repidte ${conta}`);
}
solucion('hola mundo adios mundo','mundo');
*/

///////////7 Programa una función que valide si una palabra o frase dada, es un palíndromo
///(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
/*
function solus(cadena){
  cadena = cadena.toLowerCase();
  const toma = cadena.split("");
  const reve = toma.reverse();
  const une = reve.join("");
  if (une === cadena) {
    return true;
  }else{
    return false;
  }
}
const rep = solus("Salas");
console.log(rep);
*/

////////8 Programa una función que elimine cierto patrón de caracteres de un texto dado,
//pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
/*
const eliminar = (cadenas="",patro="")=>{
  (!cadenas)
  ? console.warn('SI CADENA DE TEXTO') 
  : (!patro)
  ?console.warn('ingrese un patron de caracteres para eliminar') 
  : console.info(cadenas.replace(new RegExp(patro, "ig"),""));
}
eliminar("xyz1, xyz2, xyz3, xyz4 y xyz5","xyz")
*/

/////////9 Programa una función que obtenga un numero aleatorio entre 501 y 600.
/*
const solucion = () => {
  console.info(Math.round(Math.random() * 100) + 500);
};
solucion();
*/

///////10 Programa una función que reciba un número y evalúe si es capicúa o no
//(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
/*
function solus(cadena){
  const cadenas = cadena.toString();
  const cap = cadenas.split("").reverse().join("");
  // const toma = cadenas.split("");
  // const reve = toma.reverse();
  // const une = reve.join("");
  //Number.parseInt(cap);
  if ((cadenas) === cap) {
    return true;
  }else{
    console.log(`El valor de ${cadenas} no es un capicua`);
    return false;
  }
}
const rep = solus(2002);
console.log(rep);
*/

//////11 Programa una función que calcule el factorial de un número (El factorial de un entero positivo n,
//se define como el producto de todos los números enteros positivos desde 1 hasta n),
//pe. miFuncion(5) devolverá 120.
/*
function factorial(n) {
  let total = 1;
  if (n) {
    for (i = 1; i <= n; i++) {
      total = total * i;
    }
    console.log(`El factorial de ${n} es ${total}`)
  } else {
    console.warn("Defina una numero para sacar el factorial");
  }
  return total;
}
const resul = factorial(5);
console.log(resul);
*/

////////12 Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no,
///pe. miFuncion(7) devolverá true.
/*
function esprimo(num=undefined) {
  if(num===undefined)return console.info(`No ingresaste un numero`);
  if(typeof num !=="number")return console.info(`EL VALOR DE ${num} NO ES UN NUMERO`);

  if (num % 2 == 1) {
    console.info(`El numero ${num} es primo`);
    return true;
  } else {
    console.warn(`El valor ${num} no es primo`);
    return false;
  }
}

const resul = esprimo(7);
console.log(resul);
*/

///////13 Programa una función que determine si un número es par o impar,
///pe. miFuncion(29) devolverá Impar.
/*
function seberValor(num = undefined) {
  if (num === undefined) return console.info(`No ingresaste un numero`);
  if (typeof num !== "number")
    return console.info(`EL VALOR DE ${num} NO ES UN NUMERO`);

  if (num % 2 === 1) {
    return console.log(`El valor ${num} es Impar`);
  } else if (num % 2 === 0) {
    return console.log(`El valor ${num} es par`);
  } else {
    return console.log(`El valor ${num} no es valor numerico`);
  }
}
const resul = seberValor(29);
console.log(resul);
*/

/////////14 Programa una función para convertir grados Celsius a Fahrenheit y viceversa,
//pe. miFuncion(0,"C") devolverá 32°F.
/*
function covertir(conv=undefined,grado="") {
  if (conv === undefined) return console.info(`No ingresaste un numero`);
  if (typeof conv !== "number")
    return console.info(`EL VALOR DE ${conv} NO ES UN NUMERO`);
  if (grado.length !==1)
    return console.info(`EL VALOR DE CONVERSION NO RECONOCE`);

  if (conv && grado==="C") {
    const fa = ((9 / 5) * conv) + 32;
    return `La conversion de ${conv}°F Celsius a Fahrenheit es ${Math.round(fa)}°C`;
  }else if(conv && grado ==="F"){
    const cel = (conv - 32) * (5/9);
    return `La conversion de ${conv}°F = ${Math.round(cel)}°C`;
  }
}
const resuls = covertir(100,"F");
console.log(resuls);
*/

////////15 Programa una función para convertir números de base binaria a decimal y viceversa,
//pe. miFuncion(100,2) devolverá 4 base 10.
/*
function convertirNumeros(binario=undefined,decimal=undefined){
  if (binario === undefined) return console.warn(`No ingresaste un numero bin`);
  if (typeof binario !== "number")
    return console.info(`EL VALOR DE ${binario} NO ES TIPO NUMERO`);

    if (decimal === undefined) return console.warn(`No ingresaste un numero dec`);
  if (typeof decimal !== "number")
    return console.info(`EL VALOR DE ${decimal} NO ES TIPO NUMERO`);


  if ((binario) && (decimal)) {
    const convBin= parseInt(binario,2);
    const convDec = decimal.toString(2);
    return console.log(`El binario de ${binario} a decimal es ${convBin} y El decimal de ${decimal} a binario es ${convDec}`);
  }else {
    return console.log('Elemento invalidos');
  }
}
const resulrs = convertirNumeros(100,2);
console.log(resulrs);
*/

/////////16 Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada,
///pe. miFuncion(1000, 20) devolverá 800.
/*
function descuento(monto=undefined,des=undefined){
  if(monto===undefined) return console.log('No ingreso ningun monto');
  if(des===undefined) return console.log('No ingreso ningun cantidad descuento');

  if (monto) {
    const motoTota = monto - ((monto*des)/100);
    return console.log(`El descuento de ${monto} con un ${des}% es ${motoTota}`);
  }
}
const resuls = descuento(1000,20);
console.log(resuls);
*/

////////17 Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy,
///pe. miFuncion(new Date(1984,4,23)) devolverá 39 años (en 2023).
/*
const calcularAnos = (fecha = undefined) => {
  if (fecha === undefined) return console.log("No ingreso la fecha");
  if (!(fecha instanceof Date))
    return console.log("El valor que ingreso no es una fecha");

  let hoyMenosFecha = new Date().getTime() - fecha.getTime();
  anoEnMilS = 1000 * 60 * 60 * 24 * 365;
  anosHumanos = Math.floor(hoyMenosFecha / anoEnMilS);

  return Math.sign(anosHumanos) === -1
    ? console.info(
        `Falta ${Math.abs(anosHumanos)} años para el ${fecha.getFullYear()}`
      )
    : Math.sign(anosHumanos) === 1
    ? console.info(
        `Han pasado ${Math.abs(
          anosHumanos
        )} años, despues ${fecha.getFullYear()}`
      )
    : console.info(`Estamos en año actual ${fecha.getFullYear()}`);
};
calcularAnos(new Date(1995, 6, 24));
*/

/////////18 Programa una función que dada una cadena de texto cuente el número de vocales y consonantes,
// pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
/*
function devolver(cadena=undefined) {
  let cadenas = cadena.toLowerCase();
  const vocales = /["a","e","i","o","u"]/g;
  const consta =
    /['b','c','d','f','g','h','j','k','l','f','p','m','n','k','r','s','t','w','y','z']/g;
  const repetir = cadenas.match(vocales).length;
  //const vocal = repetir.length;
  const conso = cadenas.match(consta).length;
  //const consonante = conso.length;

  console.log(`Vocales ${repetir} y Consonates ${conso}`);
}
devolver("Hola mundo");
*/
/*
const devolvera = (cadena) => {
  cadena = cadena.toLowerCase();
  let vocales = 0;
  let consonates = 0;
  //EXPRESIONES REGULARES
  for (let letras of cadena) {
    if (/[aeiouáéíóú]/.test(letras)) {
      vocales++;
    } else if (/[bcdfghjklmnñpqrstvwxyz]/.test(letras)) {
      consonates++;
    }
  }
  return console.log(`SON ${vocales} VOCALES Y ${consonates} CONSONANTES`);
};
devolvera("Hola Mundo");
*/
/////////19 Programa una función que valide que un texto sea un nombre válido,
///pe. miFuncion("Jonathan MirCha") devolverá verdadero.
/*
function nombreValido(cadena){
  let expReg= /^[A-Za-zÑñÁáÉéÍíÓóÚu\s]+$/g.test(cadena);
  if (expReg) {
    console.log(`El nombre de ${cadena} es valido`);
    return true;
  }else{
    console.log(`El nombre de ${cadena} No es valido`);
    return false;
  }
}
const re = nombreValido("Jonathan MirCha");
console.log(re);
*/
/////////20  Programa una función que valide que un texto sea un email válido,
////pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
/*
function validaCoreo(correo) {
  let validar = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (validar.test(correo)) {
    console.log(`EL CORREO DE ${correo} ES VALIDO`);
    return true;
  } else {
    return false;
  }
}
const resuls = validaCoreo("jonrcha@gmail.com");
console.log(resuls);
const expresionRegular = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;
*/

/////////21 Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado,
///pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

//console.log(Math.pow(2,5)); //32
/*
const cuadrado = (array=undefined)=>{
    if(array ===undefined) return console.warn('No ingresaste un arreglo de numero');
    if(!(array instanceof Array)) return console.error('El valor que ingreso no es arreglo');

    if(array.length===0) return console.error('El arreglo esta basio');

    for(let arrNum of array){
      if(typeof arrNum !=="number") return console.error(`El valor ${arrNum} ingresado, no es numerico`);
    }
    const newArray = array.map(num => num*num);

    return console.log(`Arreglo original: [${array}], \nArreglo elevado al cuadrado es [${newArray}]`);

}
cuadrado([1,4,5]);
*/

/////////22 Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array,
//pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
/*
const mayorMenor = (arry = undefined) => {
  if (arry === undefined)
    return console.warn("No ingreso un arreglo de numero");
  if (!(arry instanceof Array))
    return console.error("El valor que ingreso no es un arreglo");
  if (arry.length === 0) return console.error("El arreglo esta basio");

  for (let numArray of arry) {
    if (typeof numArray !== "number")
      return console.error(`El valor ${numArray} ingresado, no es numerico`);
  }
  const mayor = Math.max(...arry);
  const minimo = Math.min(...arry)
  return console.log(`Los valores son [${mayor}, ${minimo}]`);
  //return console.log(`Los valores son [${Math.max(...arry)}, ${Math.min(...arry)}]`);
};
mayorMenor([1, 4, 5, 99, -60]);
*/

/////////23  Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares,
// pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
/*
const arrImparPar = (array = undefined) => {
  if (array === undefined)
    return console.warn("No ingreso un arreglo de numero");
  if (!(array instanceof Array))
    return console.error("El valor que ingreso no es un arreglo");
  if (array.length === 0) return console.error("El arreglo esta basio");

  for (let numArrey of array) {
    if (typeof numArrey !== "number")
      return console.error(`El valor ${numArrey} ingresado, no es numerico`);
  }
  const par = array.filter((p) => p % 2 === 0);
  const impar = array.filter((p) => p % 2 === 1);
  return console.log(par, impar);
};
arrImparPar([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
*/

////////24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos,
//// el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente,
///pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

//document.body.innerHTML = colores.sort();
//document.body.innerHTML = colores.reverse();
/*
const ordenar = (arrays=undefined)=>{
  if(arrays ===undefined)
  return console.warn('No ingreso un arreglo de numero');
  if(!(arrays instanceof Array))
  return console.error('El valor que ingreso no es un arreglo');
  if(arrays.length ===0)
  return console.error('EL arreglo esta basio');

  for(let numArray of arrays){
    if(typeof numArray !=='number')
    return console.error(`El valor ${numArray} ingresado, no es numerico`);
  }
   console.log(`ASC: [${arrays.sort()}], DESC: [${arrays.reverse()}]`)
  
  return console.info({
    arrays,
    asc:arrays.map(el=>el).sort(),
    desc:arrays.map(el=>el).sort().reverse(),
  });
}
ordenar([7,5,7,8,6]);
*/

/////////25) Programa una función que dado un arreglo de elementos, elimine los duplicados,
///pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

/*
const eliminarIgual = (arrays = undefined) => {
  if (arrays === undefined) return console.warn("No ingreso un arreglo");
  if (!(arrays instanceof Array))
    return console.error("El valor que ingreso no es un arreglo");
  if (arrays.length === 0) return console.error("El arreglo esta vasio");

  //valor = valor;
  //index= posiscion;
  
  //forma un arreglo, pero sin duplicado (OPC 1)
  const elim = arrays.filter(
    (valor, index, self) => self.indexOf(valor) === index
  );

  //forma un arreglo, pero sin duplicado (OPC 2)
  //const elim=[... new Set(arrays)]

  return console.log(elim);

};
eliminarIgual(["x", 10, "x", 2, "10", 10, true, true]);
*/

//////////26) Programa una función que dado un arreglo de números obtenga el promedio,
///pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
/*
const obtenerPromedio = (arrays = undefined) => {
  if (arrays === undefined) return console.warn("No ingreso un arreglo");
  if (!(arrays instanceof Array))
    return console.error("El valor que ingreso no es un arreglo");
  if (arrays.length === 0) return console.error("El arreglo esta vasio");

  for (let numArray of arrays) {
    if (typeof numArray !== "number")
      return console.error(`El valor ${numArray} ingresado, no es numerico`);
  }
  //valor = valor;
  //index= posiscion;

  return console.info(
    arrays.reduce((total, num, index, arrays) => {
      total += num;
      if (index === arrays.length - 1) {
        return `El promedio de ${arrays.join(" + ")} es ${total / arrays.length}`;
      } else {
        return total;
      }
    })
  );
};
obtenerPromedio([9,8,7,6,5,4,3,2,1,0]);
*/

///////////27) Programa una clase llamada Pelicula.
/*
La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, 
titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
- Todos los datos del objeto son obligatorios.
- Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
- Valida que el título no rebase los 100 caracteres.
- Valida que el director no rebase los 50 caracteres.
- Valida que el año de estreno sea un número entero de 4 dígitos.
- Valida que el país o paises sea introducidos en forma de arreglo.
- Valida que los géneros sean introducidos en forma de arreglo.
- Valida que los géneros introducidos esten dentro de los géneros aceptados*.
- Crea un método estático que devuelva los géneros aceptados*.
- Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
- Crea un método que devuelva toda la ficha técnica de la película.
- Apartir de un arreglo con la información de 3 películas genera 3 
  instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, 
  Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, 
  Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/
/*
class Pelicula {
  constructor({
    id,
    titulo,
    director,
    anoEstreno,
    pais,
    generos,
    clasificacion,
  }) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.anoEstreno = anoEstreno;
    this.pais = pais;
    this.generos = generos;
    this.clasificacion = clasificacion;

    this.validacionIMDB(id);
    this.validacionTitulo(titulo);
    this.validacionDirector(director);
    this.validacionAno(anoEstreno);
    this.validacionPais(pais);
    this.validacionGenero(generos);
    this.validacionClasificacion(clasificacion);
  }
  static get listaGeneros() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }
  static generoAceptados() {
    return console.info(
      `Los generos aceptados son: ${Pelicula.listaGeneros.join(",")}`
    );
  }

  validarLongitudCadena(propiedad, valor, longitud) {
    if (valor.length > longitud)
      return console.error(
        `${propiedad} "${valor}" excede el numero de caracter permitido (${longitud})`
      );
    return true;
  }

  validarCadena(propiedad, valor) {
    if (!valor)
      return console.warn(`El campo de ${propiedad} "${valor}" esta vacio`);

    if (typeof valor !== "string")
      return console.error(
        `${propiedad} "${valor}" ingresado, No es una cadena de texto`
      );

    return true;
  }

  validarArray(propiedad, valor) {
    if (!valor)
      return console.warn(`El campo del ${propiedad} "${pais}" esta vacio`);

    if (!(valor instanceof Array))
      return console.error(
        `El ${propiedad} "${valor}" ingresado, No es de tipo arreglo`
      );

    if (valor.length === 0)
      return console.error(`El ${propiedad} "${valor}" No tien datos `);

    for (let cadena of valor) {
      if (typeof cadena !== "string")
        return console.error(
          `El ${propiedad} "${valor}" ingresado, No es de tipo arreglo`
        );
    }

    return true;
  }

  validarNumero(propiedad, valor) {
    if (!valor) return console.warn(`El ${propiedad} "${valor}" esta vacion`);

    if (typeof valor !== "number")
      return console.error(
        `${propiedad} "${valor}" ingresado, No es un numero entero`
      );

    return true;
  }

  validacionIMDB(id) {
    if (this.validarCadena("IMDB id", id))
      if (!/^([a-z]){2}([0-9]){7}$/.test(id))
        return console.error(`IMDB id "${id}" no es valido debe tener 9 caracteres, los 2 primero letras minusculas,
                              los 7 restantes numericos`);
  }

  validacionTitulo(titulo) {
    if (this.validarCadena("Titulo", titulo))
      if (this.validarLongitudCadena("Titulo", titulo, 100));
  }

  validacionDirector(director) {
    if (this.validarCadena("Director", director))
      if (this.validarLongitudCadena("Director", director, 50));
  }

  validacionAno(anoEstreno) {
    if (this.validarNumero("Año Estreno", anoEstreno))
      if (!/^([0-9]){4}$/.test(anoEstreno))
        return console.error(
          `El año de estreno "${anoEstreno}" tiene que ser 4 digitos`
        );

    return true;
  }

  validacionPais(pais) {
    if (this.validarArray("Paises", pais));
  }

  validacionGenero(generos) {
    if (this.validarArray("Generos", generos)) {
      for (let genero of generos) {
        if (!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Genero(s) incorrectos "${generos.join(",")}"`);
          Pelicula.generoAceptados();
        }
      }
    }
  }

  validacionClasificacion(clasificacion) {
    if (this.validarNumero("Clasificacion", clasificacion))
      return clasificacion > 0 && clasificacion <= 10
        ? (this.clasificacion = clasificacion.toFixed(1))
        : console.error(
            `La calificasion tiene que estar entre un rango de  0 y 10`
          );
  }

  //IMPRIMIR TODA LA FICHA TECNICA DE LA PELICULA
  fichaTecnica() {
    console.info(
      `Ficha Tecnica: "${this.titulo}"\nDirector: "${this.director}"\nAño: "${
        this.anoEstreno
      }"\nPais: "${this.pais.join("-")}"\nGeneros: "${this.generos.join(
        ","
      )}"\nCalificacion: "${this.clasificacion}"\nIMDB Id: "${this.id}"`
    );
  }
}

///CREAR METODO ESTATUCOS QUE DEVULVE LOS GENEROS ACEPTADOS
//Pelicula.generoAceptados();

///UNA INSTANCIA PARA MOSTRAR PELICULA

// const peli1 = new Pelicula({
//   id: "tt1234567",
//   titulo: "Peliculas",
//   director: "Jorge",
//   anoEstreno: 2023,
//   pais: ["Peru", "Bolivia"],
//   generos: ["Action", "Adventure"],
//   clasificacion: 7.36,
// });


////VER FICHA TECNICA DE LA PELICULA
//peli1.fichaTecnica();

////Apartir de un arreglo con la información de 3 películas genera 3 
///  instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.
const misPeliculas =[
  {
    id: "tt1234567",
    titulo: "INTERESTELAR",
    director: "Christopher Nolan",
    anoEstreno: 2014,
    pais: ["Estados Unidos", "Bolivia"],
    generos: ["Sci-Fi", "Adventure"],
    clasificacion: 9.36,
  },
  {
    id: "tt1234568",
    titulo: "OPENHAIMER",
    director: "Christopher Nolan",
    anoEstreno: 2023,
    pais: ["Estados Unidos","Bolivia"],
    generos: ["Biography", "Sci-Fi"],
    clasificacion: 8.5,
  },
  {
    id: "tt1234569",
    titulo: "TENET",
    director: "Christopher Nolan",
    anoEstreno: 2020,
    pais: ["Estados Unidos", "Bolivia"],
    generos: ["Action", "Sci-Fi"],
    clasificacion: 8,
  }
]

///  instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.
misPeliculas.forEach(peli => new Pelicula(peli).fichaTecnica());
*/

/*Un grupo de jovenes quieren comprar el eleado mas caro, con la plata que tienen cada un

Roberto $1.5
Lucas $1.7
Cofla $ 3

Precios de helado
Helado de agua $0.6
Helado de crema $1
helado heladix $1.6
helado heladovich $1.7
helado helardo $1.8
helado de cofite $ 2.9
Pote 1/4 KG -> $2.9

dineroCofla = prompt("Cuanto dinero teners");
dineroRoberto = prompt("Cuanto dinero teners");
dineroLucas = prompt("Cuanto dinero teners");

dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla <1) {
    alert("cofla, compra el helado de agua");
    alert("y te sobre" + ( dineroCofla - 0.6));
}
else if (dineroCofla >= 1 && dineroCofla<1.6) {
    alert("cofla, compra helado de heladix");
    alert("y te sobre" +( dineroCofla - 1));
}
else if (dineroCofla >= 2) {
    alert("cofla, comprar de todo, y un Pote");
    alert("y te sobre" +( dineroCofla - 2));
}
else{
    alert("cofla,  No comprar nada, llesca mrd")
}

if (dineroRoberto >= 0.6 && dineroRoberto <1) {
    alert("roberto, compra el helado de agua")   
}
else if (dineroRoberto >= 1 && dineroRoberto<1.7) {
    alert("roberto, compra helado de heladix")
}
else if (dineroRoberto >= 2) {
    alert("roberto, comprar de todo, y un Pote")
}
else{
    alert("roberto, No comprar nada, llesca mrd")
}

if (dineroLucas >= 0.6 && dineroLucas <1) {
    alert("lucas, compra el helado de agua")   
}
else if (dineroLucas >= 1 && dineroLucas<1.6) {
    alert("lucas, compra helado de heladix")
}
else if (dineroLucas >= 2) {
    alert("lucas, comprar de todo, y un Pote")
}
else{
    alert("lucas, No comprar nada, llesca mrd")
}
*/

/*
///ENTRAR A UNA FIESTA PERO DEACUERDO  A LA EDAD Y SER PRIMERO GRATIS, DESPUES PAGA
let free= false;
const validarCliente= (time)=>{ 
    let edad = prompt("Cual es la edad?");
    if (edad > 18) {
        if (time >= 2 && time < 7 && free == false) {
            alert("podes pasar gratis porque sos la primer persona despues de las 2");
            free =  true;
        }else {
            alert(`son las ${time}:00Hs y podes pasar, pero tenes que pagar la entradad`);
        }
    }else{
        alert("no podes pasarm, por que sos menor de edad");
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);
*/

