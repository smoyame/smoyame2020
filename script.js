// gsap.from('.sidebar', {
//   x: '-200',
//   opacity: 0,
//   duration: 2,
//   ease: "power4.inOut"
// })

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

//for homepage
// textReveal(1)
// textReveal(2)
// textReveal(3)
// textReveal(4)
// textReveal(5)
// textReveal(6)
// textReveal(7)
// textReveal(8)

//test transition

let projReveal = (projNum) => {
  gsap.from(`.project${projNum}`, {
      duration: .5,
      y: '100',
      opacity: 0,
      ease: "power4.inOut",
      scrollTrigger: {
          trigger:`.project${projNum}`,
          // markers: true,
          start: "top 90%",
          end: "bottom 60%",
          toggleActions: "play none none none",
          // scrub: true
          },
      clearProps: 'all',
      // onComplete: textReveal(projNum)
      }
  )
}

for (i=1; i < 9; i++) {
  projReveal(i)
}

for (i=1; i < 9; i++) {
  textReveal(i)
}



//for reference after .hero animates
const textContain = document.querySelector('.text-contain')
if(textContain !== null) {
  //tagline animation
  gsap.from('.text-contain', {
    duration: .35,
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
        
        },
        clearProps: 'all'
    }
  )
}

//control when load anims run
/*
const prevIsMe = document.referrer.includes("127.0.0.1")
const firstMain = document.querySelector(".main");

if (firstMain !== null && prevIsMe !== true )  {
  //onpage load
  gsap.from('.container', {
    duration: 2,
    ease: "power4.inOut",
    opacity: 0,
    "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
    // onComplete: textContainAnim
  })
} 

const subMain = document.querySelector('.sub-main')
if (subMain !== null ) {
  
    gsap.from('.sub-main', {
      duration: 2,
      ease: "power4.inOut",
      opacity: 0,
      // "overflow": "visible",
      "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      clearProps: 'all'
    })
  
} 

const aboutMain = document.querySelector('.about-main')
if (aboutMain !== null ) {
  
    gsap.from('.about-main', {
      duration: 2,
      ease: "power4.inOut",
      opacity: 0,
      "clip-path": "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      clearProps: 'all'
      // onComplete: textContainAnim
    })
  
} 

*/




// gsap.from('.hero', {
//   y: '-100',
//   opacity: 0,
//   duration: 2,
//   ease: "power4.inOut",
//   clearProps: 'all',
//   onComplete: textAnim
// })



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

// from https://stackoverflow.com/questions/11071314/javascript-execute-after-all-images-have-loaded

//cursor courtesy of Nikita on codepen
//https://codepen.io/chloyka/pen/VwZeRdy

var cursor, links;
cursor = document.querySelector('.custom-cursor');
links = document.querySelectorAll('a');
btn = document.querySelector('button');
window.initCursor = false;
for (var i = 0; i < links.length; i++) {
  var selfLink = links[i];

  selfLink.addEventListener("mouseover", function() {
    cursor.classList.add("custom-cursor--link");
  });
  selfLink.addEventListener("mouseout", function() {
    cursor.classList.remove("custom-cursor--link");
  });
}

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
}