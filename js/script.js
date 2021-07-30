let masServicios = true; // el boton dice más servicios


let aBotonServicios = document.getElementById("aBotonServicios");



const cambiar = () => {
    if (masServicios == true) {
    aBotonServicios.innerHTML = "Ver menos servicios";
    masServicios = false;
}else {
    aBotonServicios.innerHTML = "Ver más servicios";
    masServicios = true;

}
}

aBotonServicios.addEventListener("click", cambiar);