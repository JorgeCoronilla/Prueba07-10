/*1. Usando la función filter en una sola línea coloca en 
un array las palabras que contienen "t" y/o "a" y están en posiciones impares.
array constante del que partimos: ["tierra", "loro", "alto", "otorgar", "cosa", "tumbona", "fresón", "tirar"]*/

alert("hola");

var lista = ["tierra", "loro", "alto", "otorgar", "cosa", "tumbona", "fresón", "tirar"];
var listaAux = [];
var listaFiltrada = lista.filter((elemento) => {
   
    for (let i=0;i<elemento.length;i++){
        if  ((elemento.charAt(i) == "t" || (elemento.charAt(i) == "t" && elemento.charAt(i) == "a")) && lista.indexOf(elemento)%2 != 0){
            listaAux.push(elemento);
        }
    }
    return listaAux;
});
console.log(listaAux);