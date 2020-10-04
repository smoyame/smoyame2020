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


