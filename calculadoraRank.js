//readline solicita entrada
const readline = require('readline');

const ent = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//Função para obter dados e para a execução do while 
function obterDados(){
    ent.question('Deseja continuar? (s/n) ', (op) => {
        if(op !== 's'){
            ent.close();
            return;
        }
        //obter quantidades de vitorias e de derrotas
        ent.question("Digite o numero de vitorias : " , (vitoriasInput) => {
            ent.question("Digite o numero de derrotas : " , (derrotasInput) => {
                const vitorias = parseInt(vitoriasInput);
                const derrotas = parseInt(derrotasInput);
               
                //Para verificar se deseja continuar 
                if(isNaN(vitorias) || isNaN(derrotas)){
                    console.log('Numero invalido! Digite o numero novamente');
                    obterDados();
                }
                else{
                    calcularNivel(vitorias,derrotas);
                    obterDados();
                }

            })
        }
    )
    });
}


function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}\n`);


}

obterDados();