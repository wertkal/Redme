// Task 1
// function a(b){
//     for (var i=1; i<b; i++){
//     }
//     return i;
// }
//       console.log(a(5));
//       console.log(a(6));
//       console.log(a(1));      
// Task 2
// function a(b){
//     let cnt = "";
//     for (let i=b; i>0; i=Math.floor(i/10)){
//         cnt+=i%10;
//     }
//     for (let i=2; i<b; i++){
//        if(b%i==0)
//     }
// }
// console.log(a(101));
// console.log(a(121));
// console.log(a(131));
// Task 3
// function sum(a,b){
//      for (let i=a; i<=b; i++){

//      }
// }
//     console.log(1,10);  
// Task 4
// function sum(a,b){
//     let cnt="";
//     let sum1 = 0
//     for (let i=a; i>0; i=Math.floor(i/10)){
//         sum1 = i%10
//         if(sum1!=b){
//             cnt+=sum1
//         }
//     }
//     return cnt;
// }
//      console.log(sum(1121212,1));
//      console.log(sum(4543,4));
//      console.log(sum(1,1));
// Task 5    
// function sum(a,b){
//     let sum1 = ''
//       for (let i=a; i<=b; i++){
//         sum1+=i
//       }
//       return sum1;
// }
//       console.log(sum(1,3));
//       console.log(sum(4,5));
//       console.log(sum(10,12));
// Task 6      
// function sum(num1,char,num2){
//        if(char=="+")return num1+num2;
//        if(char=="*")return num1*num2;
//        if(char=="-")return num1-num2;
//        if(char=="/")return Math.floor(num1/num2);


// }
//       console.log(sum(1,"+",6));
//       console.log(sum(4,"*",5));
//       console.log(sum(20,"-",6));
//       console.log(sum(20,"/",5));
// Task 7
// function infConv(num,char,char1){
//     if(char=="mb" && char1=="kb")return num*1024;
//     if(char=="gb" && char1=="mb")return num*1024;
//     if(char=="bit" && char1=="kb")return Math.floor(num/8);
// }
//     console.log(infConv(1,"mb","kb"));
//     console.log(infConv(2,"gb","mb"));
//     console.log(infConv(8,"bit","kb"));
// Task 8
// function grades(a){
//     let b="Great";
//     let c="Good";
//     let d="Willdo";
//     if(a==5)return b;
//     if(a==4)return c;
//     if(a==3)return d;
// }
//     console.log(grades(5));
//     console.log(grades(4));
//     console.log(grades(3));
// Task 9
// function strLetter(a){
//     if(a==100)return "one hundred";
//     if(a==200)return "two hundred";
//     if(a==10)return "ten"
// }
//     console.log(strLetter(100));
//     console.log(strLetter(200));
//     console.log(strLetter(10));
// Task 10
// function isNum(a){
//       if(a===1 || a===2 || a===3 || a===4 || a===5 || a===6 || a===7 || a===8 || a===9){
//         return true;
//       }
//         return false;
// }
//     console.log(isNum('1'));
//     console.log(isNum("2"));
//     console.log(isNum(7));   