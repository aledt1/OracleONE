var btnEncriptar = document.getElementById("btnEn");
var btnDesencriptar = document.getElementById("btnDes");
var ycbe2 = document.getElementById("areaTexto").value;
var contenedor = document.querySelector("#contenedorPadre");
//valiables para el DOM
let imagen = document.createElement("img");
let adv = document.createElement("h3");
let msjInicial = document.createElement("p");

let msjTrans = document.createElement("p");
    msjTrans.className += "textoEnDes";

let btnCopiar = document.createElement("button");
    btnCopiar.type ="button";
    btnCopiar.innerText = "Copiar texto";
    btnCopiar.className += "btn";
    btnCopiar.setAttribute("id","btnCopiar");


//Evento para la carga inicial de la página
window.addEventListener("load", function(e){
    e.preventDefault();
    contenedor.append(imagen);
    imagen.src ="/src/incog.png";
    imagen.style.width = "100%"
    imagen.className += "imagen",

    contenedor.append(adv);
    adv.className += "msjadv";
    adv.innerHTML = "Ningún mensaje fue encontrado";

    contenedor.append(msjInicial);
    msjInicial.className += "textoEnDes";
    msjInicial.innerHTML = "Ingrese el texto que desee encriptar o desencriptar Agente.";
    
    console.log("Si jala el evento carga");
});

//evento para el boton encriptar
var encriptador = {
    a:"ai",
    e:"enter",
    i:"imes",
    o:"ober",
    u:"ufat"
};

var prueba1 = ycbe2.replace(/a|e|i|o|u/gi, function(cambio){
    return encriptador[cambio];
});

btnEncriptar.addEventListener("click", function(e){
    e.preventDefault();
    // Ocultamos los elementos del evento carga
    imagen.style.display = "none";
    adv.style.display = "none";
    msjInicial.style.display = "none";

    contenedor.append(msjTrans);

    let textoEncriptado = ycbe2.replace(/a|e|i|o|u/gi, function(cambio){
        return encriptador[cambio];
    });
    msjTrans.innerHTML = textoEncriptado;

    contenedor.append(btnCopiar);
});

//evento para desencriptar un texto
var desencriptador = {
    ai:"a",
    enter:"e",
    imes:"i",
    ober:"o",
    ufat:"u"
};

btnDesencriptar.addEventListener("click", function(f){
    f.preventDefault();
    imagen.style.display = "none";
    adv.style.display = "none";
    msjInicial.style.display = "none";

    contenedor.append(msjTrans);

    let textoDesencriptado = ycbe2.replace(/ai|enter|imes|ober|ufat/gi, function(cambio){
        return encriptador[cambio];
    });
    msjTrans.innerHTML = textoDesencriptado;

    contenedor.append(btnCopiar);

});


//evento copiar
btnCopiar.addEventListener("click", function(g){
    g.preventDefault();

})




