const obj ={name:"Manish",age:"25"};
console.log (Object.keys(obj)[0],":"," ", Object.values(obj)[0])

console.log (Object.keys(obj)[0])
let a=6,b=5,c=4;

let arr=[1,"man"]

for (i=0;i<Object.keys(obj).length;i++){
console.log("The keys are" +Object.keys(obj)[i])

}
// let oo=Objct();
 const Average=(x,y,z)=>{
let fvalue=x
let svalue=y
let lvalue=z
return (fvalue+svalue+lvalue)/3
    
}

const f=Average(c,a,b);
//  let g=console.log("Passing in sequence a,b and c is :"+e);
console.log("Passing in sequence c,a and b is :"+ Average(a,b,c));

console.error("this is error")
console.log(obj);
console.log(arr)
console.log(arr.indexOf ("man"))
//for in loop in js
for (a in obj){
    console.log(obj[a])
    console.log(a)
    }
// for of loop
// for (a of "2444"){
//     console.log(a);
// }
const dd ="Manish";
let girl1=`Samjhana`;

function Name(values){
    return values;
}

for (let i=0;i<dd.length;i++){
    console.log(dd[i]);
}

console.log(`${girl1}\n mama and `)
console.log(`${girl1}\r mama and `)
console.log(`${girl1}\t mama and `)
console.log(`${girl1.toLocaleUpperCase()}\r mama and `)

