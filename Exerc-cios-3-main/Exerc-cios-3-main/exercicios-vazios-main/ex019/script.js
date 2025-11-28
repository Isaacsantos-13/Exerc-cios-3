let h1 = Number(prompt("Digite a primeira nota"))
let h2 = Number(prompt("Digite a segunda nota"))
let h3 = Number(prompt("Digite a terceira nota"))

let media = (h1 + h2 + h3) / 3

if (media >= 6) {
  alert("Média: " + media + " - Aprovado")
} else {
  alert("Média: " + media + " - Reprovado")
}