const n1 = [1,2,3]
const n2 = [4,5,6]
//const n3 = n1.concat(n2,[7,8,9])
const n3 = [...n1,...n2,...[7,8,9]]
console.log(n3);

