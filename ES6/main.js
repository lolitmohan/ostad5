// 2=> Fast ES6 Programing
// console.log("Hello Es6");

// "use strict"
// function MyName(){
//    let Name= "Lolit"
//    console.log(Name);
// }
// MyName()

/*speret Oparetor
let des=["Lolit","Mohan"];
let city=[...des,"thakurgaon","Dholar-Hat"];
console.log(city);
*/

/*/ WithOut Spreate Operator
let PoorContry=["Bangladesh", "Sirilanka"];
let RichContry=["America", "Canada","Italy"];

RichContry.push(PoorContry);
console.log(RichContry);
*/

/* Rest Parameter 
function show(a,b,...number){
    let sum=0;
    let total=a+b;
    for(let i of number ){
        sum=sum+i;
    }
    console.log(sum);
    console.log(total);
}
show(1,2,3,4,5,6)
*/

/* Daynamic Function 
let Myfun= function(namevalue){
    return namevalue;
}
let Name=Myfun("Lolit Mohan");
console.log(Name);
*/

//Redicliyear Kora jay Na let/const variabol diye

// let Age="Lolit";
// let Age="Mohan";
// console.log(Name);
// const Name="Lolit";
// const Name="Mohan";
// console.log(Name);

//Redicliyear Kora jay var variabol diye
// var Name="Lolit";
// var Name="Mohan";
// console.log(Name);


/*for Of Loop Using array
let city=["Thakurgaon","Ruhia","BaliyaDanging","Horipur","Nagkmorod"];
for(let items of city){
    console.log(items);
}
*/

/*for in loop useing Object
let Person={fastName:"Lolit",lastName:"Mohan",age:23,city:"Thakurgaon",mobile:"01738908541"}
for(let props in Person){
    // console.log(props);
    console.log(props+"= "+Person[props]);
}
*/

/*for loop
for(i=1;i<=2;i++){
    console.log("lolit");
}
*/

/*if else Decision Making
let array= ["20","10","30","50"];
let array1= ["lolit","mohan","barman","chandra"];
console.log(array);

if(20>10 && 20>30 && 20>50){
    console.log(20);
}
else if(10>20 && 10>30 && 10>50){
    console.log(10);
}
else if(30>10 && 30>20 && 30>50){
    console.log(30);
}
else {
    console.log(50);
}
*/

/*simple function
function Myfun(){
    let a=20;
    let b=10;
    let sum=a+b;
    console.log(sum);
}
Myfun();
*/

/*Parameterized function
function Myfun(x,y){
    var total=x+y;
    console.log(total);
}
Myfun(5,8);
*/

/* Anonymous function
let fun=function(...name){
    console.log(name)
}
fun(1,2,3,4,5,6);
*/

// arrow Function
let arrowfun=()=>{
    let a=20;
    let b=40;
    let z=a+b;
    return z;
    // console.log(a+b);
}
console.log(arrowfun())

// let arrowfun=(x)=>{
//     console.log(x);
// }
// arrowfun("My Name is Arrow Fun");

// let arrowfun=(...Name)=>{
//     let name=Name;
//     console.log(name);
// }
// arrowfun("kamal","korim","jamal","hakim","joss","malek","mojid");

/*/Multidaimensonal arrow
let Bangladesh=['Dhaka','Rongpur','Thakurgaon']
let India=['Kolkata','Shiliguri','Mombai']
let Pakisthan=['Islamabad','Koyeta','Gilgit']
let asia=[Bangladesh,India,Pakisthan];
console.log(asia)
for(let item of asia){
    console.log(item[0]);
}
*/

/*/ //Array De-Structuring
// let Bangladesh=['Dhaka','Rongpur','Thakurgaon']
// let [,,a]=Bangladesh;
// console.log(a);
*/


