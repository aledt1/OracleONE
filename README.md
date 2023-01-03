# PROGRAMA Y.C.B.E.2

El presente repositorio forma parte del Primer Challenge del curso de Oralce ONE y Alura Latam.
Es un portal web que encripta-desencripta un texto que el usuario ingresa.

## Características
- Desarrollado en HTML5, CSS3 y JS.
- Presenta vistas de móvil, tablet y desktop.

![Movil](/src/movil.png?raw=true "movil")
![Tabletv](/src/tabletv.png?raw=true "tablet")
![Tableth](/src/tableth.png?raw=true "tablet")
![Desktop](/src/desk.png?raw=true "desktop")

- El funcionamiento de la página se basa en el uso de eventos de acción para cada elemento HTML, la manipulación del DOM y BOM para la creación de elementos HTML y acciones del navegador, y la verificación de condiciones para la ejecucuión de métodos que encriptan o desencriptan el texto.

ejemplo:

```bash
    //Evento para la carga inicial de la página
    window.addEventListener("load", function(e){
        e.preventDefault();
        contenedor.append(imagen);
        imagen.src ="/src/incog.png";
        imagen.style.width = "100%";
        imagen.className += "imagen";

        contenedor.append(adv);
        adv.className += "msjadv";
        adv.innerHTML = "Ningún mensaje fue encontrado";

        contenedor.append(msjInicial);
        msjInicial.innerHTML = "Ingrese el texto que desee encriptar o desencriptar Agente.";
    
        //console.log("Cargó el evento inicial /load/");
    });
```
## Recursos utilizados
- [Google Fonts](https://fonts.google.com/)
- [Slider Revolution](https://www.sliderrevolution.com/resources/css-animated-background/)

## Autor
-[@aledt1](https://github.com/aledt1)

## Notas
- Existe un bug relacionado con la letra ñ al ingresarlo en la entrada del programa (Trabajando en una solución).
- ¿ERES CAPAZ DE ENCONTRAR EL MINI-EASTEREGG OCULTO EN LA PÁGINA?