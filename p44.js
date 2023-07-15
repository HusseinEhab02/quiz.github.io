let scoreEl = document.querySelector(".scorevalue")
let submitbtnEl = document.querySelector(".submit")
let headerEL = document.querySelector(".question")
let numone = Math.floor(Math.random()*10)
let numtwo = Math.floor(Math.random()*10)
let correctanswer = numone * numtwo
let formEL = document.querySelector(".form")
let inp = document.querySelector("input")
// 

headerEL.innerText = `What is ${numone} multiply ${numtwo} ?`

let score = JSON.parse(localStorage.getItem("scorekey"))

scoreEl.innerText=score
formEL.addEventListener("submit" , ()=>{
    
    const useranswer = +inp.value
    if(useranswer === correctanswer){
        score++
        upd()
        
    }
    else{
        score--
        upd()
    }
})

function upd(){
    localStorage.setItem("scorekey" , JSON.stringify(score))
}