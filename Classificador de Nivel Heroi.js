let nomeHeroi;
let xpHeroi;
let nivelHeroi;

while (true) {
  nomeHeroi = prompt('Digite o nome do herói:')?.trim();
  xpHeroi = parseInt(prompt('Digite a quantidade de XP do herói:'), 10);
  
  // Validar entrada referente nomeHeroi e xpHeroi
  const entradasValidação = validarEntrada(nomeHeroi, xpHeroi);
  
  // Forçar o usuario realizar o input corretamente
  if (entradasValidação.length > 0) {
    console.log(entradasValidação.join(' '));
    continue;
  }

  // Estruturas de decisão para definir o nível do herói com base no XP
  if (xpHeroi < 1000) {
    nivelHeroi = 'Ferro';
  } else if (xpHeroi <= 2000) {
    nivelHeroi = 'Bronze';
  } else if (xpHeroi <= 5000) {
    nivelHeroi = 'Prata';
  } else if (xpHeroi <= 7000) {
    nivelHeroi = 'Ouro';
  } else if (xpHeroi <= 8000) {
    nivelHeroi = 'Platina';
  } else if (xpHeroi <= 9000) {
    nivelHeroi = 'Ascendente';
  } else if (xpHeroi <= 10000) {
    nivelHeroi = 'Imortal';
  } else if (xpHeroi >= 10001){
    nivelHeroi = 'Radiante';
  }
 
  // Exibindo a mensagem final
  console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);
 
  // Parada de Repetição 
  let opcao = prompt('Deseja continuar? (s/n)');
 
  if (opcao.toLowerCase() !== 's') {
    break; 
  }
}
  
function validarEntrada(nomeHeroi, xpHeroi) {
  const erros = [];
  
  if (!nomeHeroi) {
    erros.push('Nome herói inválido');
  }
  
  if (isNaN(xpHeroi) || xpHeroi < 0) {
    erros.push('A XP deve ser maior que 0 (zero).');
  }
  
  return erros;
}
