

function encriptar(){
    var texto = document.getElementById("input-mensaje").value.toLowerCase();
    //
    if (texto != "") {
        
            var txtCifrado  = texto.replace(/e/igm,"enter");
            var txtCifrado  = txtCifrado.replace(/o/igm,"ober");
            var txtCifrado  = txtCifrado.replace(/i/igm,"imes");
            var txtCifrado  = txtCifrado.replace(/a/igm,"ai");
            var txtCifrado  = txtCifrado.replace(/u/igm,"ufat");
    
            document.getElementById("img-right").style.display = "none";
            document.getElementById("text").style.display = "none";
            document.getElementById("text-two").innerHTML = txtCifrado;
            document.getElementById("copy").style.display = "show" ;
            document.getElementById("copy").style.display = "inherit" ;
        
    }else{
       
    }  
}

function desencriptar(){
    var texto = document.getElementById("input-mensaje").value.toLowerCase();
    //
    var txtCifrado  = texto.replace(/enter/igm,"e");
    var txtCifrado  = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado  = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado  = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado  = txtCifrado.replace(/ufat/igm,"u");
    
    document.getElementById("img-right").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("text-two").innerHTML = txtCifrado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit";

}

function copiar(){
    var contenido = document.querySelector("#text-two")
    contenido.select();
    document.execCommand("copy");
    
}