//
//  main.c
//  Indirect Recursion
//
//  Created by Arya soni on 27/12/24.
//

#include <stdio.h>
void funB(int n);
void funA(int n)
{
    if(n>0)
    {
        printf("%d ",n);
        funB(n-1);
    }
}
void funB(int n){
    if(n>1){
        printf("%d",n);
        funA(n/2);
    }
}
int main(int argc, const char * argv[]) {
    // insert code here...
    
    funA(20);
    return 0;
}
