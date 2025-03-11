let vitorias = calcularNivel(2, 3);
let nivel =""

function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    return saldoVitorias;
}

if (vitorias >= 1 && vitorias <= 10){
  nivel = "Ferro"
} else if (vitorias >= 11 && vitorias <= 20){
  nivel = "Bronze"
} else if (vitorias >=21 && vitorias <= 50){
  nivel = "Prata"		
} else if (vitorias >=51 && vitorias <= 80){
  nivel = "Ouro"
} else if (vitorias >=81 && vitorias <= 90){
  nivel = "Diamante"
} else if (vitorias >=91 && vitorias <= 100){
  nivel = "Lendário"
} else if (vitorias >= 101){
  nivel = "Imortal" 
} else if (vitorias < 0){
  nivel = "Desclassificado"	
}


console.log("O Herói tem de saldo de " + vitorias + " está no nível " + nivel ); 