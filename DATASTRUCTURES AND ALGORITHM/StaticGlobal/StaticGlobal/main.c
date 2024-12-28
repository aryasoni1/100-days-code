//
//  main.c
//  StaticGlobal
//
//  Created by Arya soni on 26/12/24.
//

#include <stdio.h>
int x=0;
int fun(int n){
//static int x=0;
    if(n>0)
    {
        x++;
        return fun(n-1)+x; //5+5+5+5+5=25
    }
    return 0;
}
int main(int argc, const char * argv[]) {
    // insert code here...
    int r;
    r=fun(5);
    printf("%d\n",r);
    
    r=fun(5);
    printf("%d\n",r);
    return 0;
}
