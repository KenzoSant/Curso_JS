class Controle {
    constructor(tv){
        this.Tv = tv;
        this.Volume = 0;
    }

    // Metodo de Instancia
    AumentarVolume(){
        this.Volume += 2;
    }
    DiminuirVolume(){
        this.Volume -= 2
    }

    //Metode estatico
    static atualizar(){
        console.log("Atualização dos Controles Realizada");
    }
}

const n1 = new Controle("Samsung")
n1.AumentarVolume()
console.log(n1);

const n2 = new Controle("LG")
n2.AumentarVolume()
n2.AumentarVolume()
console.log(n2);

Controle.atualizar()