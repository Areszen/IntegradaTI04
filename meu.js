let header = document.getElementById('header')

window.addEventListener('scroll', () => {
    if(window.scrollY >= 200) {
        header.style.background='#191919'
    } else{
        header.style.background= 'transparent'

    }

})



document.addEventListener("DOMContentLoaded", function () {
    // Adiciona um evento de clique a todos os links do menu
    document.querySelectorAll('.link-menu').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Obtém o destino do link (o ID da seção)
            const targetId = this.getAttribute('href').substring(1);

            // Obtém a posição da seção alvo
            const targetElement = document.getElementById(targetId);
            const offset = targetElement.offsetTop;

            // Anima a rolagem suave
            window.scrollTo({
                top: offset - 50, // Ajuste opcional para melhorar o posicionamento
                behavior: 'smooth'
            });
        });
    });
});



document.addEventListener("DOMContentLoaded", function () {
    new Vue({
        el: '#app',
        data: {
            mensagem: 'Bem-vindo ao meu portfólio!',
        },
        methods: {
            alterarMensagem: function () {
                this.mensagem = 'Obrigado por visitar!';
            }
        }
    });
});

