//bring in the class/id's

const container = document.querySelector(".container")
const result = document.querySelector(".result")
const minus = document.querySelector(".minus")
const empty = document.querySelector(".input")
const plus = document.querySelector(".plus")


//we're going to want the - to subtract and the + to add.
// you want result + or - empty


var result = 0;
var empty = 0;

function addition(){
  result += empty
}

function subtract(){
  resulty += empty
}


plus.addEventListener(){ 'click', (e)=>{
  addition()
  }
}

minus.addEventListener(){ 'click', (e)=>{
  subtract()
  }
}
