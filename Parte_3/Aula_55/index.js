//IIFE --> immediately invoked function expression

(function(idade,peso){
    console.log('Kenzo');

    function aa(n1){
        console.log(n1);
    }
    aa(70);
    console.log('idade:',idade,'peso:',peso);
})(30,50);