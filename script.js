//tagline animation
gsap.from('.text-contain', {
    duration: .5,
    opacity: 0,
    // text:" ",
    // padSpace: true,
    ease: "power4.inOut",
    scrollTrigger: {
        trigger:'.hero',
        // markers: true,
        start: "top 40%",
        end: "bottom 45%",
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
textReveal(8)

//medium lightbox
MediumLightbox('figure.zoom-effect');

//accordion testing - scrapped first run with animation. has extra click at start to set then it works, but then theres also making it work across mobile. gah!!!!
//this version is courtesy
var acc = document.getElementsByClassName("accordion");
var i;
let collapseBtn = document.getElementsByClassName("process-collapse");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = document.querySelector(".process-contain");
    if (getComputedStyle(panel).display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

for (i = 0; i < acc.length; i++) {
  collapseBtn[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = document.querySelector(".process-contain");
    if (getComputedStyle(panel).display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    var idP = document.getElementById("process");
    idP.scrollIntoView();
  });

}




// automatically setting height of process images

const section = document.getElementsByClassName("process-panel")

fillerPad = (n) => {
  return section[n].querySelector(".aspect-ratio-fill")
}

imgInfo = (val) => {
  return fillerPad(val).nextSibling
} 

natW = (v) => {return imgInfo(v).naturalWidth;}
natH = (v) => {return imgInfo(v).naturalHeight;}

paddValue = (num) => {
  let newPadVal = (natH(num) / natW(num)) * 100;
  return newPadVal;
}

  //applying ratio to padding and to dataset

// let testGrabImgEl = 

// for (source = 0; source < section.length; source++) {
//     imgInfo(source) = (event) => {
//         //apply new data w and h
//     event.target.setAttribute("data-width", event.target.naturalWidth)
//     event.target.setAttribute("data-height", event.target.naturalHeight)
//     //apply padding to aspectratiofill div
//     event.target.previousSibling.style.paddingBottom = (event.target.naturalHeight/event.target.naturalWidth)*100 + "%";  
//   }
// }

Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
  for (source = 0; source < section.length; source++) {
    imgInfo(source).setAttribute("data-width", natW(source))
    imgInfo(source).setAttribute("data-height", natH(source))
    //apply padding to aspectratiofill div
    fillerPad(source).style.paddingBottom = paddValue(source) + "%";
  }
});

//document.getElementsByClassName("aspect-ratio-fill").closest(".process-panel")

// applySize(0)
// applySize(1)

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     let process = document.querySelector(".process-contain");
//     let cacheProcessHeight = getComputedStyle(process).height;


//     this.classList.toggle("active");
//     var panel = document.querySelector(".work-process");
//     if (panel.style.maxHeight) {
//       panel.style.height = "4vw";
//       panel.style.overflow = "hidden"
//     } else {
//     //   panel.style.maxHeight = panel.scrollHeight + "px";
//     panel.style.height = "auto"
//     panel.style.overflow = "visible"
//   }


//   });

//   collapseBtn[i].addEventListener("click", function() {
//     let process = document.querySelector(".process-contain");
//     let cacheProcessHeight = getComputedStyle(process).height;


//     this.classList.toggle("active");
//     var panel = document.querySelector(".process-contain");
//     if (panel.style.maxHeight) {
//       // panel.style.maxHeight = null;
//       panel.style.overflow = "hidden"

//     } else {
//     //   panel.style.maxHeight = panel.scrollHeight + "px";
//       panel.style.maxHeight = "inherit"
//       panel.style.overflow = "visible"
//   }

//   var idP = document.getElementById("process");
//       idP.scrollIntoView();


//   });
// }

// FIRST RUN
// var acc = document.getElementsByClassName("accordion");
// var i;


// let initContainer = document.querySelector(".work-process");
// let cacheContainerHeight = getComputedStyle(initContainer).height;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
    

//     this.classList.toggle("active");

//     let process = document.querySelector(".process-contain");
//     let cacheProcessHeight = getComputedStyle(process).height;
//     let container = document.querySelector(".work-process");
    

    
    
//     /* Toggle between hiding and showing the active panel */
    
//     if (container.style.maxHeight !== "4vw") {
//         container.style.maxHeight = "4vw";
//     } else {
//         container.style.maxHeight = cacheProcessHeight;
//     }

//   });
// }



// mediaQuery.addListener(handleSizeChange)

// handleSizeChange(mediaQuery);

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