//
//  main.c
//  Factorial Recursion
//
//  Created by Arya soni on 27/12/24.
//

#include <stdio.h>
int fact(int n)
{
    if(n==0)
    {
        return 1;
    }
    return fact(n-1)*n;
}

int ifact(int n)
{
    int f=1;
    int i=1;
    for(;i<=n;i++)
    {
        f=f*i;
    }
    return f;
}
int main(int argc, const char * argv[]) {
    // insert code here...
    int r = fact(5);
    printf("%d",r);
    return 0;
}
