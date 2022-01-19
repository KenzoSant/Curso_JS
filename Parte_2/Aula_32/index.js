/*
let a = 'A';
let b = 'B';
let c = 'C';

const  le = [c,b,a];
[a, b, c] = le;

console.log(a, b, c);
*/

/*
const num = [10,20,30,40,50,60,70,80,90];
const [n1,n2, ...res] = num;

console.log(n1,n2);
console.log(res); //pega td que eu não usei
 */

/*
//            0  1  2  3  4  5  6  7  8
const num = [10,20,30,40,50,60,70,80,90];
const [n0,n1,,n3,,n5] = num; // (, ,) pula um numero

console.log(n0,n1,n3,n5);
*/


//               0        1        2
//             0 1 2    0 1 2    0 1 2  
const num = [ [1,2,3], [4,5,6], [7,8,9] ];


console.log(num[1][2]);