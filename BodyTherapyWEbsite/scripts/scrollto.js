let button=document.querySelector('.button')
let cennik=document.querySelector('.prices')

button.addEventListener('click',()=>{
    cennik.scrollIntoView({behavior:"smooth"})
})


// Menu
let nvbitem1=document.querySelector('.navbar-item1')
let nvbitem2=document.querySelector('.navbar-item2')
let nvbitem3=document.querySelector('.navbar-item3')
let nvbitem4=document.querySelector('.navbar-item4')
let nvbitem5=document.querySelector('.navbar-item5')
let nvbitem6=document.querySelector('.navbar-item6')

let navTrigger=document.querySelector('.navTrigger')

let feature=document.querySelector('.feature')
let opinions=document.querySelector('.opinions')
let contact=document.querySelector('.opinions')
let gallery=document.querySelector('.gallery')

nvbitem1.addEventListener('click',()=>{
    navTrigger.click()
    feature.scrollIntoView({behavior:"smooth"})
})
nvbitem2.addEventListener('click',()=>{
    navTrigger.click()
    opinions.scrollIntoView({behavior:"smooth"})
})
nvbitem3.addEventListener('click',()=>{
    navTrigger.click()
    contact.scrollIntoView({behavior:"smooth"})
})
nvbitem4.addEventListener('click',()=>{
    navTrigger.click()
    gallery.scrollIntoView({behavior:"smooth"})
})
nvbitem5.addEventListener('click',()=>{
    navTrigger.click()
    cennik.scrollIntoView({behavior:"smooth"})
})

document.querySelector('.logo').addEventListener('click',()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
