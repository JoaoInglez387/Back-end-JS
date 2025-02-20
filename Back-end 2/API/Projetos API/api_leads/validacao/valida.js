function validaNome(nome) {
    const regexNome = /^[a-zA-Z-ÿ\s\-']+$/;
    const isvalid = nome.length >= 2 && regexNome.test(nome);
    return isvalid;
}

function validaEmail(email) {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isvalid = regexEmail.test(email);
    return isvalid;
}

function validaTelefone(telefone) {
    const regexTelefone = ^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$;
    const isvalid = regexTelefone.test(telefone);
}

export function ValidaUsuario(nome, email, telefone) {
    const nomeValido = validaNome(nome);
    const emailValido = validaEmail(email);
    const telefoneValido = validaEmail(telefone);

    const usuarioValido = nomeValido && emailValido && telefoneValido;

    if (usuarioValido) {
        return {status: true, mensagem: 'Usuário cadastro com sucesso!'};
    } else {
        return {status: false, mensagem: 'Nome, Email ou Telefone inválido(s)!'}
    }
}