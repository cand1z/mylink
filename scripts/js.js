setTimeout(() => {
    const element = document.querySelectorAll("li")
    for (let i = 0; i < element.length; i++){
        element[i].style.opacity = 1
        element[i].style.filter = "blur(0px)"
        element[i].style.backdropFilter = "blur(10px)"
    }
}, 1000)

setTimeout(() => {
    const element = document.querySelector("header")
    element.style.opacity = 1
    element.style.filter = "blur(0px)"
}, 10)
