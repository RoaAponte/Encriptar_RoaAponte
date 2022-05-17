var inputTexto = document.querySelector(".input-texto1")
var outputTexto = document.querySelector(".input-texto2")
var txtVacio = document.querySelector(".texto-der")

function btnencriptar(){
    var txtEncriptado = encriptar(inputTexto.value);
    outputTexto.value = txtEncriptado;
}

function encriptar(stringAEncriptar){
    var matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringAEncriptar = stringAEncriptar.toLowerCase();
    for (var i = 0; i < matrizCodigo.length; i++) {
        if(stringAEncriptar.includes(matrizCodigo[i][0])){
            stringAEncriptar = stringAEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringAEncriptar;
}

function txtDer(){
    var vacio = "";
    txtVacio.value = vacio;
}

function btndesencriptar(){
    var txtDesencriptado = desencriptar(inputTexto.value);
    outputTexto.value = txtDesencriptado;
}

function desencriptar(stringADesencriptar){
    var matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringADesencriptar = stringADesencriptar.toLowerCase();
    for (var i = 0; i < matrizCodigo.length; i++) {
        if(stringADesencriptar.includes(matrizCodigo[i][1])){
            stringADesencriptar = stringADesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringADesencriptar;
}

function copiarText(){
    outputTexto.select();;
    document.execCommand("copy");
    alert("Copiado!");
}