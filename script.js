let tl = gsap.timeline( {scrollTrigger:{
    trigger: ".slide-proj1",
    start: "top 0%",
    end: "bottom 0%",
    toggleActions: "restart none none reverse",
    // markers: true,
    scrub: .5,
}
}
)
    .fromTo(".title", {y: "0rem"}, {y: "-5rem"}
)
   
let tl2 = gsap.timeline( {scrollTrigger:{
    trigger: ".slide-proj2",
    start: "50%",
    end: "25%",
    toggleActions: "restart none none reverse",
    // markers: true,
    scrub: .75,
}
}
)
    .fromTo(".title", {y: "-5rem"}, {y: "-10rem"}
)

let tl3 = gsap.timeline( {scrollTrigger:{
    trigger: ".slide-proj3",
    start: "top 0%",
    end: "bottom 0%",
    toggleActions: "restart none none reverse",
    markers: true,
    scrub: .75,
}
}
)
    .fromTo(".title", {y: "-10rem"}, {y: "-15rem"}
)

let tl4 = gsap.timeline( {scrollTrigger:{
    trigger: ".slide-proj4",
    start: "50%",
    end: "50%",
    toggleActions: "restart none none reverse",
    markers: true,
    scrub: .75,
}
}
)
    .fromTo(".title", {y: "-10rem"}, {y: "-15rem"}
)



///////////////////// the censoring animation

const titleOneReveal = gsap.to(".title-proj1", {
    ease: "power3.inOut",
    // clipPath: "inset(0% 0% 0% 0%)",
    x: "-9rem",
    // right: "2rem",
    backgroundColor: "rgba( 0, 0, 0, 0)",
    scrollTrigger: {
        trigger:".slide-proj1",
        // markers: true,
        start: "top 50%",
        end: "bottom 50%",
        toggleActions: "play reverse play reverse",
    }
}
)

const titleTwoReveal = gsap.to(".title-proj2", {
    // clipPath: "inset(0% 0% 0% 0%)",
    ease: "power3.inOut",
    x: "-9rem",
    backgroundColor: "rgba( 0, 0, 0, 0)",
    // right: "2rem",
    scrollTrigger: {
        trigger:".slide-proj2",
        // markers: true,
        start: "top 50%",
        end: "bottom 50%",
        toggleActions: "play reverse play reverse",
    }
}
)

const titleThreeRev = gsap.to(".title-proj3", {
        // clipPath: "inset(0% 0% 0% 0%)",
        ease: "power3.inOut",
        x: "-9rem",
        backgroundColor: "rgba( 0, 0, 0, 0)",
        // right: "2rem",
        scrollTrigger: {
            trigger:".slide-proj3",
            markers: true,
            start: "top 50%",
            end: "bottom 50%",
            toggleActions: "play reverse play reverse",
        }
}
)



const titleFourRev = gsap.to(".title-proj4", {
    // clipPath: "inset(0% 0% 0% 0%)",
    ease: "power3.inOut",
    x: "-9rem",
    backgroundColor: "rgba( 0, 0, 0, 0)",
    // right: "2rem",
    scrollTrigger: {
        trigger:".slide-proj4",
        // markers: true,
        start: "top 50%",
        end: "bottom 50%",
        toggleActions: "play reverse play reverse",
    },
}
)

const titleFiveRev = gsap.to(".title-proj5", {
    // clipPath: "inset(0% 0% 0% 0%)",
    ease: "power3.inOut",
    x: "-9rem",
    backgroundColor: "rgba( 0, 0, 0, 0)",
    // right: "2rem",
    scrollTrigger: {
        trigger:".slide-proj5",
        // markers: true,
        start: "top 50%",
        end: "bottom 50%",
        toggleActions: "play reverse play reverse",
    },
}
)

const titleSixRev = gsap.to(".title-proj6", {
    // clipPath: "inset(0% 0% 0% 0%)",
    ease: "power3.inOut",
    x: "-9rem",
    backgroundColor: "rgba( 0, 0, 0, 0)",
    
    scrollTrigger: {
        trigger:".slide-proj6",
        // markers: true,
        start: "top 50%",
        end: "bottom 50%",
        toggleActions: "play reverse play reverse",
    },
}
)




titleOneRev.timeScale(2)
titleTwoRev.timeScale(2)
titleThreeRev.timeScale(2)
titleFourRev.timeScale(2)
titleFiveRev.timeScale(2)
titleSixRev.timeScale(2)


