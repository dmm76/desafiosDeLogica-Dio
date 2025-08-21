const readline = require("readline-sync");

class Heroi {
  constructor(nome, xp) {
    this.nome = nome;
    this.xp = xp;
  }

  classificarNivel() {
    if (this.xp < 1000) return "Ferro";
    else if (this.xp <= 2000) return "Bronze";
    else if (this.xp <= 5000) return "Prata";
    else if (this.xp <= 7000) return "Ouro";
    else if (this.xp <= 8000) return "Platina";
    else if (this.xp <= 9000) return "Ascendente";
    else if (this.xp <= 10000) return "Imortal";
    else return "Radiante";
  }
}

let nome = readline.question("Digite o nome do herói: ");
let xp = parseInt(
  readline.question("Digite a quantidade de experiência (XP): ")
);

let h = new Heroi(nome, xp);
console.log(
  `O Herói de nome ${h.nome} está no nível de ${h.classificarNivel()}`
);
