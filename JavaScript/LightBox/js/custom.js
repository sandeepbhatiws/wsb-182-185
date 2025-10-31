
const allImages = document.querySelectorAll('.lightbox-enabled');

allImages.forEach((value,index) => {
    value.addEventListener('click',() => {
        console.log(value.src);
        document.querySelector('.lightbox-container').style.opacity = 1;
        document.querySelector('.lightbox-container').style.visibility = 'visible';
        document.querySelector('.lightbox-image').src = value.src;
        document.querySelector('.lightbox-image-wrapper').style.transform = "scale(1)";
    })
})


document.getElementById('close').addEventListener('click', () => {
    document.querySelector('.lightbox-container').style.opacity = 0;
    document.querySelector('.lightbox-container').style.visibility = 'hidden';
    document.querySelector('.lightbox-image-wrapper').style.transform = "scale(0)";
})