import rl from 'readline-sync';

let ddd = rl.questionInt('Digite o DDD do seu estado: ')

switch (ddd) {
    case 69:
        console.log("Rondonia");
        break;
    case 21:
        console.log("Rio de Janeiro");
        break;
    case 11:
        console.log("São Paulo");
        break;
    case 65:
        console.log("Mato Grosso");
        break;
    default:
        console.log("DDD não encontrado")
        break;
 }