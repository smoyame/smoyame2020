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
            start: "top 50%",
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
        start: "top 50%",
        end: "bottom: 0%",
        // markers: true,
        toggleActions: "play reverse play reverse",
    }
}
)
}

//applying functions

textReveal(1, "the dry run »")
textReveal(2, "something »")
textReveal(3, "amass mag »")
textReveal(4, "origami poster »")
textReveal(5, "voter's guide »")
textReveal(6, "misc materials »")


projdescReveal(1)
projdescReveal(2)
projdescReveal(3)
projdescReveal(4)
projdescReveal(5)
projdescReveal(6)

// cursor movement
// thanks to someone on codepen
$(document).on("click mousemove",".container",function(e){ 
    var x = e.clientX;
    var y = e.clientY;
    var newposX = x - 60;
    var newposY = y - 60; $("#cursor").css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");
    });

//cursor hover effect

let cursor = document.getElementById("cursor");

let cursorColorChange = (color) => {
    cursor.style.backgroundColor = color;
}




// about

gsap.to (".callmesam", {
    duration: 1,
    delay: .2,
    text: "You can call me Sam!",
    ease: "linear",
    // x: 50,
}
)

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

    textReveal(1, "the dry run »")
    projdescReveal(1)
    textReveal(2, "something »")
    projdescReveal(2)
    textReveal(3, "amass mag »")
    projdescReveal(3)
    textReveal(4, "mailable poster »")
    projdescReveal(4)
    textReveal(5, "voter's guide »")
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