'use strict'
let home1 = document.querySelector('.home-1')
let home2 = document.querySelector('.home-2')
const home3 =   document.querySelector('.home-3')
const homeScore = document.querySelector('.home-score')
let guest1 = document.querySelector('.guest-1')
let guest2 = document.querySelector('.guest-2')
let guest3 = document.querySelector('.guest-3')
const guestScore = document.querySelector('.guest-score')
let newGame = document.querySelector('.new-game')

home1.addEventListener('click',function(){
    homeScore.innerHTML++
})

home2.addEventListener('click', function(){
    let add2 = +(homeScore.innerHTML)+2
    homeScore.innerHTML=add2

})
    
home3.addEventListener('click',function(){
    let add3 = +(homeScore.innerHTML)+3
    homeScore.innerHTML = add3
}) 
guest1.addEventListener('click',function(){
    guestScore.innerHTML++
})
guest2.addEventListener('click', function(){
    let add2 = +(guestScore.innerHTML)+2
    guestScore.innerHTML=add2

})
    
guest3.addEventListener('click',function(){
    let add3 = +(guestScore.innerHTML)+3
    guestScore.innerHTML = add3
}) 
newGame.addEventListener('click',function(){
    window.location.reload()
})





   