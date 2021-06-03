//bring in the class/id's

const container = document.querySelector(".container")


const result = document.querySelector(".result")
const minus = document.querySelector(".minus")
const input = document.querySelector(".input")
const plus = document.querySelector(".plus")


const total = document.getElementById("bigPicture")
const sub = document.getElementById("negative")
const box = parseInt(document.getElementById("space").value,10)
const add = document.getElementById("positive")

const test = parseInt(document.getElementById("test").value,10)
//we're going to want the - to subtract and the + to add.
// you want result + or - empty
//i'm having an issue with the last part.



var x = 0;


function addition(){
  x++
  input.innerHTML = x;
  result.innerHTML = x
  if(x >= 0){
    result.style.color = "white"
  }
}

function subtract(){
  x--
  input.innerHTML = x;
  result.innerHTML = x
  if(x < 0){
    result.style.color = "red"
  }
}




plus.addEventListener('mouseover', (e)=>{
  plus.style.background = "#f9dc9e"
  plus.style.color = "black"
})

plus.addEventListener('mouseout', (e)=>{
  plus.style.background = "#84f65c"
  plus.style.color = "white"
})

minus.addEventListener('mouseover', (e)=>{
  minus.style.background = "#f9dc9e"
  minus.style.color = "black"
})

minus.addEventListener('mouseout', (e)=>{
  minus.style.background = "#f25b40"
  minus.style.color = "white"
})

plus.addEventListener( 'click', (e)=>{
  addition()
})

minus.addEventListener('click', (e)=>{
  subtract()
})
