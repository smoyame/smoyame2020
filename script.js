//hero

let tl = gsap.timeline()

tl.from('.hidetext', {
    opacity: 0,
    delay: .15,
    duration: 1,
    stagger: .1,
    y: "125%",
    ease: "power4.out"
})



///////////

//proj info animations

let oddProj = (projNum) => {
    gsap.from(`.proj-info${projNum}`, {
        opacity: 0,
        x: "10%",
        ease: "power3.inOut",
        scrollTrigger: {
            trigger: `.project${projNum}`,
            start: "top 50%",
            end: "bottom 50%",
            // markers: true,
            toggleActions: "play none play none",
        }
    })
}

let evenProj = (projNum) => {
    gsap.from(`.proj-info${projNum}`, {
        opacity: 0,
        x: "-10%",
        ease: "power3.inOut",
        scrollTrigger: {
            trigger: `.project${projNum}`,
            // start: "top 45%",
            // end: "-10%",

            start: "top 50%",
            end: "bottom 50%",
            // markers: true,
            toggleActions: "play none play none",
        }
    })
}

oddProj(1);
evenProj(2);
oddProj(3);
evenProj(4);
oddProj(5);
evenProj(6);
oddProj(7);



// parallax animation

gsap.from('.project1', {
    y: 300,
    scrollTrigger: {
        trigger: '.projects',
        scrub: 1
    }
})

gsap.from('.project2', {
    y: 150,
    scrollTrigger: {
        trigger: 'body',
        scrub: 1
    }
})

gsap.from('.project3', {
    y: 200,
    scrollTrigger: {
        trigger: 'body',
        scrub: 1
    }
})



gsap.from('.project4', {
    y: 300,
    scrollTrigger: {
        trigger: '.projects',
        scrub: 1
    }
})

gsap.from('.project5', {
    y: 200,
    scrollTrigger: {
        trigger: 'body',
        scrub: 1
    }
})

gsap.from('.project6', {
    y: 250,
    scrollTrigger: {
        trigger: 'body',
        scrub: 1
    }
})

gsap.from('.project7', {
    y: 300,
    scrollTrigger: {
        trigger: 'body',
        scrub: 1
    }
})


/////////////////////////////////////// SUB PAGES //
// SUB PAGES ///////////////////////////////////////
/////////////////////////////////////// SUB PAGES //

gsap.from('.sub-hero-img', {
    y: 165,
    scrollTrigger: {
        trigger: 'body',
        scrub: 1
    }
})

gsap.from('.sub-text-contain', {
    y: 80,
    scrollTrigger: {
        trigger: 'body',
        scrub: 1
    }
})

gsap.from('.sub-bgblock1a', {
    y: 100,
    scrollTrigger: {
        trigger: 'body',
        scrub: 1
    }
})

gsap.from('.sub-bgblock1b', {
    y: 250,
    scrollTrigger: {
        trigger: 'body',
        scrub: 1
    }
})

gsap.from('.sub-bgblock1c', {
    y: 190,
    scrollTrigger: {
        trigger: 'body',
        scrub: 1
    }
})

gsap.from('.sub-bgblock2a', {
    y: 100,
    scrollTrigger: {
        trigger: 'body',
        scrub: 1
    }
})

gsap.from('.sub-bgblock2b', {
    y: 250,
    scrollTrigger: {
        trigger: 'body',
        scrub: 1
    }
})

gsap.from('.sub-bgblock2c', {
    y: 190,
    scrollTrigger: {
        trigger: 'body',
        scrub: 1
    }
})

gsap.from('.sub-bgblock3a', {
    y: 100,
    scrollTrigger: {
        trigger: 'body',
        scrub: 1
    }
})

gsap.from('.sub-bgblock3b', {
    y: 250,
    scrollTrigger: {
        trigger: 'body',
        scrub: 1
    }
})

gsap.from('.sub-bgblock3c', {
    y: 190,
    scrollTrigger: {
        trigger: 'body',
        scrub: 1
    }
})

//medium lightbox
MediumLightbox('figure.zoom-effect');

//swup
// const swup = new Swup(); 


swup.on('contentReplaced', () => {
    //hero
    let tl = gsap.timeline()

    tl.from('.hidetext', {
        opacity: 0,
        delay: .15,
        duration: 1,
        stagger: .1,
        y: "125%",
        ease: "power4.out"
    })


    //front page

    oddProj(1);
    evenProj(2);
    oddProj(3);
    evenProj(4);
    oddProj(5);
    evenProj(6);
    oddProj(7);

    // parallax animation

    gsap.from('.project1', {
        y: 300,
        scrollTrigger: {
            trigger: '.projects',
            scrub: 1
        }
    })

    gsap.from('.project2', {
        y: 150,
        scrollTrigger: {
            trigger: 'body',
            scrub: 1
        }
    })

    gsap.from('.project3', {
        y: 200,
        scrollTrigger: {
            trigger: 'body',
            scrub: 1
        }
    })



    gsap.from('.project4', {
        y: 300,
        scrollTrigger: {
            trigger: '.projects',
            scrub: 1
        }
    })

    gsap.from('.project5', {
        y: 200,
        scrollTrigger: {
            trigger: 'body',
            scrub: 1
        }
    })

    gsap.from('.project6', {
        y: 250,
        scrollTrigger: {
            trigger: 'body',
            scrub: 1
        }
    })

    gsap.from('.project7', {
        y: 300,
        scrollTrigger: {
            trigger: 'body',
            scrub: 1
        }
    })


    /////////////////////////////////////// SUB PAGES //
    // SUB PAGES ///////////////////////////////////////
    /////////////////////////////////////// SUB PAGES //

    gsap.from('.sub-hero-img', {
        y: 165,
        scrollTrigger: {
            trigger: 'body',
            scrub: 1
        }
    })

    gsap.from('.sub-text-contain', {
        y: 80,
        scrollTrigger: {
            trigger: 'body',
            scrub: 1
        }
    })

    gsap.from('.sub-bgblock1a', {
        y: 100,
        scrollTrigger: {
            trigger: 'body',
            scrub: 1
        }
    })

    gsap.from('.sub-bgblock1b', {
        y: 250,
        scrollTrigger: {
            trigger: 'body',
            scrub: 1
        }
    })

    gsap.from('.sub-bgblock1c', {
        y: 190,
        scrollTrigger: {
            trigger: 'body',
            scrub: 1
        }
    })

    gsap.from('.sub-bgblock2a', {
        y: 100,
        scrollTrigger: {
            trigger: 'body',
            scrub: 1
        }
    })

    gsap.from('.sub-bgblock2b', {
        y: 250,
        scrollTrigger: {
            trigger: 'body',
            scrub: 1
        }
    })

    gsap.from('.sub-bgblock2c', {
        y: 190,
        scrollTrigger: {
            trigger: 'body',
            scrub: 1
        }
    })

    gsap.from('.sub-bgblock3a', {
        y: 100,
        scrollTrigger: {
            trigger: 'body',
            scrub: 1
        }
    })

    gsap.from('.sub-bgblock3b', {
        y: 250,
        scrollTrigger: {
            trigger: 'body',
            scrub: 1
        }
    })

    gsap.from('.sub-bgblock3c', {
        y: 190,
        scrollTrigger: {
            trigger: 'body',
            scrub: 1
        }
    })

    //medium lightbox
    MediumLightbox('figure.zoom-effect');


});

// swup scroll cheat
swup.on('animationOutDone', () => {
    window.scrollTo(0, 0)   
})

//reload on back
jQuery( document ).ready(function( $ ) {

    //Use this inside your document ready jQuery 
    $(window).on('popstate', function() {
       location.reload(true);
    });
 
 });