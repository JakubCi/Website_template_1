$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});
$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
    } else {
        $('.nav').removeClass('affix');
    }
});

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

function update() {
    const nav = document.querySelector('.nav')
    const elem = document.querySelector('.feature')
    const elem2=document.querySelector('.prices')
    rect3=elem2.getBoundingClientRect();
    const rect = elem.getBoundingClientRect();
    const rect2=nav.getBoundingClientRect()
    let logo=document.querySelector('#logo-bt')
    let logoa=document.querySelector('#logo-main')
    let navtrigger=document.querySelectorAll('#navTriggerLine')

    if(rect2.bottom<=rect.top+100){
        navtrigger.forEach(
            (index)=>{
                index.style.backgroundColor='#fff'
            }
        )
        
        logoa.style.color='#fff'
        logo.src='images/Body_therapy_na_ciemna_koszulke-removebg-preview.png'
    }
    
    else{
        navtrigger.forEach(
            (index)=>{
                index.style.backgroundColor='#000000'
            }
        )
        logoa.style.color='#000000'
        logo.src='images/Body_therapy_na_jasna_koszulke1-removebg-preview.png'
    }
  }
  document.addEventListener("scroll", update);
  update();