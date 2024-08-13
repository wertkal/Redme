// function nme(num) {
//     for(let i=num;i>0;i=Math.floor(i/10)){
//         for(let j=num;j>i;j=Math.floor(j/10)){
//             if(i%10==j%10)
//                 return false 
//         }
//     }
//     return true
// }console.log(nme(123))

// function nme(num1,num2,num3,num4)
// {
//  let g=num1*100;
//  let g1=num3*100;
//  let g2=Math.floor(((g1+num4)-(g+num2))/100);
//  return g2;
// }
// console.log(nme(1,70,3,80))

// function nme(num1,num2,num3) {
//    let g=0;
//    let r=0;
//    if(num1>0 && num2>0 && num3>0){
//        g=(num1*num1)+" "+(num2*num2)+" "+(num3*num3);
//        return g;
//    }
//    else{
//        r=(num1*(-1))+" "+(num2*(-1))+" "+(num3*(-1));
//        return r;
//    }
// }
// console.log(nme(3,-2,8))

// function nme(num1) {
//    let g=0;
//    let g1="next:";
//    let r1="prev:";
//    let r=0;
//    if(num1%2==0){
//        g=g1+(num1+2) + " "+ r1 +(num1-2);
//        return g;
//    }
//    else{
//        r=g1+(num1+1 )+ " " + r1+(num1-1);
//        return r;
//    }
// }
// console.log(nme(3))

// function nme(num1) {
//    if(num1>0){
       
//        return num1+1;
//    }
//    else if(num1<0){
//        return num1-2;
//    }
//    else
//    return 10;
// }
// console.log(nme(0))

// function leastCommonMultiple(num,num2) {
//    for (let i = 2;i <= num*num2;i++) {
//        if(i%num==0 && i%num2==0)
//        {
//            return i;
//        }
           
//    }
// }
// console.log(leastCommonMultiple(3,8));

// function nme(num) {
//  let g=0;
//    for(let i=1;i<num;i++)
//    {
//        if(num%i==0){
//            g=g+i;}
//    }
//    if(num==g){
//        return true;
//    }
   
//        return false
   
// }
// console.log(nme(28))

// function leastCommonMultiple(num,num2) {
//    for (let i = 2;i <= num*num2;i++) {
//        if(i%num==0 && i%num2==0)
//        {
//            return i;
//        }
           
//    }
// }
// console.log(leastCommonMultiple(3,8));