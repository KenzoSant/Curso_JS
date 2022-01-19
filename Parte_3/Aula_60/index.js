function rec (max){
    console.log(max);
    if(max >= 10) return;
    max++;
    rec(max)
}
rec(0)