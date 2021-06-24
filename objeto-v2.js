// objeto pessoa, pessoa função anda e pula, cor, altura, idade, time que torce

let pessoa = {
    'nome':'Ricardo',
    'cor':'branca',
    'altura':'172cm',
    'sexo':'Masculino',
    'idade':22,
    'time':'Grêmio',
    'andar': function(){return "Andando..."},
    'pular': function(){return "Pulando...."}
    
}

console.log(pessoa.andar())