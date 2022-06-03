// get all images with data-src attribute
const imagesToLoad = document.querySelectorAll("img[data-src]");

// optional parameters being set for the IntersectionalObserver
const imageOption = {
    threshold : 0,
    rootMargin : "0px 0px 50px 0px"
};

const loadImage = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    }
}

// first check to see if IntersectionObserver is observed
if('IntersectionObserver' in window){
    const imageObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if(item.isIntersecting){
                loadImage(item.target);
                observer.unobserve(item.target);
            }
        })
    }, imageOption);

    // loop through each img on check status and load if necessary
    imagesToLoad.forEach((image) => {
        imageObserver.observe(image);
    });
} else {
    //Just load all images if not supported.
    imagesToLoad.forEach((image) => {
        loadImage(image);
    });
}