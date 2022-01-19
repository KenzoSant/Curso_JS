function* ge(){
    yield "1"
    yield "2"
    yield "3"
}
const a = ge()

/*
console.log(a.next().value);
console.log(a.next().value);
*/

for (let valor of a){
    console.log(valor);
}


console.log("\n---------------\n");
//-----------------------------------------------------

function* cont(){
    let i = 0 
    while(true){
        yield i 
        i++
    }
}
const b = cont()
console.log(b.next().value);
console.log(b.next().value);
console.log(b.next().value);
console.log(b.next().value);

console.log("\n---------------\n");
//-----------------------------------------------------

function* n1(){
    yield 10
    yield 20
    yield 30
}
function* n2(){
    yield* n1()
    yield 40
    yield 40
}
const c = n2()
for(let val of c){
    console.log(val);
}

console.log("\n---------------\n");
//-----------------------------------------------------

function* n3(){
    yield function(){
        console.log("Kenzo");
    }
    yield function(){
        console.log("Mateus");
    }
}
const d = n3()
const f1 = d.next().value
const f2 = d.next().value

f1()
f2()