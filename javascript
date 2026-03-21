function verificarAprovacao(n1, n2, n3) {
   let soma = n1 + n2 + n3
   let media = soma / 3
   if (media >= 7) {
      return "APROVADO COM MEDIA " + media
   }   else {
      return "REPROVADO COM MEDIA " + media
   }
}

SEPARAÇÃO

function verificarOadolescencia(idade) {
   if (idade >= 13 && idade <= 17) {
      return "Adolescente"
   }

   return "Outra Categoria"
}

SEPARAÇÃO

function maiordeTREs(a, b, c) {
   if (a >= b && a >= c) {
      return a
   } else if (b >= a && b >= c) {
      return b
   } else {
      return c
   }
}

CODIGO INCOMPLETO

let soma = 0
for (let i = 1; i <= limite; i++) {
   let isImpar = (i % 3 === 0);

   if (isImpar && isMultiplo3) {
     ERRO AQUI: soma = i
   }
   return soma
}
