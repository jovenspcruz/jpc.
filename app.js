// ===============================
// MENU MOBILE
// ===============================

const menuBtn = document.querySelector(".menu-mobile");
const menu = document.querySelector("nav");


if(menuBtn){

    menuBtn.addEventListener("click",()=>{


        menu.classList.toggle("active");


        if(menu.classList.contains("active")){

            menuBtn.innerHTML =
            '<i class="fa-solid fa-xmark"></i>';

        }else{

            menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

        }


    });

}


// Fechar menu ao clicar no link

document.querySelectorAll("nav a").forEach(link=>{


    link.addEventListener("click",()=>{


        if(menu){

            menu.classList.remove("active");

        }


        if(menuBtn){

            menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

        }


    });


});




// ===============================
// HEADER AO ROLAR
// ===============================


const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(header){


        if(window.scrollY > 80){


            header.style.background =
            "rgba(8,23,41,.95)";


            header.style.boxShadow =
            "0 5px 25px rgba(0,0,0,.4)";


        }else{


            header.style.background =
            "rgba(8,23,41,.75)";


            header.style.boxShadow =
            "none";


        }


    }


});




// ===============================
// ANIMAÇÃO AO APARECER
// ===============================


const elementos =
document.querySelectorAll(
".card, .santo, .card-formacao, section"
);



const observador =
new IntersectionObserver((entradas)=>{


    entradas.forEach((entrada)=>{


        if(entrada.isIntersecting){


            entrada.target.classList.add("mostrar");


        }


    });


},{
    threshold:.15
});



elementos.forEach((elemento)=>{


    elemento.classList.add("animar");


    observador.observe(elemento);


});




// ===============================
// BOTÃO VOLTAR AO TOPO
// ===============================


const topo = document.createElement("button");


topo.innerHTML =
'<i class="fa-solid fa-arrow-up"></i>';



topo.className="topo";



document.body.appendChild(topo);



window.addEventListener("scroll",()=>{


    if(window.scrollY > 500){


        topo.classList.add("mostrar-topo");


    }else{


        topo.classList.remove("mostrar-topo");


    }


});



topo.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});




// ===============================
// ANO AUTOMÁTICO FOOTER
// ===============================


const ano =
document.querySelector(".ano");


if(ano){


    ano.textContent =
    new Date().getFullYear();


}




// ===============================
// CONSOLE PERSONALIZADO
// ===============================


console.log(
"%cJPC - Juventude Para Cristo",
"color:#D4AF37;font-size:25px;font-weight:bold"
);


console.log(
"Site desenvolvido para evangelização."
);