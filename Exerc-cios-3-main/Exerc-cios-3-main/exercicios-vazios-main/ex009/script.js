const hora = Number(prompt("Digite a hora (0-23)"))

if (hora >= 5 && hora <= 11) {
  alert("Manhã")
} else if (hora >= 12 && hora <= 17) {
  alert("Tarde")
} else if (hora >= 18 && hora <= 23) {
  alert("Noite")
} else if (hora >= 0 && hora <= 4) {
  alert("Madrugada")
} else {
  alert("Hora inválida, use um valor entre 0 e 23.")
}