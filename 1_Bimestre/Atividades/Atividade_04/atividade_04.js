let n1 = 0, n2 = 1;

for (let i = 3; i <= 20; i++) {
    let sequencia = n1 + n2;
    console.log(sequencia);
    n1 = n2;
    n2 = sequencia;
}