
document.addEventListener('DOMContentLoaded', function () {

    const images = document.querySelectorAll('.lazy');


    const imgOptions = {
        //  threshold:1,
        //  rootMargin: "0px 0px -500px 0px"
    }
    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            else {
                preloadImage(entry.target)
                imgObserver.unobserve(entry.target)
            }
        })
    }, imgOptions)

    images.forEach(image => {
        imgObserver.observe(image)
    })
})

function preloadImage(img) {
    
    const src = img.getAttribute("data-src");
    if (img.tagName == "OBJECT"){
        img.data = src
        img.classList.remove('lazy')
        return 
    }
    if (src) {
        img.src = src
        img.classList.add('image-effect')
    }
   
}