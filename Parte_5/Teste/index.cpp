#include <stdio.h>

int main(){

    int n1, n2,n3, i=0,c=0,c1=0;

    
    for(i=0; i<=2; i++){
        printf("Digite o primeiro numero: ");
        scanf("%d", &n1);
        printf("Digite o segundo numero: ");
        scanf("%d", &n2);
        n3= (n1+n2)/2;
        printf("Media:%0.2f\n",(float)n3);
        if(n3>8){
            c=c+1;
            printf("Acumulador positivo:%i\n",c);
        }
        else{
            c1=c1+1;
            printf("Acumulador negativo:%i\n",c1);
        }
    }
    if(c>c1){
        printf("Positivo para Operar");
    }
    else{
        printf("Negativo para Operar");
    }
    return 0;
}