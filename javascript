function verificarAprovacao(n1, n2, n3) {
   let soma = n1 + n2 + n3
   let media = soma / 3
   if (media >= 7) {
      return "APROVADO COM MÉDIA" + media
   }   else {
      return "REPROVADO COM MÉDIA" + media
   }
}
