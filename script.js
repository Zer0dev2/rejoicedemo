let cur = document.querySelector(".cursor");
let page1 = document.querySelector(".page1");

page1.addEventListener("mousemove",function(e){

    gsap.to(cur,{
        x:e.pageX,
        y:e.pageY
    })

})

page1.addEventListener("mouseenter",function(){
    gsap.to(cur,{
        scale:1
    })
})

page1.addEventListener("mouseleave",function(){
    gsap.to(cur,{
        scale:0
    })
})

var t = gsap.timeline()
t.from(".loader h2 span",{
    x:70,
    opacity:0,
    duration:1,
    stagger:0.3
})
t.to(".loader h2 span",{
    x:40,
    opacity:0,
})
t.to(".loader",{
    opacity:0,
    display:"none"
})

t.from(".container2 h2 span",{
    y:100,
    opacity:0,
    duration:1,
    stagger:0.1
})



gsap.to("#page2 .page2span,#page2p",{
    scale:1,
    opacity:1,
    duration:1,
    lineHeight:1.6,
    scrollTrigger:{
        trigger:"#page2 .page2span,#page2p",
        scroller:"body",
        start:"top 90%",
        end:"top 10%",
        scrub:2
    }
})


gsap.from(".page3h2",{
    scale:1,
    
    opacity:1,
    duration:1,
    y:50,
    scrollTrigger:{
        markers:true,
        trigger:".page3h2",
        scroller:"body",
        start:"top 70%",
        end:"top 40%",
        scrub:2,

    }
})


gsap.to(".page5 .page5p,#page5span",{
    scale:1,
    opacity:1,
    duration:1,
    lineHeight:1.6,
    scrollTrigger:{
        trigger:".page5 .page5p,#page5span",
        scroller:"body",
        start:"top 90%",
        end:"top 10%",
        scrub:2
    }
})


let cur2 = document.querySelector(".cur6");
let pg6 = document.querySelector(".page6");

pg6.addEventListener("mousemove",function(e){
    // console.log(1)
    // cur2.style.left=e.pageX+"px";
    // cur2.style.top=0;
    // cur2.style.top=e.pageY+"px";
    gsap.to(cur2,{
        left:e.pageX+"px",
        top:e.pageY+"px"
    })


})
pg6.addEventListener("mouseenter",function(){
    gsap.to(cur2,{
        scale:1
    })
})

pg6.addEventListener("mouseleave",function(){
    gsap.to(cur2,{
        scale:0,
    })
})




gsap.to(".page7 .page7p,#page7span",{
    scale:1,
    opacity:1,
    duration:1,
    lineHeight:1.6,
    scrollTrigger:{
        trigger:".page7 .page7p,#page7span",
        scroller:"body",
        start:"top 90%",
        end:"top 10%",
        scrub:2
    }
})



// swiper

// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 30,
//     centeredSlides: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });


//   var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });




var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      autoplay: {
              delay: 500,
              disableOnInteraction: true,
            },
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });




  gsap.from(".page8 #page8h2,#page8hr",{
    scale:1,
    opacity:0,
    duration:1,
    y:170,
    scrollTrigger:{
        trigger:".page8 #page8h2,#page8hr",
        scroller:"body",
        start:"top 90%",
        end:"top 35%",
        scrub:2
    }
})


gsap.from(".swiper",{
    scale:1.2,
    opacity:0,
    duration:1,
    // y:100,
    scrollTrigger:{
        trigger:".swiper",
        scroller:"body",
        start:"top 90%",
        end:"top 35%",
        scrub:2
    }
})



