let textReveal = (projNum, projTitle) => {
    gsap.to (`.proj-name${projNum}`, {
        duration: .5,
        // fontWeight: "600",
        text: projTitle,
        ease: "linear",
        
        // x: 50,
        
        scrollTrigger: {
            trigger:`.slide${projNum}`,
            // markers: true,
            start: "top 75%",
            end: "bottom: 0%",
            // end: "50%",
            toggleActions: "play reverse play reverse",
            
        }
    
    }
    )
}



let projdescReveal = (projNum) => { 
    gsap.to (`.proj-desc${projNum}`, {
    duration: .9,
    opacity: "1",
    // ease: "linear",
    // clipPath: "inset(0% 0% 0% 100%)",
    
    scrollTrigger: {
        trigger: `.slide${projNum}`,
        start: "top 75%",
        end: "bottom: 0%",
        // markers: true,
        toggleActions: "play reverse play reverse",
    }
}
)
}



textReveal(1, "the dry run broadsheet »")
textReveal(2, "amass magazine »")
textReveal(3, "voter's guide 2020 »")
textReveal(4, "origami poster »")
textReveal(5, "chapbook »")
textReveal(6, "misc materials »")


projdescReveal(1)
projdescReveal(2)
projdescReveal(3)
projdescReveal(4)
projdescReveal(5)
projdescReveal(6)
// about

gsap.to (".callmesam", {
    duration: 1,
    delay: .2,
    text: "You can call me Sam!",
    ease: "linear",
    // x: 50,
}
)

$(document).on('mousemove', function(e){
    $('#cursor').css({
       left:  e.pageX -16,
       top:   e.pageY - 16
    });
});

//////SWUP

const swup = new Swup();
swup.on('animationOutDone', () => {
    window.scrollTo(0, 0)
    // projdescReveal(1)
    // projdescReveal(2)
   
})
swup.on('contentReplaced', () => {
    //swup saves the scroll position on page transitions so i have to do this i'm so sorry
    // window.scrollTo(0, 0)

    textReveal(1, "the dry run broadsheet »")
    projdescReveal(1)
    textReveal(2, "amass magazine »")
    projdescReveal(2)
    textReveal(3, "voter's guide 2020 »")
    projdescReveal(3)
    textReveal(4, "mailable poster »")
    projdescReveal(4)
    textReveal(5, "chapbook »")
    projdescReveal(5)
    textReveal(6, "misc materials »")
    projdescReveal(6)
    
    gsap.to (".callmesam", {
        duration: 1,
        delay: .2,
        text: "You can call me Sam!",
        ease: "linear",
        // x: 50,
    }
    )
})