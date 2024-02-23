//Write a JS code to find the no of digits in a number. 

let count=0;
let n= 1457823;

while(n>0)
{
    n=parseInt(n/10);
    count++;
}

console.log(count);