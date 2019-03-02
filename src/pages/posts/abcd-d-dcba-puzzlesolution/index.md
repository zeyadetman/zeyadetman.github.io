---
title: ABCD * D = DCBA (Puzzle+Solution)
date: "2017-04-07"
author: zeyadetman
categories: math
comments: true
layout: post
---

<strong>The Puzzle</strong>

"ABCD \* D = DCBA", Replace every character with a number to make the equation mathematically right.

<strong>The Solution using brute-force algorithm</strong>

```cpp
#include<bits/stdc++.h>
using namespace std;
int main(){
    for(int a=0;a<=9;a++){
        for(int b=0;b<=9;b++)if(a!=b){
            for(int c=0;c<=9;c++)if(a!=c && b!=c){
                for(int d=0;d<=9;d++)if(a!=d && b!=d && c!=d){
                    if((a*1000+b*100+c*10+d)*d == (d*1000+c*100+b\*10+a))
                        return cout<<"abcd\n"<<a<<b<<c<<d,0;
                }
            }
        }
    }
    return 0;
}
```

<em><strong>The final answer is 1089.</strong></em>
