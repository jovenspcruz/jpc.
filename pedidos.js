// ===============================
// PEDIDOS DE ORAÇÃO
// ===============================


const formulario = document.getElementById("pedidoForm");

const mensagem = document.getElementById("mensagem");



if(formulario){


    formulario.addEventListener("submit",(evento)=>{


        evento.preventDefault();



        const nome = document.getElementById("nome").value;

        const email = document.getElementById("email").value;

        const pedido = document.getElementById("pedido").value;




        // Verifica pedido


        if(pedido.trim() === ""){


            mensagem.innerHTML =
            "Por favor, escreva seu pedido de oração.";


            mensagem.style.color = "#ff8080";


            return;


        }





        // Criar objeto


        const novoPedido = {


            nome: nome || "Anônimo",

            email: email || "Não informado",

            pedido: pedido,

            data: new Date().toLocaleDateString("pt-BR")


        };





        // Buscar pedidos antigos


        let pedidos = JSON.parse(

            localStorage.getItem("pedidosJPC")

        ) || [];





        // Adicionar pedido


        pedidos.push(novoPedido);





        // Salvar


        localStorage.setItem(

            "pedidosJPC",

            JSON.stringify(pedidos)

        );





        // Mensagem


        mensagem.innerHTML =

        "🙏 Seu pedido foi recebido. O JPC estará unido em oração por você!";



        mensagem.style.color = "#D4AF37";





        // Limpar formulário


        formulario.reset();



    });


}