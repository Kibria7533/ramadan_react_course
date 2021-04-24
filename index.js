// variables,let,var,const,scope
// scope
//var function scope
//let ,const block scope

// if(true){
//     var a="hi";
//     let b="bye"
// }

// console.log(b)

// function ab(){
//     var c=7;
//     for(var i=0;i<7;i++){
//         console.log(i)
//     }
//     console.log(i,'out side')
// }
// console.log(c)
// ab();

// let a=7;
// console.log("hi")
// var x;

// data types
//primitive and ref type------mutabilty
//Number,String,undefined,Null,Symbol,BigInt=primitive
//Array,Object,function
// var a=7;
// a=9.8;

//  const obj1={a:"asad",b:"barik"}
// var obj2={...obj1};
// obj2.a="rana";
// console.log(obj2,obj1);
// var a="i am not good"
// console.log(typeof a)
// var a=null;
// console.log(2**53-1)
// var a=Symbol('k');
// var b=Symbol('k')
// console.log(a==b)

//  var a=[1,3,4,"a",{d:"f"}];
// for(let i=0;i<a.length;i++){
//     console.log(a[i])
// }


// const {a:e,b}=obj1;
// console.log(e,b);
// const [c,d,...s]=a;
// console.log(s)
//instanceof,typeof,arithmatic(+,-,/,%,++,--,*,**),logical operator(&&,||,!),bitwise operator(|,&,`),string oparator(+),comparision or relational operator(==,!=,<,>,=<,===,!==),assignment operator(=,+=,-=,bla,bla)

// function,switch,closer,callback,if-else
// var sumon={age:"22"};
// var asif={...sumon};
// asif.age="20"

// console.log(sumon,asif)
// 2=10;
// 3=11;
//re=11
// var a=3;
// var b=3;

// console.log(~a);

// var a="hi";
// var b="bye";
// var c=2;
// var d=4;
// var e=c+d+a+b;
// console.log(e);

// var a=2;
// var b="7";
// if(a>==b){
//     console.log("its true")
// }
// else{
//     console.log("its false")
// }
//problem hoice

// var one=24;
// // var one=one+45;
//  one *= 2;
// console.log(one)

// switch("said"){
//     case "said":
//         console.log("one");
//         break;
//     case "said":
//         console.log("two");
//         break;
//     case 3:
//      console.log("three");
//          break;


//          default:
//             console.log("last");


// }

// const a= ()=>{
    
//    return 9;
  
// }

// console.log(a())

// msg =()=>{
//     console.log('added')
// }

// add=(a,b,msg)=>{
//     console.log(a+b);
//     msg();
// }


// add(7,8,msg)
// a=()=>{
//     console.log('called')
// }

// setTimeout(a,2000)


// let  a=[1,2];

// console.log(a instanceof Array)
// map,reduce,filter,sort,join,reverse,,pop,push,shift,unshift,,includes,indexOf,lastIndexOf,forEach,concate,splice,slice,fill,find ,flat,isArray

// const elements = Array(9).fill(0)

// console.log(elements)
// let i;
// for(i=0;i<=10;i++){

//     console.log(i)

// }
// let i=0;
// while(i<10){
// console.log(i);
// i++;
// }
// let i=0
// do{
// console.log('ok')
// i++;

// }while(i!=10)



// for (let item in barr){
//     console.log(barr[item].a)
// }

// arr.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

// sum=()=>{
//     console.log('hii')
// }

// sum();



// const num=barr.map(item=>
//     (
//        {...item,
//         "d":"t"} 

//     )
//     )
// console.log(num)
// arr.map(call)

// function call(item,index,arr){
//     console.log(item,index)
// }

const arr=[1,8,3,4,5,6];
const barr=[
    {a:"b",b:"c"},
    {c:"d",d:"e"}
];
const up=arr.filter(item=>({"f":"i"}))

console.log(up)









