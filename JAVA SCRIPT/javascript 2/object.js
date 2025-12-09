var person={
firstName:"Elshady",
lastName:"Getahun",
age:30,
gender:"M",
addres:{
    country:"Ethiopia",
    city:"A.A",
    subCity:"Bole",
    wereda:"03",
}
}
console.log(person.firstName)
console.log(person.addres.subCity)

console.log(person)

function changeColor(){
document.getElementById("demo").style.color="red";
}
var names="abebe";
console.log(names);
console.log(names);
console.log(names.at(3));
console.log(names.toLocaleUpperCase());
console.log(names.length);

let arr=["abebe","bekele","teshome",20]
arr.push("tame")
arr.push("atekelt")


console.log(arr[5])


let newDate=new Date()
let oldDate=new Date("2012-12-3")
console.log(oldDate)

let num=[10,23,45,23,56,]

console.log(Math.round(5.9))
console.log(Math.max())

let zz=5>6? "max":"min";
console.log(zz)

let age=7;

console.log(age??"age not found")



let numbers=[12,32,43,22,56,34,23]

for(let number of numbers){
  console.log("numbers: ",number)
}

for(let key in person){
  console.log(key,person[key])
}

// switch

let month=7;
switch(month){
  case  1:
  console.log("JAN");
  break;
   case 2:
  console.log("FEB");
  break;
   case 3:
  console.log("MAR");
  break;
   case 4:
  console.log("APR");
  break;
   case 5:
  console.log("MAY");
  break;
   case 6:
  console.log("JUN");
  break;
   case 7:
  console.log("JUL");
  break;
  default:
  console.log("NOT A MONTH")
}

// while

let k=0;

while(k<10){
  console.log(k)
  k++
}

// for loop

for(let i=0;i<5;i++){
  console.log(i)
}

let classes=[
  {id :1, name:"Elshady", gender: "M", age:30,score:[100,98,90]},
  {id :2, name:"Bekele", gender: "M", age:20,score:[100,98,90]},
  {id :3, name:"Abebe", gender: "M", age:30,score:[67,98,90]},
  {id :4, name:"Helina", gender: "F", age:40,score:[90,98,90]},
  {id :5, name:"Abebe", gender: "M", age:39,score:[100,98,90]},
  {id :6, name:"Feben", gender: "F", age:25,score:[100,98,100]},
]

classes.forEach(function(classes){
  console.log(classes.name)
  classes.score.forEach(function(s){
  console.log(s)
})
})

const newDiv=document.createElement('div');
newDiv.innerText='new div from javascriop';
document.body.appendChild(newDiv)

const h1=document.getElementById('demo')

document.getElementById('btn').addEventListener('click',(e)=>{
  h1.style.color='blue';
});

$('#demo').slideUp(2000)
.slideDown(2000)

$('#spac').css('width', '200px',)
.css('height','200px')
.css('background-color','red')

$('#btn').click(function(){
  $('#spac').css('background-color','blue')
})