// Task 1
// function a(b){
//     let cnt=0;
//     for(let i=b; i>0; i=Math.floor(i/10)){
//         if(i%10%2==0){
//             cnt++;
//         }
//     }
//     return cnt;
// }
//        console.log(a(123456));
//        console.log(a(13579));
//        console.log(a(20));
// Task 2
// function a(b){
//     for (let i=b; i>0; i=Math.floor(i/10)){
//         if(i%10==7){
//             return "Boom"
//         }
//     }
//     return "There is no 7 in the argument"
// }
//       console.log(a(1237));
//       console.log(a(56));
// Task 3
// function a(b){
//     let cnt=0;
//       while(b>=10){
//         for (let i=b; i>0; i=Math.floor(i/10)){
//             cnt+=i%10;
            
//         }
//         b=cnt;
//         cnt=0;
        
//     }
//     return b;
// }
//          console.log(a(38));
//          console.log(a(0));        
// Task 4        
// function sum(a){
//     let cnt1=1;
//     for (let i=2; i<=a; i++){
//         cnt1+=i**3;
//     }
//     return cnt1;
// }
//       console.log(sum(3));
//       console.log(sum(7));
//       console.log(sum(9));
// Task 5
// function sum(a){
//     let cnt = ""
//     for(let i=a;i>0; i=Math.floor(i/10)){
//         cnt+=i%10;
//     }
//     return cnt==a;
// }
//     console.log(sum(7227));
//     console.log(sum(2331));
// Task 6
// function max(a){
//       let max=-999999;
//       for (let i=a; i>0; i=Math.floor(i/10)){
//         if(i%10>max){
//             max=i%10;
//         }
//       }
//       return max;
// }
//        console.log(max(7132));
//        console.log(max(811));
//        console.log(max(897));
// Task 7
// function fib(a){
//     let d=1;
//     let c=1;
//     let b=2;
//     for (let i=0; i<=a; i++){
//         b = d - c;
//         d = c;
//         c = b;
        
//     }
//     return b;
// }
//         console.log(fib(3));
//         console.log(fib(7));
//         console.log(fib(77));
// Task 8

// function sumOfEvenDigits(a){
//     let cnt=0;
//     for (let i=a; i>0; i=Math.floor(i/10))
//          if (i%2==0){
//             cnt+=i%10;
//          }
//          else{
//             cnt = "No even digits"
//          }
//          return cnt;
// }
//          console.log(sumOfEvenDigits(12345));
//          console.log(sumOfEvenDigits(85348));
//          console.log(sumOfEvenDigits(13579));       
// Task 10
// function factorial(a){
//     let cnt=1; 
//     for (let i=1; i<=a; i++){
//         cnt*=i;
//     }
//     return cnt;
// }
//         console.log(factorial(5));
//         console.log(factorial(4));
//         console.log(factorial(3));