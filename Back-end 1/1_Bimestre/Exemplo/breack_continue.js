let fucionarios = [
    {id: 1, nome: 'Nata', habilitado: false },
    {id: 2, nome: 'Vini', habilitado: false },
    {id: 3, nome: 'Ingles', habilitado: true},
    {id: 4, nome: 'Guarana', habilitado: false },
    {id: 5, nome: 'Inago', habilitado: false },
    {id: 4, nome: 'Pretinho', habilitado: false },
    {id: 4, nome: 'Relapago marquinhos', habilitado: false },
    {id: 4, nome: 'Carlinho', habilitado: false },
    {id: 4, nome: 'azeite de olivia', habilitado: false },
    {id: 4, nome: 'Capa', habilitado: false },
]

let contar = 0;
let encontroHabilitado = false;

while (contar < fucionarios.length) {
    let fucionario = fucionarios[contar];
    if (fucionario.habilitado == true) {
        console.log("Fucionário habilitado encontrado: " + fucionario.nome);
        encontroHabilitado = true;
        break;
    }
    contar++;

}

if (!encontroHabilitado) {
    console.log("Nenhum fucionario habilitado encontrado");
}