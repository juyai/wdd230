const imagesToLoad = document.querySelectorAll(".pics");
console.log(imagesToLoad);

const imageOption = {
    threshold : 0,
    rootMargin : "0px 0px 30px 0px"
};

const loadImage = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    }
}

if('IntersectionObserver' in window){
    const imageObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting){
                loadImage(item.target);
                observer.unobserve(item.target);
            }
        })
    }, imageOption);

    imagesToLoad.forEach((image) => {
        imageObserver.observe(image);
    });
} else {
    imagesToLoad.forEach((image) => {
        loadImage(image);
    });
}