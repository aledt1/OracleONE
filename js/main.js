//instancias de html
var ycbe2 = document.getElementById("areaTexto");
var btnEncriptar = document.getElementById("btnEn");
var btnDesencriptar = document.getElementById("btnDes");
var contenedor = document.querySelector("#contenedorPadre");
var form = document.getElementById("form");

//valiables para el DOM
var imagen = document.createElement("img");
var adv = document.createElement("h2");
var msjTrans = document.createElement("p");
    msjTrans.className += "textoEnDes";
    msjTrans.setAttribute("id","textoACopiar");

var msjInicial = document.createElement("p");
    msjInicial.className += "textoEnDes";    
    
var btnCopiar = document.createElement("button");
    btnCopiar.type ="button";
    btnCopiar.innerText = "Copiar texto";
    btnCopiar.className += "btn";
    btnCopiar.setAttribute("id","btnCopiar");

//Evento para la carga inicial de la página
window.addEventListener("load", function(e){
    e.preventDefault();
    contenedor.append(imagen);
    imagen.src ="./src/incog.png";
    imagen.style.width = "100%";
    imagen.className += "imagen";

    contenedor.append(adv);
    adv.className += "msjadv";
    adv.innerHTML = "Ningún mensaje fue encontrado";

    contenedor.append(msjInicial);
    msjInicial.innerHTML = "Ingrese el texto que desee encriptar o desencriptar Agente.";
    
    //console.log("Cargó el evento inicial /load/");
});

//Evento para el boton encriptar
btnEncriptar.addEventListener("click", function(e){
    e.preventDefault();
    // objeto con las keys a cambiar
    let encriptador = {
        a:"ai",
        e:"enter",
        i:"imes",
        o:"ober",
        u:"ufat"
    };

    //Caso 1: Texto ingresado
    if ((ycbe2.value.length > 4) && (ycbe2.value[0] != " ")){ 
        imagen.style.display = "none";
        adv.style.display = "none";
        msjInicial.style.display = "none";
        contenedor.append(msjTrans);

        //Caso 1.1: Texto ingresado cumple con las condiciones
        for (let i = 0; i < ycbe2.value.length; i++){
            if (((ycbe2.value.charCodeAt(i) > 96) && (ycbe2.value.charCodeAt(i) < 123)) || (ycbe2.value.charCodeAt(i) == 32)){
                let textoEncriptado = ycbe2.value.replace(/a|e|i|o|u/gi, function(cambio){ //funcion encriptador
                    return encriptador[cambio]});
                msjTrans.innerHTML = textoEncriptado;
                msjTrans.style.fontSize = "26px";
                msjTrans.style.textAlign = "center";
                contenedor.append(btnCopiar);
                btnCopiar.style.width = "100%";

            } else{ //caso 1.2: Texto ingresado no cumple condiciones
                btnCopiar.style.display = "none";
                alert("El programa Y.C.B.E.2 solo admite texto en minúsculas, sin acentos ni números. Vuelva a cargar el texto Agente.");
                location.reload();
                break;
            }
        } 
    } else{ //Caso 2: Texto no ingresado
        alert("Favor de agregar un texto Agente");
        form.reset();
        location.reload();
    }
    //console.log("Se ejecutó el evento Encriptar");
});

//Evento para desencriptar un texto
btnDesencriptar.addEventListener("click", function(f){
    f.preventDefault();
    // objeto con las keys a cambiar
    let desencriptador = {
        ai:"a",
        enter:"e",
        imes:"i",
        ober:"o",
        ufat:"u"
    };
    //Caso 1: Texto ingresado
    if ((ycbe2.value.length > 4) && (ycbe2.value[0] != " ")){ 
        imagen.style.display = "none";
        adv.style.display = "none";
        msjInicial.style.display = "none";
        contenedor.append(msjTrans);

        let textoDesencriptado = ycbe2.value.replace(/ai|enter|imes|ober|ufat/gi, function(cambio){ //funcion desencriptar
            return desencriptador[cambio]});
        msjTrans.innerHTML = textoDesencriptado;
        msjTrans.style.fontSize = "32px";
        msjTrans.style.textAlign = "center";
        contenedor.append(btnCopiar);
        btnCopiar.style.width = "100%";

    } else{ //Caso 2: Texto no ingresado
        alert("Favor de agregar un texto Agente");
        form.reset();
        location.reload();
    }
    //console.log("Se ejecutó el evento Desencriptar");
});

//Evento copiar texto transformado
btnCopiar.addEventListener("click", function(g){
    g.preventDefault();
    
    let copia = document.getElementById("textoACopiar");
    navigator.clipboard.writeText(copia.textContent); //metodo copiar
    //console.log("Si se copio el texto");
    //console.log(copia.innerHTML);
    //console.log(copia.innerText);
    //console.log(copia.textContent);
    //console.log(copia.value);
    form.reset();
    setTimeout(() =>{location.reload();}, 1500);
});