//
//  main.c
//  TreeRecursion
//
//  Created by Arya soni on 26/12/24.
//

#include <stdio.h>
void fun(int n){
    if(n>0){
        printf("%d",n);
        fun(n-1);
        fun(n-1);
    }
}
int main(int argc, const char * argv[]) {
    // insert code here...
    fun(3);
    return 0;
}
