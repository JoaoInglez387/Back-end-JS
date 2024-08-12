//Operadores:
var num = 1 + 2;
var teste = 20 % 6 == 0;
var teste1 = 20 > 5;
console.log(teste1);
console.log(teste);
console.log(num);

console.log(25+2);
console.log("teste" + " é bom");
console.log(20 + true);
console.log(25 + false);
console.log(true + true);
console.log(false + false);
console.log("teste" + 5);
console.log(5 + undefined); //Erro que não é numero

var numero = 9;
console.log(numero++);

var numero = 9;
console.log(++numero);

var veri = null == undefined;
console.log(veri);

var texe  = 1 == '1' || "a" == "a";
var tex1  = 12 === '12' && 5 == 10;
var tex2 = ! ('a' == 1);

console.log(texe);
console.log(tex1);
console.log(tex2);

//Ternário
//8
var num = 10;

num % 2 == 0
    ?console.log("Esse número é par")
    :console.log("Esse número é impar")