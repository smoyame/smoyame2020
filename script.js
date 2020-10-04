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
    duration: .8,
    opacity: "0",
    // ease: "linear",
    // clipPath: "inset(0% 0% 0% 100%)",
    
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



// about

gsap.to (".callmesam", {
    duration: 1,
    delay: .2,
    text: "You can call me Sam!",
    ease: "linear",
    // x: 50,
}
)


// project pages // subslides
const responsiveAnim = (subProjName, subDesc, subProjNameXVal) => {

    let d = () => {
        
        let proj1SubAnims = () => {
            gsap.to (subProjName, {
                duration: 1,
                delay: .8,
                x: subProjNameXVal,
                ease: "power4.Out"
                // x: 50,
            }
            )
            
            gsap.to (subDesc, {
                duration: 1,
                delay: 1.8,
                opacity: 1,
                ease: "power3.inOut"
                // x: 50,
            }
            )
            
            }
        if (innerWidth <= 1100) {
            gsap.killTweensOf(subProjName);
            gsap.set(subProjName, {
                x: "0"
            });
            gsap.killTweensOf(subDesc);
            
            gsap.set(subDesc, {
                opacity: 1,
            });
        } else if (innerWidth > 1100) {
            proj1SubAnims()
        }
    }
    
    addEventListener('resize', d)
    addEventListener('DOMContentLoaded', d)
    }
    
    responsiveAnim(".sub-proj-name1", ".sub-desc1a", "-8vw")
    responsiveAnim(".sub-proj-name2", ".sub-desc2a", "32vw")
    responsiveAnim(".sub-proj-name3", ".sub-desc3a", "-8vw")
    responsiveAnim(".sub-proj-name4", ".sub-desc4a", "-1.3vw")
    responsiveAnim(".sub-proj-name5", ".sub-desc5a", "37vw")
    responsiveAnim(".sub-proj-name6", ".sub-desc6a", "-7.8vw")
    
    
    
// page animation

const swup = new Swup();
swup.on('contentReplaced', () => {
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
responsiveAnim(".sub-proj-name1", ".sub-desc1a", "-8vw")
    responsiveAnim(".sub-proj-name2", ".sub-desc2a", "32vw")
    responsiveAnim(".sub-proj-name3", ".sub-desc3a", "-8vw")
    responsiveAnim(".sub-proj-name4", ".sub-desc4a", "-1.3vw")
    responsiveAnim(".sub-proj-name5", ".sub-desc5a", "37vw")
    responsiveAnim(".sub-proj-name6", ".sub-desc6a", "-7.8vw")
})

