// Task 1
// function ifOfnum(a,b){
//     if(a+b==10 || a==10 || b==10){
//         return true;
//     }
//         return false;
// }
//       console.log(ifOfnum(9,10));
//       console.log(ifOfnum(9,5));
//       console.log(ifOfnum(9,1));  
// Task 2
// function a(b,c){
//     let d=b+c;
//     for (let i=2; i<d; i++){
//         if(d%i==0){
//             return false;
//         }
//     }
//     return true;
// }
//     console.log(a(5,7));
//     console.log(a(2,9));
// Task 3
// function a(b){
//     let cnt1 = 0;
//     let cnt2 = 1;
//     let sum = 1;
//     for (let i=1; i<b; i++){
//         sum = cnt1 + cnt2;
//         cnt1 = cnt2;
//         cnt2 = sum;
//     }
//     return sum;
// }
//     console.log(a(8))
// Task 4
// function a(b,c){
//     let cnt=1;
//     for (let i=1; i<=b; i++){
//         cnt*=c;
//     }
//     return cnt;
// }
//      console.log(a(5,5));
//      console.log(a(10,10));
// Task 5
// function a(b){
//     let FirstNum = Math.floor(b/10);
//     let NumEnd = b%10;
//     if(b > NumEnd + "" + FirstNum){
//       return true;  
//     }
// else{
//     return false
// }
// }
    //   console.log(a(27));
    //   console.log(a(43));
// Task 6
// function primeInRange(a,b){
//     for (let i=a; i<b; i++){
//         if(i%2!=0){
//             return true;
//         }
//     }
//     return false;
// }
//     console.log(primeInRange(10,15));
//     console.log(primeInRange(2,2));    
// Task 9
// function gcd(a,b){
//     let max=-999999;
//     for (let i=1; i<=b; i++){
//              if(a%i==0 && b%i==0)
//                 max = a;
//     }
//     return max;
// }
//        console.log(gcd(3,5));
//        console.log(gcd(14,18)); 
// Task 10
// function islan(a){
//     for (let i=a; i>0; i=Math.floor(i/10)){
//              if(i%10 % 2 != 0 ) {
//                 return false
//              } 
//     }
//     return true;
// }
//         console.log(islan(2468));
//         console.log(islan(1248));     
// Task 11
// function uslise(a){
//     let cnt=1;
//     for (let i=1; i<=a; i++){
//         cnt*=i;
//     }
//     return cnt;
// }
//     console.log(uslise(5));
//     console.log(uslise(4));
// Task 12
// function sumNum(a){
//     let sum=0;
//     for (let i=a; i>0; i=Math.floor(i/10)){     
//              sum+=i%10;
//     }
//     return sum;
// }
//        console.log(sumNum(12345));
//        console.log(sumNum(4359));    
// Task 14
//  Task 15
// function a(b){
//     return b*10;
// }
//     console.log(a(15));
//     console.log(a(23,5));
//     console.log(a(3));
