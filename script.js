
const container = document.querySelector(".container")


const result = document.querySelector(".result")
const minus = document.querySelector(".minus")
const plus = document.querySelector(".plus")


const total = document.getElementById("bigPicture")
const sub = document.getElementById("negative")
const add = document.getElementById("positive")

// var test = document.getElementById("test")
var val = parseInt(document.querySelector('input.test').value, 10);



var x = 0;



function addition(){
  x+= val
  result.innerHTML = x
  if(x >= 0){
    result.style.color = "white"
  }
}


function subtract(){
  x-= val
  result.innerHTML = x
  if(x < 0){
    result.style.color = "red"
  }
}




plus.addEventListener('mouseover', (e)=>{
  plus.style.background = "#d3f99e"
  plus.style.color = "black"
})

plus.addEventListener('mouseout', (e)=>{
  plus.style.background = "#84f65c"
  plus.style.color = "white"
})

minus.addEventListener('mouseover', (e)=>{
  minus.style.background = "#fb8b8b"
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
