let preco = Number(prompt("Digite o preço do produto:"));

if (preco < 20) {
  alert("Barato");
} else if (preco <= 100) {
  alert("Médio");
} else {
  alert("Caro");
}