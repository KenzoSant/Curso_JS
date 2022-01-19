class DispositivoEletronico {
    constructor(nome){
        this.Nome = nome;
        this.Ligado = false;
    }

    ligar() {

        if(this.ligado){
            console.log(this.nome + " já LIGADO");
            return;
        }

        this.ligado = true;
    }

    desligar(){

        if(!this.ligado){
            console.log(this.nome + " já DESLIGADO");
            return;
        }

        this.ligado = false;
    }

}

class Celular extends DispositivoEletronico{
    constructor(nome,cor,modelo){
        super(nome);
        this.Cor = cor;
        this.Modelo = modelo;
    }
    ligar(){
        console.log("Metodo do CELULAR");
    }

    //Pode criar uma Classe nova aqui
}

const s1 = new Celular("Android", "Azul", "Galaxy A50")
s1.ligar()
console.log(s1);