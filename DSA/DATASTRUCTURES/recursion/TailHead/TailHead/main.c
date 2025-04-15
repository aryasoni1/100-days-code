//
//  main.c
//  Tailhead
//
//  Created by Arya soni on 28/12/24.
//

#include <stdio.h>
void fun(int n)
{
    if(n>0)
    {
        //fun(n-1);//head recursion
        printf("%d",n);
        fun(n-1);//tail recursion
    }
}
int main(int argc, const char * argv[]) {
    // insert code here...
    int x=3;
    fun(x);
    return 0;
}
