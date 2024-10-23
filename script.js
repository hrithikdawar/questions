// q:-1
// let n=3;
// let m=4;
//  let sum= n+m;
// console.log(sum)

// q:-2

// let n=3;
// let m=4;
//  let sum= n+m;
// console.log(`sum of ${n} + ${m} = ${sum}`)



// q:-3
// let n=+prompt("enter number");
// let m=+prompt("enter number");
//  let sum= n+m;
// console.log(`sum of ${n} + ${m} = ${sum}`)



// q:-4
// let n=prompt("enter your name");
// let m=+prompt("enter your ag");

// console.log(`hello ${n} you are ${m}  years old`)



// q:-5
// let n=+prompt("enter number");
// let m=+prompt("enter number");

// console.log(` n is ${n} m is ${m}  `)

// let x=n+m
// n=x-n;
// m=x-m
// console.log(` n is ${n} m is ${m}  `)
// part -2
// let n=+prompt("enter number");
// let m=+prompt("enter number");

// console.log(` n is ${n} m is ${m}  `)

// n=m+n;// 2+3=5
// m=n-m;// 5-2=3
// n=n-m;// 5-3=2


// console.log(` n is ${n} m is ${m}  `)
// q:-6

// let  length=+prompt("enter number");
// let  width=+prompt("enter number");

// let area=length*width
// console.log(`area of rectangle is ${area}`)


// let perimeter=(length+width)/2

// console.log(`perimeter of rectangle is ${perimeter}`) 

// q:8
// let p=+prompt("enter number");
// let r =+prompt("enter number");
// let n=+prompt("enter number");
// let t=+prompt("enter number");
//  a= p *(1+(r/n))**t

//  console.log(a)


// q:9

// let a=+prompt("enter number");
// let b =+prompt("enter number");
// let c=+prompt("enter number");

// let s =(a+b+c)/2
// console.log(`semi perimeter of triangle is ${s}`)

// let h=(s*(s-a)*(s-b)*(s-c))**0.5

// console.log(h)


// q:11

// let r=+prompt("enter number");

// let a=4*3.14*r*r;

// console.log(`surface area of sphere is ${a}`)

// let r=+prompt("enter number");

// let c=2*3.14*r

// console.log(`circumference of circle is ${c}`)

// let area=3.14*r*r
// console.log(`area of circle is ${area}`)


// q:12
// let n=+prompt("enter number");
// let m=+prompt("enter number");

// if(n>m){
//     console.log(`${n} is greater number`)
// }
// else{
//     console.log(`${m} is greater number`)
// }


// q:13
// let x=prompt("male/female");

// if (x==="male"){
//     console.log(`good morning sir`)
// }
// else{
//     console.log("good morning mam")
// }

// q:14

// let x=prompt("male/female");

// if (x==="male"){
//     console.log(`good morning sir`)
// }
// else if(x==="female"){
//     console.log("good morning mam")
// }
// else{
//     console.log("invalid input")
// }



// q:15

// let n=+prompt("enter number");


// if(n>0 && n%2==0){
//     console.log("even number ")
// }
// else 
// {
//     console.log("odd number ")
// }

// q:16

// let n=prompt("enter your name");
// let m=+prompt("enter your age");

// if(m>0 && m>=18 ){
//     console.log(` hello ${n} you are a valid voter`)
// }
// else{
//     console.log(` Sorry ${n} you cannot caste  a vote`)
// }

// part-2
// let n=prompt("enter your name");
// let m=+prompt("enter your age");

// if(m>0 && m>=18 ){
//     console.log(` hello ${n} you are a valid voter`)
// }

// else{
//     let age = 18-m;
//     console.log(` Sorry ${n} you cannot caste  a vote after ${age} year you will be eligible`)
// }

 
// q:17

// let m=+prompt("enter number");

// if(m===1 ){
//     console.log("mon ")
// }
// else if (m===2 ){
//     console.log("tues ")
// }
// else if (m===3 ){
//     console.log("wed ")
// }
// else if (m===4 ){
//     console.log("thus ")
// }
// else if (m===5 ){
//     console.log(" fri ")
// }
// else if (m===6 ){
//     console.log("sat ")
// }
// else if (m===7 ){
//     console.log("sun ")
// }
// else{
 
//     console.log(`invalid input`)
// }

// q:18

// let m=+prompt("enter your age");
// let n=+prompt("enter your age");
// let o=+prompt("enter your age");

// if(m>=n&& m>=o){
//     console.log(` in ${m }  ${n}  ${o } greater number is ${m}`)
// }
// else if(n>=m&& n>=o){
//     console.log(` in ${m }  ${n}  ${o } greater number is ${n}`)
// }
// else(o>=n&& o>=m)
//  {
//     console.log(` in ${m }  ${n}  ${o } greater number is ${o}`)
// }
// q:19

// let m=prompt("enter Alphabet");
// if(  m==="a"|| m==="e"||m==="i" ||m==="o"||m==="u"){

//     console.log("vowel")
// }
// else{
//     console.log("consonant ")
// }

// q:23

// let m=prompt("enter Alphabet");
// for(  i=1 ; i<=m ; i++){
//     console.log("hlw", i)
// }


// q:24
// let m=+prompt("enter num");
// for(let i=1; i<=m; i++){
//         console.log(i)
//     }
    


    
// q:25

// q=25
// let n=+prompt("enter number");
// for(let i=n ; i<=n; i--){
//     console.log(i)
//     } remaining


// q:26
// let m=+prompt("enter num");
// for(let i=1; i<=10; i++){
//     let f=i*m;
//         console.log(`${m}*${i}=${f}`)
//     }
    


     
// q=27
// function rtk () {
//     let n=+prompt("enter number");
//     for(let i=1; i<=n; i++){
//         n+=i;
//     }
//       return n; 
//       }
// rtk()



// q=;28 factorial
// let n=+prompt("enter number");
//  function factorial(n){
//     let ans=1;
//     if (n===0)
//         return 1;

//     for ( let i=2; i<=n; i++)
//         ans=ans*i;
// return ans;
//  }
//  console.log(factorial(n))

// q:29

// const arr=[2,4,6,7,8,0,8,77,66,544,56,67,78,95,97]
// const onum=arr.filter((n)=>n%2===1);
// {
//     console.log(onum)
// }

// const eum=arr.filter((n)=>n %2 ===0);
// {
//     console.log(eum)
// }
// pending



// q:30

// const x =+prompt ("number")
// let add = 0;
// for(i=1; i<=x; i++){
//     if(x%i==0){
//         console.log(i)
//         add=add+i;
    
//     }

// }
// console.log(add)

// let a=0;
// const arr=[2,4,6,7,9]
// for(let i=0;i<=arr.length-1;i++){
//     if(arr[i]%2==0){
// a=a+arr[i];
//     }
//     else{
//         console.log(arr[i])
//     }
// }
// console.log(a)

