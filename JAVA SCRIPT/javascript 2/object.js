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

document.getElementById("submitButton").addEventListener("click", function() {
  let userInput = document.getElementById("userInputField").value;
  document.getElementById("displayArea").textContent = "You entered: " + userInput;
});