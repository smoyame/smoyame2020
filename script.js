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
textReveal(1, "the dry run")
textReveal(2, "amass magazine")
textReveal(3, "voter's guide")
textReveal(4, "mailable poster")
textReveal(5, "chapbook")
textReveal(6, "misc materials")

let projdescReveal = (projNum) => { 
    gsap.from (`.proj-desc${projNum}`, {
    duration: .8,
    ease: "power2.inOut",
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
projdescReveal(1)
projdescReveal(2)
projdescReveal(3)
projdescReveal(4)
projdescReveal(5)
projdescReveal(6)