//Ejercicio 1

document.getElementById("enviarReyes").onclick = function reyesMagos(fecha){

    fecha = document.getElementById("fechaReyes").value;

    var fechaSSMM = new Date(2023, 00, 06);



}

 //Ejercicio 2

document.getElementById("enviarFecha").onclick = function fechaActual(){
    alert("Hoy es: " + new Date());
}

//Ejercicio 3

document.getElementById("enviarRadio").onclick = function calcularAreaCirculo(radio){

    radio = document.getElementById("radio").value;

    var area = Math.PI * (radio * radio);
    var longitud = 2 * Math.PI * radio;

    alert("El area de su circunferencia es: " + area.toFixed(2) + ", y la longitud es: " + longitud.toFixed(2));

}

//Ejercicio 4

document.getElementById("enviarRandom").onclick = function calcularAleatorio(comienzo, fin){

    comienzo = document.getElementById("comienzo").value;
    fin = document.getElementById("fin").value;

    if(comienzo >= fin){

        alert("Error, intentelo de nuevo");

    }else{

        var random = random = Math.floor(Math.random() * (fin - comienzo) + comienzo);

        alert(random);

    }


}