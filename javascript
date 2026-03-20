function verificarAprovacao(n1, n2, n3) {
   let soma = n1 + n2 + n3
   let media = soma / 3
   if (media >= 7) {
      return "APROVADO COM MEDIA " + media
   }   else {
      return "REPROVADO COM MEDIA " + media
   }
}


function verificarOadolescencia(idade) {
   if (idade >= 13 && idade <= 17) {
      return "Adolescente"
   }

   return "Outra Categoria"
   }

