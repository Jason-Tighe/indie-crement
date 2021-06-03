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



plus.addEventListener( 'click', (e)=>{
  addition()
})

minus.addEventListener('click', (e)=>{
  subtract()
})
