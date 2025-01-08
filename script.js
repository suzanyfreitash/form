//seleciona o formulário

const form = document.querySelector('form');

// adiciona um evento de submissão

form.addEventListener('submit', function(event) {
    //previne o envio padrão do formulário
    event.preventDefault();

    //seleciona os campos

    const name = document.querySelector('#name')
    const email = document.querySelector('#email')
    const mensagem = document.querySelector('#mensagem');

    //validação básica

    if(name.ariaValueMax.trim()=== '') {
        alert('Por favor, preencha o campo de nome.');
        name.focus();
        return;
    }

    if (!validateEmail(email.value)) {
        alert('Por favor, insira um e-mail válido');
        email.focus();
        return
    }

    if (mensagem.value.trim() === '') {
        alert('Por favor, preencha o campo mensagem.');
        mensagem.focus()
        return;
    }

//se correto

alert('Formulário enviado com sucesso!');
form.reset(); //limpa formulário

});

//funcao valida e-mail

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
    
}
