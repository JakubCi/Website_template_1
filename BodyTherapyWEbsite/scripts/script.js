function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


const slides=document.querySelectorAll(".slide")
var counter=0;

slides.forEach(
    (slide, index)=>{
        slide.style.left=`${index * 100}%`
    }
)
const slideImage=()=>{
    slides.forEach(
        (slide)=>{
            slide.style.transform=`translateX(-${counter*100}%)`
        }
    )
}
let next=document.querySelector('.next')
let previous=document.querySelector('.previous')
function time(){
    timer=setInterval(() => {
        if(counter==3){
            counter=0;
            slideImage()
        }
        else{
            counter++
            slideImage()
        }
    }, 5000);
}
next.addEventListener('click',()=>{
    clearInterval(timer)
    if(counter==3){
        counter=0;
        slideImage()
    }
    else{
        counter++
        slideImage()
    }
    time()
})

previous.addEventListener('click',()=>{
    clearInterval(timer)
    if(counter==0){
        counter=3;
        slideImage()
    }
    else{
        counter--
        slideImage()
    }
    time()
})
time()
let boolean=false
let header1=document.querySelectorAll('.loader h1')
let hr=document.querySelectorAll('.loader hr')
document.addEventListener('scroll',()=>{
    let experience = document.querySelector('.loader1')
    if(isInViewport(experience) && boolean==false){
        boolean=true
        header1.forEach(
            (h, index)=>{
                var count1=0;
                var c=0;
                var speed=30;
                var i =setInterval(() => {
                    $(h).html(c+"%");
                    $(hr[index]).css("width",c+"%");
                    count1++;
                    c++;
                if(count1==101){
                    clearInterval(i)
                }
                }, speed);
            }
        )
        
    }
},{
    passive:true
})

const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('featurecolumnanimation')
        }
        else{
        }
    })
})
document.addEventListener('DOMContentLoaded',()=>{
    const aboutleft2=document.querySelectorAll('.imagesaboutleft')
    aboutleft2.forEach((el)=>observer.observe(el))
    const opinionstopchilditems=document.querySelectorAll('.opinions-top-child-items')
    opinionstopchilditems.forEach((el)=>observer.observe(el))
    const galleryimages=document.querySelectorAll('.gallery-child')
    galleryimages.forEach((el)=>observer.observe(el))
    
    
    const aboutright2=document.querySelectorAll('.imagesaboutright')
    aboutright2.forEach((el)=>observer.observe(el))
    const button=document.querySelectorAll('.button')
    button.forEach((el)=>observer.observe(el))
    const featurecolumn=document.querySelectorAll('.feature-row')
    featurecolumn.forEach((el)=>observer.observe(el))
    const featuretopitems=document.querySelectorAll('.feature-top-items')
    featuretopitems.forEach((el)=>observer.observe(el))
    const sectionitems=document.querySelectorAll('.about-left-items')
    sectionitems.forEach((el)=>observer.observe(el))
    const sectionrightitems=document.querySelectorAll('.about-right-child')
    sectionrightitems.forEach((el)=>observer.observe(el))
    const prices=document.querySelectorAll('.prices-child')
    prices.forEach((el)=>observer.observe(el))
    
})


let navbutton=document.querySelector('.navTrigger')
let navitems=document.querySelectorAll('#navbar-item-li')
let navitemsbool=false

navbutton.addEventListener('click',()=>{
    
    if(navitemsbool==false){
        navitems.forEach(
            (item, index)=>{
                item.style.animation=`navbaritemlianimation 1s ease forwards ${index/10}s`
            }
        )
        navitemsbool=true
    }
    else if(navitemsbool==true){
        navitems.forEach(
            (item)=>{
                item.style.animation="navbaritemlianimation2 1s ease forwards"
            }
        )
        navitemsbool=false
    }
    
    


})