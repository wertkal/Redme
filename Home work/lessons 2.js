// Task 4
// function numOfour(number){
//        let cnt=0;
//        for (let i=1; i<=number; i++){
//         cnt+=i;
//        }
//        return cnt;
// }
//     console.log(numOfour(4));
//     console.log(numOfour(13));
//     console.log(numOfour(600));
// Task 9
// function numOfour(number){
//          let cnt=0;
//          for (let i=1; i<=number ; i++){
//             cnt+=i;
// }
//            return cnt;
// }
//         console.log(numOfour(5));
//         console.log(numOfour(12));
// Task 10
// function sum(a){
//     let cnt = 1
//     for(let i=a;i>0; i=Math.floor(i/10)){
//         cnt*=i%10
//     }
//     return cnt
// }
// console.log(sum(713));
// console.log(sum(897));
// console.log(sum(811));
// Tast 11
// function sum(a){
//     let cnt = ""
//     for(let i=a;i>0; i=Math.floor(i/10)){
//         cnt+=i%10
//     }
//     return cnt==a
// }
// console.log(sum(7227));
// Task 7
// function num1(number){
// let number1=number/1000;
// let number2=number/100%10;
// let number3=number/10%10;
// let number4=number%10;
// if(number1>number2 && number1>number3 && number1>number4)
//     return(Math.floor(number1));
// else if(number2>number1 && number2>number3 && number2>number4)
//     return(Math.floor(number2));
// else if(number3>number1 && number3>number2 && number3>number4)
//     return(Math.floor(number3));
// else
//     return(Math.floor(number4));
// }
//     console.log(num1(5732));
// Task 1
// function longestTime(h, m, s,) {
//     if(h*3600 > m*60 && h*3600 > s){
//     return h;
//     }
//     else if(m*60 > h*3600 && m*60 > s){
//     return m;
//     }
//     else{
//     return s;
//     }
// }
//     console.log(longestTime(1, 59, 3598));
//     console.log(longestTime(2, 300, 15000));
//     console.log(longestTime(15, 955, 59400));
// Task 5
// function Threenum(a,b,c){
//     if(a==b){
//         return 3;
//     }
//     else if(a==c){
//         return 2;   
//     }
//     else {
//         return 1;
//     }
// }
//     console.log(Threenum(5,5,10));
// Task 8
// function num1(one){
// let num1=one/1000;
// let num2=one/100%10;
// let num3=pne/10%10;
// let num4=one%10;
// if(num1>num2 && num1>num3 && num1>num4 && num2<num3 && num2<num4){
//     return(Math.floor(max:num1));
//     return(Math.floor(min:num2));
// }
// else if(num2>num1 && num2>num3 && num2>num4 && num1<num3 && num1<num4){
//     return(Math.floor(max:num2));
//     return(Math.floor(min:num1));
// }
// else if(num3>num1 && num3>num2 && num3>num4){
//     return(Math.floor(max:num3));
//     return(Math.floor(min:num4));
// }
// else {
//     return(Math.floor(max:num4));
//     return(Math.floor(min:arguments,00];-]num3))
// }
// }
//     console.log(num1(5732));
// Task 6
// function num(name,first){
//     let cnt=0, res=0;
//     if(name>first){
//         res = name;
//         name = first;
//         first = res;
//     }
//     for(let i=name; i<=first; i++){
//         if(i%2==0)
//             cnt+=i;
//     }
//     return cnt;
// }
//     console.log(num(-5,-3));
//     console.log(num(-1,-1));
//     console.log(num(-14,-18));
    // Task 14
    // function a(b){
    //      let cnt=1;
    //      for(let i=1; i<=b; i++){
    //         cnt*=i;
    //      }
    //      return cnt;
    // }

    //     console.log(a(5));
    //  Task 13   
    function a(b){
        for (let i=2; i<b; i++){
            if(b%i==0){
                return false;
            }
        }
        return true;
    }
        console.log(a(2));
        console.log(a(12));
        
    // Task 15
    // function comentes(num){
    //     for(let i=num; i>0; i=Math.floor(i/10)){
                             
    //     }
    // }
        