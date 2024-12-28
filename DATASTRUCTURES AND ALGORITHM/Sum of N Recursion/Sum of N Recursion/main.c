//
//  main.c
//  Sum of N Recursion
//
//  Created by Arya soni on 27/12/24.
//

#include <stdio.h>
int sum(int n)
{
    if(n==0)
    {
        return 0;
    }
    return sum(n-1)+n;
}
int Isum(int n)
{
    int s=0;
    int i;
    for(i=1;i<=n;i++)
    {
        s=s+i;
    }
    return s;
}
int main(int argc, const char * argv[]) {
    // insert code here...
    int r= sum(5);
    printf("%d",r);
    return 0;
}
