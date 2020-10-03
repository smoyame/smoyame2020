
// // project 2 ///////////////////////
// let proj2SubAnims = () => {
// gsap.to (".sub-proj-name2", {
//     duration: 1,
//     delay: .8,
//     x: "32vw",
//     ease: "power4.Out"
//     // x: 50,
// }
// )

// gsap.to (".sub-desc2a", {
//     duration: 1,
//     delay: 1.8,
//     opacity: 1,
//     ease: "power3.inOut"
//     // x: 50,
// }
// )
// }
// // project 3 ///////////////////////
// let proj3SubAnims = () => {
// gsap.to (".sub-proj-name3", {
//     duration: 1,
//     delay: .8,
//     x: "-8vw",
//     ease: "power4.Out"
//     // x: 50,
// }
// )

// gsap.to (".sub-desc3a", {
//     duration: 1,
//     delay: 1.8,
//     opacity: 1,
//     ease: "power3.inOut"
//     // x: 50,
// }
// )
// }
// // project 4 ///////////////////////
// let proj4SubAnims = () => {
// gsap.to (".sub-proj-name4", {
//     duration: 1,
//     delay: .8,
//     x: "-1.3vw",
//     ease: "power4.Out"
//     // x: 50,
// }
// )

// gsap.to (".sub-desc4a", {
//     duration: 1,
//     delay: 1.8,
//     opacity: 1,
//     ease: "power3.inOut"
//     // x: 50,
// }
// )
// }
// // project 5 ///////////////////////
// let proj5SubAnims = () => {
// gsap.to (".sub-proj-name5", {
//     duration: 1,
//     delay: .8,
//     x: "37vw",
//     ease: "power4.Out"
//     // x: 50,
// }
// )

// gsap.to (".sub-desc5a", {
//     duration: 1,
//     delay: 1.8,
//     opacity: 1,
//     ease: "power3.inOut"
//     // x: 50,
// }
// )
// }
// ////////////////////////////////////
// // PROJECT 6 ///////////////////////
// let proj6SubAnims = () => {
// gsap.to (".sub-proj-name6", {
//     duration: 1,
//     delay: 1.8,
//     x: "-7.8vw",
//     ease: "power4.Out"
//     // x: 50,
// }
// )

// gsap.to (".sub-desc6a", {
//     duration: 1,
//     delay: .8,
//     opacity: 1,
//     ease: "power3.inOut"
//     // x: 50,
// }
// )
// }

// proj1SubAnims()
// proj2SubAnims()
// proj3SubAnims()
// proj4SubAnims()
// proj5SubAnims()
// proj6SubAnims()




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


