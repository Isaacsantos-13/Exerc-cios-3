let valor = Number(prompt("Digite o valor da compra"))
let codigo = prompt("Digite o código de desconto")
if (codigo === "DESC10") {
  let desconto = valor * 0.10
  let valorComDesconto = valor - desconto
  alert("Desconto aplicado! Valor final: R$ " + valorComDesconto)
} else {
  alert("Sem desconto. Valor final: R$ " + valor)
}