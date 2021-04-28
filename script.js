// gsap.from("nav h2", {
//     x: 30,
//     opacity: 0,
//     duration: 1.4,
//     ease: "Expo.easeInOut",
// })

// gsap.from("nav #links a ", {
//     x: 30,
//     opacity: 0,
//     ease: "Expo.easeInOut",     
//     duration: 1.4,
// })



//  from ka mtlb hota h ki yha se shuru kre to opacity 0 ka mtlv 0 se
//  start krna h 1 pr end
// to ka mtlv destination ki aapko kha tk chalana hai

// ye tarike s nhi honga to sbhi a tags ko html 
// s ek jaisi class de dena nhi to niche vala tarika bhi shi h

// jin jin elements ko sath me animate krna hai unko ek jaisi id ya ek jiasi class
//  dedo fir animation lga doo to aapka jyada code nhi likhna pdega
var tl = gsap.timeline();
// ye timeline vala kam delay krne k liye h mtlb nav ke pure element
//  ho jaye fir niche k chale line wise


// gsap.from(".st", {
//         x: 30,
//         stagger: .2,
//         opacity: 0,
//         duration: 1,
//         ease: "Expo.easeInOut",
//     })


// x:30 mtlv right to left aayega(width pr 30px aage h)
// but icon me class dene pr icon hi gayb ho rhe h 
// kyuki hum ek hi bar class de skte hai to uska 
// soution ye h ki jo aready class h usi m apni new class double quotes k 
// and kji bhi likh skte h
//ease :  ek animation hai

// gsap.from("#main h1", {
//     y: 20,
//     opacity: 0,
//     ease: "Expo.easeInOut",
//     // delay: 1.6, ye bhi use kr skte h but ek smart tarika or h
//     duration: 1,
// })




// time line ko use krne ka tarika aisa h ki jo aapne var ka nam liya h vo rkh do or to 
// niche jo code h vo just copy hi h or timeline work krvane ka tarika h 
// ya to timeline use kro ya delay  but smart timeline h

tl.from(".st", {
        x: 30,
        stagger: .2,
        opacity: 0,
        duration: 1,
        ease: "Expo.easeInOut",
    })
    .from("#main h1", {
        y: 20,
        opacity: 0,

        ease: "Expo.easeInOut",
        // delay: 1,
        duration: 1,
    }, "-=.6")
    //  timeline use krte h to gsap ko htakr sirf var ka nam mtlv abhi 
    // apn n sbse upr jo
    // var ka nam liya h vo(tl.from) likh do bs or second jo code likha h vha sirf(.from)


// lecture 72 me sikhaya h ye part
gsap.from("#play h2 ", {
    x: 30,
    stagger: .2,
    opacity: 0,
    duration: 4,
    ease: "Expo.easeInOut",
})
gsap.from("#play2 h2 ", {
    x: -30,
    stagger: .2,
    opacity: 0,
    duration: 5,
    ease: "Expo.easeInOut",
})