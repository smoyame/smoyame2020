

///////////////////////////////////////

links = document.querySelectorAll('a');
btn = document.querySelector('button');

//tagline on homepage
let easeChoice = "power4.in"
//project slides on home page
let textReveal = (projNum) => {
  let homeProjNameTL = gsap.timeline({ease: easeChoice, scrollTrigger: {
    trigger:`.project${projNum}`,
    // markers: true,
    start: "top 58%",
    end: "bottom 45%",
    // scroller: ".smooth-scroll",
    toggleActions: "play pause play pause",
    scrub: true,
    }
  })

  homeProjNameTL.from(`.proj-name${projNum}`, {
    duration: .5,
      opacity: 0,
      y: '20',
      // text:" ",
      }), 
  homeProjNameTL.to (`.proj-name${projNum}`,{
      y: '0',
      opacity: 1,
  }) 
  homeProjNameTL.to (`.proj-name${projNum}`, {
    opacity: 0,
    y: '-10',
    duration: .5,
  })
}

//test transition
let projReveal = (projNum) => {
  gsap.from(`.project${projNum}`, {
      duration: 1,
      y: '100',
      opacity: 0,
      ease: "circ.out",
      scrollTrigger: {
          trigger:`.project${projNum}`,
          // markers: true,
          start: "top 99%",
          end: "bottom 60%",
          // scroller: ".smooth-scroll",
          toggleActions: "play none none none",
          // scrub: true
          },
      clearProps: 'all',
      // onComplete: textReveal(projNum)
      }
  )
}

//for reference after .hero animates
const textContain = document.querySelector('.text-contain')
if(textContain !== null) {
  //tagline animation
  let homeTextContTL = gsap.timeline({ease: easeChoice, scrollTrigger: {
    trigger:".hero",
    // markers: true,
    start: "top 20%",
    end: "100% 20%",
    // scroller: ".smooth-scroll",
    toggleActions: "play pause play pause",
    scrub: true,
    }
  })

  homeTextContTL.from(".text-contain", {
    duration: .5,
      opacity: 0,
      y: '20',
      // text:" ",
      }), 
  homeTextContTL.to (".text-contain",{
      y: '0',
      opacity: 1,
  }) 
  homeTextContTL.to (".text-contain", {
    opacity: 0,
    y: '-10',
    duration: .5,
  })
}

//barba test

// const animationEnter = (container) => {
//   return gsap.fromTo(container, {
//     "clipPath": "polygon(-55% 0%, -55% 0%, -55% 100%, -55% 100%)",
//     // opacity: 0,
//     // delay: .125,
//   }, {
//     "clipPath": "polygon(-55% 0%, 110% 0%, 110% 100%, -55% 100%)",
//     ease: "circ.inOut",
//     // opacity: 1,
//     duration: 1,
//   });
// }
// const animationLeave = (container) => {
//   return gsap.fromTo(container, {
//     "clipPath": "polygon(-55% 0%, 100% 0%, 100% 100%, -55% 100%)",
//     // opacity: 0,
//     // delay: .125,
//   }, {
//     "clipPath": "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
//     ease: "circ.inOut",
//     // opacity: 1,
//     duration: 1,
//   }
//   );
// }
// let homeAnim = (i) => {
//     for (i=1; i < 9; i++) {
//       const homeProjContain = document.querySelector(`.project${i}`)
//       //check if div exists to avoid warnings in console
//       if (homeProjContain !== null) {
//         projReveal(i)
//       }
//     }
    
//     for (i=1; i < 9; i++) {
//       const projNameContain = document.querySelector(`.proj-name${i}`)
//       //check if div exists to avoid warnings in console
//       if (projNameContain !== null) {
//       textReveal(i)
//       }
//     }
// }




// barba.init({
//   transitions: [
//     {
//       once({next}){
//         animationEnter(next.container);
//       },
//       leave: ({current}) => animationLeave(current.container),
//       enter({next}){
//         animationEnter(next.container);
//       }
//     }
//   ]
// });

// barba.hooks.beforeEnter( (data) => {
//   homeAnim(data)
// }
// )



for (i=1; i < 9; i++) {
  const homeProjContain = document.querySelector(`.project${i}`)
  //check if div exists to avoid warnings in console
  if (homeProjContain !== null) {
    projReveal(i)
  }
}

for (i=1; i < 9; i++) {
  const projNameContain = document.querySelector(`.proj-name${i}`)
  //check if div exists to avoid warnings in console
  if (projNameContain !== null) {
    textReveal(i)
  }
}





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


//adapted from w3schools example



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
Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
  for (source = 0; source < section.length; source++) {
    imgInfo(source).setAttribute("data-width", natW(source))
    imgInfo(source).setAttribute("data-height", natH(source))
    //apply padding to aspectratiofill div
    fillerPad(source).style.paddingBottom = paddValue(source) + "%";
  }
});

// from https://stackoverflow.com/questions/11071314/javascript-execute-after-all-images-have-loaded

//cursor courtesy of Nikita on codepen
//https://codepen.io/chloyka/pen/VwZeRdy

var cursor, links;
// cursor = document.querySelector('.custom-cursor');
// //using link and btn from above
// window.initCursor = false;
// for (var i = 0; i < links.length; i++) {
//   var selfLink = links[i];

//   selfLink.addEventListener("mouseover", function() {
//     cursor.classList.add("custom-cursor--link");
//   });
//   selfLink.addEventListener("mouseout", function() {
//     cursor.classList.remove("custom-cursor--link");
//   });
// }

// window.onmousemove = function (e) {
//   var mouseX, mouseY;
//   mouseX = e.clientX;
//   mouseY = e.clientY;
//   if (!window.initCursor) {

//     jQuery(document).find('.custom-cursor').css({
//       opacity: 1
//     });
//     window.initCursor = true;
//   }
//   jQuery(document).find('.custom-cursor').css({
//     top: mouseY + 'px',
//     left: mouseX + 'px'
//   })
// };
// window.onmouseout = function (e) {
//   jQuery(document).find('.custom-cursor').css({
//     opacity: 0
//   });
//   window.initCursor = false;
// };

// if (btn !== null) {
//   btn.addEventListener("mouseover", function() {
//     cursor.classList.add("custom-cursor--link");
//   });
//   btn.addEventListener("mouseout", function() {
//     cursor.classList.remove("custom-cursor--link");
//   });
// }

const mediaQuery = window.matchMedia('(min-width: 851px)')
const mediumBoxes = document.querySelectorAll(".imagecard");

if (mediaQuery.matches) {
  cursor = document.querySelector('.custom-cursor');
  //using link and btn from above
  window.initCursor = false;
  for (var i = 0; i < links.length; i++) {
    var selfLink = links[i];

    selfLink.addEventListener("mouseover", function() {
      cursor.classList.add("custom-cursor--link");
    });
    selfLink.addEventListener("mouseout", function() {
      cursor.classList.remove("custom-cursor--link");
    });
  };

  window.onmousemove = function (e) {
    var mouseX, mouseY;
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!window.initCursor) {
      jQuery(document).find('.custom-cursor').css({
        opacity: 1
      });
      window.initCursor = true;
    }
    jQuery(document).find('.custom-cursor').css({
      top: mouseY + 'px',
      left: mouseX + 'px'
    })
  };
  window.onmouseout = function (e) {
    jQuery(document).find('.custom-cursor').css({
      opacity: 0
    });
    window.initCursor = false;
  };
  if (btn !== null) {
    btn.addEventListener("mouseover", function() {
      cursor.classList.add("custom-cursor--link");
    });
    btn.addEventListener("mouseout", function() {
      cursor.classList.remove("custom-cursor--link");
    });
  };
  if (mediumBoxes !== null) {
    for (var i = 0; i < links.length; i++) {
      var selfImg = mediumBoxes[i];
  
      selfImg.addEventListener("mouseover", function() {
        cursor.classList.add("custom-cursor--link");
      });
      selfImg.addEventListener("mouseout", function() {
        cursor.classList.remove("custom-cursor--link");
      });
    };
  };
};




/* Page transitions reserved for later
const containerBefore = CSSRulePlugin.getRule("body::before");
  //both used below too
  links = document.querySelectorAll('a');
  btn = document.querySelector('button');

//fade ins for main, sub, and about
const firstMain = document.querySelector(".main");

window.addEventListener("load", function(){
  if (firstMain !== null )  {
    let tl = gsap.timeline({duration: 1})
    tl.from(containerBefore, {
      "clipPath": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
      // "visibility" : "hidden",
      // onComplete: textContainAnim
    })
    tl.from(containerBefore, {
      opacity: 1,
      ease: "circ.in",
      delay: .125
    }, .975
    )
    gsap.from(firstMain, {
      opacity: 0,
      ease: "circ.in",
      // "visibility": "hidden",
    })
  } 

  const aboutMain = document.querySelector(".about-main");
  if (aboutMain !== null )  {
    gsap.from(aboutMain, {
      opacity: 0,
      ease: "circ.in",
      // "visibility" : "hidden"
      // delay: .125,
    }
    );
    let tl = gsap.timeline({duration: 1, clearProps: 'all'});
    tl.from(containerBefore, {
      "clipPath": "polygon(35% 0%, 100% 0%, 100% 100%, 35% 100%)",
      ease: "circ.inOut"
      // onComplete: textContainAnim
    })
    tl.from(containerBefore, {
      opacity: 1,
      ease: "circ.in",
      delay: .125
    }, .975
    );
  };

  const subMain = document.querySelector(".sub-main")
  if (subMain !== null )  {
    gsap.from(subMain, {
      opacity: 0,
      ease: "circ.in",
      // delay: .125,
      // "visibility" : "hidden"
    }
    );
    let tl = gsap.timeline({duration: 1, clearProps: 'all'});
    tl.from(containerBefore, {
      "clipPath": "polygon(35% 0%, 100% 0%, 100% 100%, 35% 100%)",
      ease: "circ.inOut"
      // onComplete: textContainAnim
    })
    tl.from(containerBefore, {
      opacity: 1,
      ease: "circ.in",
      delay: .125
    }, .975
    );

  };

  // for fade-out


  links.forEach(storedLink => storedLink.addEventListener("click", function(event) {
    
    let exeLink = event.currentTarget.href
    event.preventDefault();
    function grabIntPg () {
      window.location = exeLink
    }
    gsap.fromTo(containerBefore, {
      "clipPath": "polygon(35% 0%, 35% 0%, 35% 100%, 35% 100%)",
      opacity: 0,
      // delay: .125,
    }, {
      "clipPath": "polygon(35% 0%, 100% 0%, 100% 100%, 35% 100%)",
      ease: "circ.inOut",
      opacity: 1,
      duration: 1,
      onComplete: grabIntPg
    }
    );
    gsap.to('.text-contain', {
      opacity: 0,
      ease: "circ.inOut",
      duration: .75,
    })
    gsap.to('.sub-proj-info', {
      opacity: 0,
      ease: "circ.inOut",
      duration: .75,
    })
    gsap.to('.proj-name', {
      opacity: 0,
      ease: "circ.inOut",
      duration: .75,
    })


  })
  )

})
*/