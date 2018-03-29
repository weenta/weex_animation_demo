// 入场动画(右->左)
const slideIn = (el)=>{
    const animation = weex.requireModule('animation')
    animation.transition(el, {
        styles: {
            transform: 'translateX(750px)',
            transformOrigin: '0'
        },
        duration: 0, //ms
        timingFunction: 'linear',
        delay: 0 //ms
    })

    setTimeout(() => {
        animation.transition(el, {
            styles: {
                transform: 'translateX(0)',
                transformOrigin: '0'
            },
            duration: 180, //ms
            timingFunction: 'linear',
            delay: 0 //ms
        })
    }, 0);
}

// 出场动画(左->右)
const slideOut = (el)=>{
    const animation = weex.requireModule('animation')
    animation.transition(el, {
        styles: {
            transform: 'translateX(750px)',
            transformOrigin: '0'
        },
        duration: 180, //ms
        timingFunction: 'linear',
        delay: 0 //ms
    })
}


// toast
const toast =  (msg)=> {
    const modal = weex.requireModule('modal')
    modal.toast({
        message: msg,
        duration: 0.7
    })
}

module.exports = {
    slideIn,
    slideOut,
    toast,
}