//Llamar al objeto en el HTML
const buttonCart = document.getElementsByClassName("addCart");
buttonCart.addEventListener("click");

//Variable para almacenar la cuenta
let contador = 0;

//Funcion para ir sumando los productos en el carrito
function contar() {
    console.log("entró");
    Swal.fire({
        icon: "success",
        title: "¡Genial!",
        text: "Artículo agregado a tu carrito!"
      });
}

buttonCart.onclick = function () {
  contar();
};
