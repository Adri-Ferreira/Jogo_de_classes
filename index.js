class Heroi{
    constructor(nome, idade, tipo, ataque){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;
    }
    toString(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}
let nome = new Heroi("Arganile", 19, "mago", "magia" )    

nome.toString()
