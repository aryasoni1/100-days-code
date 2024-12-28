//
//  main.c
//  Power Recursion
//
//  Created by Arya soni on 27/12/24.
//

#include <stdio.h>
int power(int m,int n) //n multiplication
{
    if(n==0)
    {
        return 1;
    }
    return power(m,n-1)*m;
}

int power1(int m,int n)  //log(n) multiplication
{
    if(n==0)
    {
        return 1;
    }
    if(n%2==0)
    {
        return power1(m*m,n/2);   //uses binary exponention principle
        
    }
    return m*power1(m*m,(n-1)/2);
}
int main(int argc, const char * argv[]) {
    // insert code here...
    int r= power1(2,9);
    printf("%d",r);
    return 0;
}
