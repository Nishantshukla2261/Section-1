for(let i = 0;i<10; i++){
    console.log(i);

    
}

// /wap to print all even number between 50to 100
for(let i=50;i<=100;i++){
    if(i %2==0){
        console.log(i);
        
    }
}
// wap to print all no. divisible by 7 btw 30 to 99
for(let i =30; i<=99;i++){
    if(i%7 === 0){
        console.log(i);
        
    }
}
// white loop password dalte raho rukega nhi

console.log('While  loop');

let b=10;
while(b<20){
    console.log(b);
    b++
    
}
// do while condition baad me check kaerega ek baar run pahle ho jayega

console.log('Do while loop');

let c=10;
do{
    console.log(c);
    
}while(c>20)


let d=10;
do{
    console.log(d);
    d++;
    
}while(d<20)

//  wap to check if a no.is prime
const num1 = 17;
let prime=true;
for(let i=2; i<num1/2;i++){
    if(num1 % i === 0){
        console.log('not prime');
        prime=false;
        break;
        
    }
}
if(prime) console.log('prime');

//  wap 

// WAP to check if number is a perfect square. ** means power
const num = 25;
const root = num ** 0.5;  
console.log(root);

console.log(5 ** 2);
if (Number.isInteger(root)) {
    console.log('Perfect square');
} else {
    console.log('Not a perfect square');
}
