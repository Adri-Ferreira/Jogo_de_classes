//Definir a class Heroi
class Heroi{
    constructor(nome, idade, tipo, ataque){
        //adicionar as propriedades
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;
    }
//Retorna uma string que descreve a ação do heroi
    toString(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}
//Criar as instâncias da class Heroi
let mago = new Heroi("Arganile", 19, "mago", "magia" )    
let guerreiro = new Heroi("Aragon", 24, "guerreiro", "espada");
let monge = new Heroi("Ragnar", 32, "monge", "artes marciais");
let ninja = new Heroi("Taki", 25, "ninja", "shuriken");

//Chamar o método toString e exibir no console
mago.toString()
guerreiro.toString();
monge.toString();
ninja.toString();