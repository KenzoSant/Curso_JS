//Factory function (Função fábrica)
// Constructor function (Função construtora) 
function criapes(nome,sobre,altura,peso){
    return{
        nome,
        sobre,

        get nomecompleto(){
            return `${this.nome} ${this.sobre}`
        },

        //Setter
        set nomecompleto(valor){
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobre = valor.join(' ')
        },
        
        fala: function(ass){
            return `${nome} esta falando ${ass}.`;
        },

        altura,
        peso,

        // Getter
        get imc(){
            const ind = this.peso / (this.altura**2);
            return ind.toFixed(2);
        }

    };
};

const p1 = criapes('Kenzo','Santos',1.65,52)
console.log(p1.fala('o-o-oi'));
console.log('IMC:',p1.imc);
console.log('Nome completo:',p1.nomecompleto);
p1.nomecompleto = 'Mateus Kenzo'
console.log('1º-Nome:',p1.nome);
console.log('2º-Nome:',p1.sobre);