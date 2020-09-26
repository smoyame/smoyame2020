gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({

    "(min-width: 1100px)": () => {

        const leftJut = (projNum) => {
            gsap.to(`.title-proj${projNum}`, {
                ease: "power4.inOut",
                clipPath: "inset(0% 0% 0% 0%)",
                x: "-9rem",
                // right: "2rem",
                backgroundColor: "rgba( 0, 0, 0, 0)",
                scrollTrigger: {
                    trigger:`.slide-proj${projNum}`,
                    // markers: true,
                    start: "top 50%",
                    end: "bottom 50%",
                    toggleActions: "play reverse play reverse",
                }
            }
            )
        
        }
        
        leftJut(1)
        leftJut(2)
        leftJut(3)
        leftJut(4)
        leftJut(5)
        leftJut(6)
        
        const bodyTimeline = gsap.timeline({
            scrollTrigger:{
            trigger: ".slides",
            start: "0%",
            end: "bottom 50%",
            toggleActions: "play reverse play reverse",
            // markers: true,
            scrub: 1
            }
        }
        ).to(".title", {y: "-20rem"})
        
        

    },

    

})


////////////////////////

// const bodyTimeline = gsap.timeline({
//     scrollTrigger:{
//     trigger: ".slides",
//     start: "0%",
//     end: "bottom 50%",
//     toggleActions: "play reverse play reverse",
//     // markers: true,
//     scrub: 1
//     }
// }
// ).to(".title", {y: "-20rem"})


// const leftJut = (projNum) => {
//     gsap.to(`.title-proj${projNum}`, {
//         ease: "power4.inOut",
//         clipPath: "inset(0% 0% 0% 0%)",
//         x: "-9rem",
//         // right: "2rem",
//         backgroundColor: "rgba( 0, 0, 0, 0)",
//         scrollTrigger: {
//             trigger:`.slide-proj${projNum}`,
//             // markers: true,
//             start: "top 50%",
//             end: "bottom 50%",
//             toggleActions: "play reverse play reverse",
//         }
//     }
//     )

// }

// leftJut(1)
// leftJut(2)
// leftJut(3)
// leftJut(4)
// leftJut(5)
// leftJut(6)


