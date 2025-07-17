document.getElementById('botao-converter').addEventListener('click', conversor);

function conversor() {
  let pokeouros = prompt("Digite aqui seus Pokéouros:");

  if (pokeouros === null) return; // Usuário cancelou

  pokeouros = parseInt(pokeouros);

  if (isNaN(pokeouros) || pokeouros < 0) {
    alert("Por favor, digite um número válido.");
    return;
  }

  let umpacote = 6;
  let resultado = Math.floor(pokeouros / umpacote);
  alert("O número de pacotes que você poderá abrir é " + resultado);
}
