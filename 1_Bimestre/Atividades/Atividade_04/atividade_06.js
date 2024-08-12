const produto = {
    Nome:'Poco F4',
    Valor:'5000',
    Marca:'Xiaome',
    Fornecedor:'João Pedro'
};

for (const venda in produto) {
    console.log(`${venda}: ${produto[venda]}`)
}