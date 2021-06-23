//Start Animation
anime.timeline({ loop: false }) // cambiando a true podemos hacer que se repita
    // .add({
    //     targets: '.container-h .line',
    //     opacity: [0.5, 1],
    //     scaleX: [0, 1],
    //     easing: "easeInOutExpo",
    //     duration: 700
    // }).add({
    //     targets: '.container-h .line',
    //     duration: 600,
    //     easing: "easeOutExpo",
    //     translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + "em"
    // }).add({
    //     targets: '.container-h .ampersand',
    //     opacity: [0, 1],
    //     scaleY: [0.5, 1],
    //     easing: "easeOutExpo",
    //     duration: 600,
    //     offset: '-=600'
    // })
    // }).add({ // para que desaparezca
    //     targets: '.container-h',
    //     opacity: 0,
    //     duration: 1000,
    //     easing: "easeOutExpo",
    //     delay: 1000
    .add({
        targets: '.container-a .letters-left',
        opacity: [0, 1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=300',
        delay: 5000
    }).add({
        targets: '.container-a .letters-right',
        opacity: [0, 1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600',
        delay: 500
    }).add({
        targets: '.container-b .letters-left',
        opacity: [0, 1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=300',
        delay: 1000
    }).add({
        targets: '.container-b .letters-right',
        opacity: [0, 1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600',
        delay: 500
    }).add({
        targets: '.container-c-1 .letters-left',
        opacity: [0, 1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=300',
        delay: 1000
    }).add({
        targets: '.container-c-1 .letters-right',
        opacity: [0, 1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600',
        delay: 500
    }).add({
        targets: '.container-c-2 .letters-left',
        opacity: [0, 1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=300',
        delay: 500
    }).add({
        targets: '.container-c-2 .letters-right',
        opacity: [0, 1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600',
        delay: 500
    }).add({
        targets: '.container-c-3 .letters-left',
        opacity: [0, 1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=300',
        delay: 500
    }).add({
        targets: '.container-c-3 .letters-right',
        opacity: [0, 1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600',
        delay: 500
    }).add({
        targets: '.container-d .letters-left',
        opacity: [0, 1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=300',
        delay: 800
    }).add({
        targets: '.container-d .letters-right',
        opacity: [0, 1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600',
        delay: 500
    }).add({
        targets: '.container-e-1 .letters-left',
        opacity: [0, 1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=300',
        delay: 1000
    }).add({
        targets: '.container-e-1 .letters-right',
        opacity: [0, 1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600',
        delay: 500
    }).add({
        targets: '.container-e-2 .letters-left',
        opacity: [0, 1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=300',
        delay: 500
    }).add({
        targets: '.container-e-2 .letters-right',
        opacity: [0, 1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600',
        delay: 500
    }).add({
        targets: '.container-e-3 .letters-left',
        opacity: [0, 1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=300',
        delay: 500
    }).add({
        targets: '.container-e-3 .letters-right',
        opacity: [0, 1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600',
        delay: 500
    });
