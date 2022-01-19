const pessoas = [
    {id: 4, nome:'yudi'},
    {id: 3, nome:'kenzo'},
    {id: 2, nome:'mateus'},
    {id: 1, nome:'santos'},
];

//const novapes = {};

//for (const pessoa of pessoas){
//    const {id} = pessoa;
//    novapes[id] = {...pessoa};
//};

const novapes = new Map();

for (const pessoa of pessoas){
    const {id} = pessoa;
    novapes.set(id, {...pessoa});
};

//for(const [idd, {id,nome}] of novapes){
//    console.log(idd,":", id, nome);
//}

for(const pessoas of novapes.keys()){
    console.log(pessoas);
}

console.log("\n");
console.log(novapes);
console.log(novapes.get(1));
