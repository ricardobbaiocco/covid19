//Fazer uma função que recebe como paremetro uma palavra e retorna se a palavra é um palindromo
console.log(palindromo("andrea"))

function palindromo(palavra){
   //criar 
   let posicao = palavra.length -1;
  for(let i=0;i<palavra.length;i++){
   //comparar a primeira letra com a última...etc
   if(palavra[i] == palavra[posicao -i]){
       var pal = "palindromo";
   }else{
      var pal = "Não é palindromo";
      break;
   }
}
return pal;
}

