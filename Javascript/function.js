function addNums(a,b){
    var c=a+b;
    console.log(c);

    
}
addNums(15,20)
addNums(150,20)
addNums(15,200)
addNums(151,20)
// console.log(c);
// var srf funtion me kaamkarta h

const getAvg =function (m1,m2,m3) {
    const avg =(m1+m2+m3)/3;
    console.log(avg);
    
}
getAvg(25,12,25)



// use karenge value ko bhr khi use karne ke liye
const getAvge =function (m1,m2,m3) {
    const avg =(m1+m2+m3)/3;
    // console.log(avg);/
    return avg;
    
}
const result =getAvge(75,58,46);
console.log(result);






const factorial =(n) => {
    let f=1;
    for(let i=2; i<=n;i++){
        f=f*i;
    }
    return f;

}
const ans=factorial(5);
console.log(ans);

// create a function to check if a no. is even or odd
const checkEven = (n) =>{
    if(n % 2 === 0){
        return 'even'
    }else{
        return 'odd'
    }
}
const res=checkEven(7);
console.log(res);

// create a function to take time of the day greet according
// time 'morning noon afternoon evening night'
const greet=(time) => {
    if(time==='morning'){
        return 'Good Morning'
    }else if(time==='noon'){
        return 'Good noon'
    }else if (time==='evening'){
        return 'Good Evening'
    }else if (time==='night'){
        return 'Good Night'
    }else if(time==='Afternoon'){
        return 'Good Afternoon'
    }
}
const grt=greet('morning');
console.log(grt);


// create a function to check if a no. is prime or not
