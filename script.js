// console.log("Working")  
// gsap.from("#left",{
//     width: 0,
//     duration: 1.5,
//     ease: Expo.easeInOut
// })


//this is used to perform gsap animations one after another in a sequence such that we don't have to add delay between animations
var tl = gsap.timeline();
//gsap.set se ham kisi bhi selected element ki properties ko set kr sktey hai
gsap.set(".a",{
    opacity: 0,
    y:10
})
gsap.set("#right>img",{
    opacity: 0,
    y:10,
    scale: 1.6
})

tl
.from("#left",{
    width: 0,
    ease: Expo.easeInOut,
    duration: 1.5
})
.from("#right",{
    width: 0,
    ease: Expo.easeInOut,
    duration: 1.5
})
.to(".a",{
    delay: -2.5,
    stagger: .3,  //means ek jaise properties ke jitne bhi elements hai unpe delay
    opacity: 1,
    y: 0,
    ease: Expo.easeInOut,
    duration: 2
})
.to("#right>img",{
    delay: -1,
   scale :1,
    opacity: 1,
    y: 0,
    ease: Expo.easeInOut,
    duration: 1.5
})