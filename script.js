gsap.to (".name", {
    text: "sam moya medina",
    ease: "linear",
    duration: 2,
    delay: 5
})


let textReveal = (projNum, projTitle) => {
    gsap.to (`.proj-name${projNum}`, {
        duration: .8,
        text: projTitle,
        ease: "linear",
        // x: 50,
        scrollTrigger: {
            trigger:`.slide${projNum}`,
            // markers: true,
            start: "top 75%",
            end: "bottom: -5%",
            // end: "50%",
            toggleActions: "play reverse play reverse",
            
        }
    
    }
    )
}


let projdescReveal = (projNum) => { 
    gsap.from (`.proj-desc${projNum}`, {
    duration: 1,
    ease: "linear",
    clipPath: "inset(0% 100% 0% 0%)",
    scrollTrigger: {
        trigger: `.slide${projNum}`,
        start: "top 75%",
        end: "bottom: -5%",
        // markers: true,
        toggleActions: "play reverse play reverse",
    }
}
)
}
textReveal(1, "the dry run")
projdescReveal(1)
textReveal(2, "amass magazine")
projdescReveal(2)
textReveal(3, "voter's guide")
projdescReveal(3)
textReveal(4, "mailable poster")
projdescReveal(4)
textReveal(5, "chapbook")
projdescReveal(5)
textReveal(6, "misc materials")
projdescReveal(6)