window.addEventListener('load',()=>{
    
    document.querySelector('.loader4').classList.add('loader--hidden')
    document.querySelector('.loader4').classList.remove('loader--show')
})
window.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('.loader4').classList.add('loader--show')
    document.querySelector('.loader4').classList.remove('loader--hidden')
    
})