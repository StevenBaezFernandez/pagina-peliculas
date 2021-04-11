const btn_ver_trailer = document.querySelector(".btn_carrusel_ver_trailer");
const container_trailer = document.querySelector(".container_trailer");
const cerrar_container_trailer = document.querySelector(".cerrar_container_trailer");
const pelicula = `<iframe class="pelicula" allowtransparency="true" src="https://kiripiliarload.com/embed/OX3y-HFUHTq2nwAIKles-cC2DI8Y6mIaqRmnGtAfaA3FhvGlkzm-lsY-Rubfs18E" frameborder="0"></iframe>`;
const btn_prueba = document.querySelector(".btn_prueba");
const item = document.querySelectorAll(".item");
const carrusel = document.querySelector(".carrusel");
const container_carrusel = document.querySelector(".container_carrusel");;
let contador = 1;

let width_carrusel = carrusel.offsetWidth;

window.addEventListener("resize", ()=>{
    width_carrusel = carrusel.offsetWidth;
});




// btn_ver_trailer.addEventListener("click", ()=>{
//     container_trailer.classList.add("active");
// });

// cerrar_container_trailer.addEventListener("click", ()=>{
//     container_trailer.classList.remove("active");
// });


// -----------------------------Carrusel----------------------------------

let tamaño_completo = (width_carrusel * (item.length-1));



const bg = Array(
        "img/aladin_back.jpg",
        "img/arrow_serie_back.jpg",
        "img/avergers_infinity_war_2018_back.jpg",
        "img/bad_boy_2020_back.jpg",
        "img/lost_serie_back.jpg",
        "img/jumanji_the_next_level_2019_back.jpg"
    );

setInterval(
    ()=>{
       
        carrusel.style.transform = "translate("+ ( -width_carrusel * contador )+"px)";
        carrusel.style.transition = "transform .65s";
        container_carrusel.style.backgroundImage = "url("+ bg[contador] +")";

        contador++;

        if(contador == item.length){
            container_carrusel.style.backgroundImage = "url("+ bg[0] +")";
            setTimeout(()=>{

                carrusel.style.transform = "translate(0px)";
                carrusel.style.transition = "transform 0s";
                contador = 1;

            },5000)
            
        }
        
    },
    10000
);
