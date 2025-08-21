const readline = require("readline-sync");

class Heroi {
  constructor(nome, vitorias, derrotas) {
    this.nome = nome;
    this.vitorias = vitorias;
    this.derrotas = derrotas;
  }

  classificarNivel() {
    return `O Herói de nome ${
      this.nome
    } está no nível de ${this.saldoVitorias()}`;
  }

  saldoVitorias() {
    let saldo = this.vitorias - this.derrotas;
    if (saldo < 10) return "Ferro";
    else if (saldo < 20) return "Bronze";
    else if (saldo < 50) return "Prata";
    else if (saldo < 80) return "Ouro";
    else if (saldo < 90) return "Diamante";
    else if (saldo < 100) return "Lendário";
    else return "Imortal";
  }
}

let nome = readline.question("Digite o nome do herói: ");
let vitorias = parseInt(readline.question("Digite o numero de vitorias: "));
let derrotas = parseInt(readline.question("Digite o numero de derrotas: "));

let h = new Heroi(nome, vitorias, derrotas);
console.log(h.classificarNivel());
