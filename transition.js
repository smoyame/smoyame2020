
const animationEnter = (container) => {
    return gsap.from(container, { autoAlpha: 0, duration: 2, clearProps: 'all'})
}

const animationLeave = (container) => {
    return gsap.to(container, { autoAlpha: 0, duration: 2, clearProps: 'all', })
}

barba.init({
    transitions: [
        {
            once({next}){
                animationEnter(next.container);
            },
            leave({current}){
                console.log('leaving')
                animationLeave(current.container, done);
            },
            enter({next}){
                console.log('entering')
                animationEnter(next.container);
            }

        }
    ]
})