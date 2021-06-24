let cidade = "Erechim" //Cidade que está sendo observada
let hospitalizados = 45 //Total de pacientes hospitalizados por covid
let uti = 12 //Total de leitos de uti ocupados 
let óbitos = 5 //Óbitos registrados por covid 
let positivos = 1000 //Casos positivos de covid
let uti_total = 50 //Leitos totais de uti 
let leitos_total = 152 //Total de leitos normais 
let pop_total = 100000 //População total com base na cidade de Erechim RS

porcentagem = ((uti / uti_total) * 100) //Cálculo para transformar a porcentagem 
hospitalizados1 = ((hospitalizados / leitos_total) * 100) //----
positivos1 = ((positivos / pop_total) * 100) //------

if (porcentagem <= 10 && hospitalizados1 <= 25 && óbitos <= 2 && positivos1 <= 1) {
    console.log("A bandeira que prevalece em", cidade, "é a bandeira Branca")
}
if (porcentagem <= 20 && hospitalizados1 <= 45 && óbitos <= 5 && positivos1 <= 3) {
    console.log("A bandeira que prevalece em", cidade, "é a bandeira Laranja")
}
if (porcentagem <= 30 && hospitalizados1 <= 65 && óbitos <= 9 && positivos1 <= 6) {
    console.log("A bandeira que prevalece em", cidade, "é a bandeira Vermelha")
} else {
    console.log("A bandeira que prevalece em", cidade, "é a bandeira Preta")
}