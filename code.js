// Função para validar o CNPJ
function validarCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
    
    // Verifica se o CNPJ tem 14 dígitos
    if (cnpj.length !== 14) {
        alert('CNPJ inválido. Deve conter 14 dígitos.');
        return false;
    }
    return true;
}

// Função para validar o e-mail
function validarEmail(email) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // Expressão regular para verificar o e-mail
    if (!regex.test(email)) {
        alert('E-mail inválido. Verifique o formato e tente novamente.');
        return false;
    }
    return true;
}

// Função para validar o telefone
function validarTelefone(telefone) {
    const cleanedPhone = telefone.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
    
    // Verifica se o telefone tem entre 10 e 11 dígitos
    if (cleanedPhone.length < 10 || cleanedPhone.length > 11) {
        alert('Telefone inválido. Deve conter 10 ou 11 dígitos.');
        return false;
    }
    return true;
}

// Função que valida o formulário no envio
document.querySelector("form").addEventListener("submit", function(event) {
    const cnpj = document.getElementById("cnpj").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    // Chama as funções de validação e previne o envio se algum campo for inválido
    if (!validarCNPJ(cnpj) || !validarEmail(email) || !validarTelefone(telefone)) {
        event.preventDefault(); // Impede o envio do formulário
    }
});

// Função para mostrar o spinner
function mostrarSpinner() {
    document.getElementById("loading-spinner").style.display = "block";
}

// Função para esconder o spinner
function esconderSpinner() {
    document.getElementById("loading-spinner").style.display = "none";
}

// Função que valida o formulário no envio
document.querySelector("form").addEventListener("submit", function(event) {
    const cnpj = document.getElementById("cnpj").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    // Impede o envio se algum campo for inválido
    if (!validarCNPJ(cnpj) || !validarEmail(email) || !validarTelefone(telefone)) {
        event.preventDefault(); // Impede o envio do formulário
    } else {
        event.preventDefault(); // Impede o envio real do formulário para controlar o tempo do spinner
        mostrarSpinner();

        // Simula o envio com um tempo maior de exibição do spinner (5 segundos)
        setTimeout(function() {
            esconderSpinner();
            alert("Formulário enviado com sucesso!");
            location.reload(); // Recarrega a página após o tempo do spinner
        }, 4000); // 5000ms = 5 segundos
    }
});
