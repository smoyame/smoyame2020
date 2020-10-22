

/// fluidbox

$(function () {
    $('.sub-images a').fluidbox();
})

//shapes

gsap.to('.triangle', {
    duration: 300, 
    rotation: 360, 
    transformOrigin: "43.27% 41.25%",
    repeat: -1,
    ease: "linear",
})

gsap.to('.square', {
    duration: 460, 
    rotation: -360, 
    transformOrigin: "50% 50%",
    repeat: -1,
    ease: "linear",
})


//hero text up in
let tl = gsap.timeline()

tl.from('.hidetext', {
    opacity: 0,
    delay: .5,
    duration: 1,
    stagger: .1,
    y: "125%",
    ease: "power4.inOut"
}
)

//project slides

let oddProj = (projNum) => {
gsap.from (`.projdesc${projNum}`, {
    opacity: 0,
    x: "10%",
    ease: "power4.out",
    scrollTrigger: {
        trigger: `.project${projNum}`,
        start: "top 50%",
            end: "bottom 50%",
        // markers: true,
        toggleActions: "play reverse play reverse",
    }
}
)
}

let evenProj = (projNum) => {
    gsap.from (`.projdesc${projNum}`, {
        opacity: 0,
        x: "-10%",
        ease: "power4.out",
        scrollTrigger: {
            trigger: `.project${projNum}`,
            // start: "top 45%",
            // end: "-10%",

            start: "top 50%",
            end: "bottom 50%",
            // markers: true,
            toggleActions: "play reverse play reverse",
        }
    }
    )
    }

oddProj(1);
evenProj(2);
oddProj(3);
evenProj(4);
oddProj(5);
evenProj(6);

//SWUP 
const swup = new Swup();

swup.on('animationOutDone', () => {
    window.scrollTo(0, 0)   
})

//SUB PAGES

gsap.from('.sub-proj-desc', {
    opacity: 0,
    duration: 1,
    ease: "power4.out",
    x:"-25%"
})


swup.on('contentReplaced', () => {

    $(function () {
        $('.sub-images a').fluidbox();
    })

    oddProj(1);
    evenProj(2);
    oddProj(3);
    evenProj(4);
    oddProj(5);
    evenProj(6);

    gsap.from('.sub-proj-desc', {
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        x:"-25%"
    })


   
}
)

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      