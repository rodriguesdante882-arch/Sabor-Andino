let carrito=[];


// AGREGAR PRODUCTO

function agregarCarrito(nombre){


    let producto =
    carrito.find(
        producto => producto.nombre === nombre
    );


    if(producto){

        producto.cantidad++;

    }else{


        carrito.push({

            nombre:nombre,

            cantidad:1

        });


    }


    actualizarCarrito();


}



// ACTUALIZAR CARRITO


function actualizarCarrito(){


let lista =
document.getElementById("listaProductos");


lista.innerHTML="";


let cantidadTotal=0;



carrito.forEach(producto=>{


cantidadTotal += producto.cantidad;



lista.innerHTML += `

<div class="producto-carrito">


<span>

${producto.nombre}

</span>


<span>

x${producto.cantidad}

</span>


</div>


`;


});



if(carrito.length==0){


lista.innerHTML=
"<p>Carrito vacío</p>";


}



document.getElementById(
"contadorCarrito"
).innerHTML=cantidadTotal;



}



// ABRIR CARRITO


function mostrarCarrito(){


let carritoCaja =
document.getElementById("carrito");


if(carritoCaja.style.display=="block"){


carritoCaja.style.display="none";


}else{


carritoCaja.style.display="block";


}


}



// CERRAR CARRITO


function cerrarCarrito(){


document.getElementById("carrito")
.style.display="none";


}