setTimeout(() => {
    const element = document.querySelectorAll("li")
    console.log("elements", element.length)
    for (let i = 0; i < element.length; i++){
        element[i].style.opacity = 1
        element[i].style.filter = "blur(0px)"
        element[i].style.backdropFilter = "blur(10px)"
    }
}, 1000)

