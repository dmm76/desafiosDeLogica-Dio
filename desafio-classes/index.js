class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    this.ataque = "";
  }
  atacar() {
    console.log(`o ${this.tipo} ${this.nome} atacou usando ${this.ataque}`);
  }
}

class Mago extends Heroi {
  constructor(nome, idade) {
    super(nome, idade, "mago");
    this.ataque = "magia";
  }
}

class Guerreiro extends Heroi {
  constructor(nome, idade) {
    super(nome, idade, "guerreiro");
    this.ataque = "espada";
  }
}

class Monge extends Heroi {
  constructor(nome, idade) {
    super(nome, idade, "monge");
    this.ataque = "kung-fu";
  }
}

class Ninja extends Heroi {
  constructor(nome, idade) {
    super(nome, idade, "ninja");
    this.ataque = "shuriken";
  }
}

const mago = new Mago("Merlin", 150);
const guerreiro = new Guerreiro("Arthur", 30);
const monge = new Monge("Dalai", 50);
const ninja = new Ninja("Giraia", 22);
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
