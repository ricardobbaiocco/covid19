/* Calcular IMC */

let peso = 100;
let altura = 1.60;
let multiplica = 1.73 * 1.73;
let divisao = peso / multiplica;

if (divisao <= 18.5) {
    console.log("Seu IMC é: "+ divisao + " e está abaixo do peso");

} else if (divisao > 18.5 && divisao <= 24.9) {
    console.log("Seu IMC é: "+ divisao + " e está com o peso normal");

}else if(divisao >= 25 && divisao <= 29.9) {
    console.log("Seu IMC é: "+ divisao + " e está com sobrepeso");

}else if(divisao >= 30 && divisao <= 34.9) {
    console.log("Seu IMC é: "+ divisao + " e está com obesidade grau 1");

}else if(divisao >= 35 && divisao <= 39.9) {
    console.log("Seu IMC é: "+ divisao + " e está com obesidade grau 2");

}else if(divisao >= 40) {

    console.log("Seu IMC é: "+ divisao + " e está com obesidade grau 3")
} 



