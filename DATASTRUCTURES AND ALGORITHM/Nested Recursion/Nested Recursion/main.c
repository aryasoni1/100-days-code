//
//  main.c
//  Nested Recursion
//
//  Created by Arya soni on 27/12/24.
//

#include <stdio.h>
int fun(int n)
{
    if(n>100){
        return n-10;
        
    }
    return fun(fun(n+11));
}
int main(int argc, const char * argv[]) {
    // insert code here...
    int r=fun(95);
    printf("%d\n",r);
    return 0;
}
