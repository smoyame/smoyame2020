//tagline animation
gsap.from('.tagline', {
    duration: .5,
    opacity: 0,
    // text:" ",
    // padSpace: true,
    ease: "power4.inOut",
    scrollTrigger: {
        trigger:'.hero',
        // markers: true,
        start: "top 50%",
        end: "bottom 60%",
        toggleActions: "play reverse play reverse",
        
        }
    }
)


//project slides on home page
let textReveal = (projNum) => {
    gsap.from(`.proj-name${projNum}`, {
        duration: .5,
        opacity: 0,
        text:" ",
        ease: "power4.inOut",
        scrollTrigger: {
            trigger:`.project${projNum}`,
            // markers: true,
            start: "top 50%",
            end: "bottom 60%",
            toggleActions: "play reverse play reverse",
            
            }
        }
    )
}

textReveal(1)
textReveal(2)
textReveal(3)
textReveal(4)
textReveal(5)
textReveal(6)
textReveal(7)

//medium lightbox
MediumLightbox('figure.zoom-effect');


//swup

// const swup = new Swup();

// swup.on('contentLoaded', () => {
//     MediumLightbox('figure.zoom-effect');
//     textReveal(1)
//     textReveal(2)
//     textReveal(3)
//     textReveal(4)
//     textReveal(5)
//     textReveal(6)
//     textReveal(7)

//     gsap.from('.tagline', {
//         duration: .5,
//         opacity: 0,
//         // text:" ",
//         // padSpace: true,
//         ease: "power4.inOut",
//         scrollTrigger: {
//             trigger:'.hero',
//             // markers: true,
//             start: "top 50%",
//             end: "bottom 60%",
//             toggleActions: "play reverse play reverse",
            
//             }
//         }
//     )
// }
// )









// // cursor movement
// // thanks to someone on codepen
// // $(document).on("click mousemove",".container",function(e){ 
// //     var x = e.clientX;
// //     var y = e.clientY;
// //     var newposX = x - 60;
// //     var newposY = y - 60; $("#cursor").css("transform","translate3d("+newposX+"px,"+newposY+"px,0px)");
// //     });

// // //cursor hover effect

// // let cursor = document.getElementById("cursor");

// // let cursorColorChange = (color) => {
// //     cursor.style.backgroundColor = color;
// // }

// //////SWUP

// // const swup = new Swup();
// // swup.on('animationOutDone', () => {
// //     window.scrollTo(0, 0)
// //     // projdescReveal(1)
// //     // projdescReveal(2)
   
// // })
// // swup.on('contentReplaced', () => {
// //     //swup saves the scroll position on page transitions so i have to do this i'm so sorry
// //     // window.scrollTo(0, 0)

// //     textReveal1(1, "the dry run »")
// //     projdescReveal1(1)
// //     textReveal(2, "olympics »")
// //     projdescReveal(2)
// //     textReveal(3, "amass mag »")
// //     projdescReveal(3)
// //     textReveal(4, "your mail »")
// //     projdescReveal(4)
// //     textReveal(5, "voter's guide »")
// //     projdescReveal(5)
// //     textReveal(6, "misc materials »")
// //     projdescReveal(6)
    
// //     gsap.to (".callmesam", {
// //         duration: 1,
// //         delay: .2,
// //         text: "You can call me Sam!",
// //         ease: "linear",
// //         // x: 50,
// //     }
// //     )
// // })