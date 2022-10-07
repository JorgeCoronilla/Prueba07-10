/* 2. Disponemos del siguiente JSON:
"Empleados": [
{ "Nombre": "John", "Apellido": "Doe"},
{ "Nombre": "Anna", "Apellido": "Smith"},
{ "Nombre": "Pedro", "Apellido": "Jones"}
]
Permite por medio de un formulario que el usuario pueda insertar 
empleados y cambiar su nombre, apellido o ambos. */
var contador = 3;
var listaEmpleados
var empleados = {
    "Empleados": [
        { "Nombre": "John", "Apellido": "Doe" },
        { "Nombre": "Anna", "Apellido": "Smith" },
        { "Nombre": "Pedro", "Apellido": "Jones" }
    ]
};

function pasaDatos() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    empleados.Empleados[contador] = { Nombre: name, Apellido: surname }
    pintaDatos(name, surname);
    document.getElementById("name").innerText = "";
    document.getElementById("name").innerText = "";
    document.querySelector('p').innerText = JSON.stringify(empleados);
    contador++;

}

function pintaDatos(name, surname) {
    document.querySelector('h3').innerText = name;
    document.querySelector('h4').innerText = surname;
}

function abreBuscar() {
    document.getElementById("busqueda").style.visibility = "visible"
}

function buscar() {
    var name1 = document.getElementById("name1").value;
    var surname1 = document.getElementById("surname1").value;
    var indice;
    for (let i = 0; i < contador; i++) {
        if (name1 == empleados.Empleados[i].Nombre || (surname1 == empleados.Empleados[i].Apellido)) {
            indice = i;
            break;
        }
    }
    if (indice >= 0) {
        document.querySelector('p').innerText = "Hemos encontrado al siguiente empleado \n" + empleados.Empleados[indice].Nombre + " " + empleados.Empleados[indice].Apellido;
    }
    cambiaEmpleado(indice);
}

function cambiaEmpleado(indice) {
    document.getElementById("busqueda").style.visibility = "hidden";
    document.getElementById("cambio").style.visibility = "visivle";
    var name2 = document.getElementById("name2").value;
    var surname2 = document.getElementById("surname2").value;
    empleados.Empleados[indice]={ "Nombre": "John", "Apellido": "Doe" };
    /*
    empleados.Empleados[indice].Nombre = name2
    empleados.Empleados[indice].Apellido = surname2*/
}