
const wrapper = document.querySelector('.images');
const galleryImages = Array.from(document.querySelectorAll('.galleryimage'));

if(localStorage.activeSrc){
  document.body.style.backgroundImage = `url(${localStorage.activeSrc})`;
} else{
  document.body.style.backgroundImage = `url(${galleryImages[0].src})`;
}

wrapper.addEventListener('click', (e) => {
  if(e.target.matches('img')){
    const activeImage = e.target;
    galleryImages.forEach(img => img.classList.remove('active'));
    activeImage.classList.add('active');
    const activeSrc = activeImage.getAttribute('src');
    localStorage.activeSrc = activeSrc;
    document.body.style.backgroundImage = `url(${activeSrc})`
  }
})
