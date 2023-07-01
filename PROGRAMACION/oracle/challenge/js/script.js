//variables
var boton1 = document.querySelector("#btn-encriptar"); boton1.onclick = encriptar;

var boton2 = document.querySelector("#btn-desencriptar"); boton2.onclick = desencriptar;


//Funcion mostrar resultado
function resultado(){
    var inputText = document.querySelector("#input-texto").value;  
    if (inputText=== ""){
        document.getElementById("botonCopiar").style.display = "none";
        document.getElementById("divImagen").style.display ="block";
    } else{
        document.getElementById("botonCopiar").style.display = "block";
        document.getElementById("divImagen").style.display = "none";
    }
}

/**Función para quitar la imagen **/
function quitarImagen() {
    document.getElementById("divImagen").style.display = "none";

  }

function encriptar (){
    const caracteres = /[A-Z0-9~!@#$%&*()_+|{}[\]\\\/?><^:"`;.,áéíóúàèìòù']/g;
    var texto = document.querySelector("#input-texto").value;
    if (texto == ""){
        alert("Lo siento, pero no debe estar vacío.");
        

    } else if (texto.match(caracteres) != texto.match(caracteres)){
        alert("El texto no puede contener Mayusculas ni acentos por favor ni caracteres especiales.");
    } else{
        
        var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        document.querySelector(".text-input-salida").value = textoCifrado;
        document.querySelector("#input-texto").value;
        
        
        document.getElementById("msg").style.visibility = "visible";
        document.getElementById("btn-reset").style.visibility = "visible";
        
        quitarImagen();
        
    }
    }

//hacer un a funcion en la que si el texto de msg sobrepasa los 200px salte de linea para que no seiga de largo y que tenga un abuen avisibilidad para el usuario adecuarlo de forma en la que se vea todo el texto de la caja 

function desencriptar (){
    
     var texto = document.querySelector("#input-texto").value; 
     var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
     document.querySelector(".text-input-salida").value = textoCifrado; 
     document.querySelector("#input-texto").value;
     
     document.getElementById("msg").style.visibility = "visible";
     document.getElementById("btn-reset").style.visibility = "visible";
     
}

