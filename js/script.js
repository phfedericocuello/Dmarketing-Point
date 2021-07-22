let masServicios = true; // el boton dice más servicios


let aBotonServicios = document.getElementById("aBotonServicios");



const cambiar = () => {
    if (masServicios == true) {
    aBotonServicios.innerHTML = "VER MENOS SERVICIOS";
    masServicios = false;
}else {
    aBotonServicios.innerHTML = "VER MÁS SERVICIOS";
    masServicios = true;

}
}

aBotonServicios.addEventListener("click", cambiar);