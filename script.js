const galleryImages = document.querySelectorAll('.galleryimage');

galleryImages.forEach((image) => {
  image.addEventListener('click', () => {
    const previousimage = document.querySelector('.selectedimage');
    if (previousimage){
      previousimage.classList.remove('selectedimage');
    }
    image.classList.add('selectedimage');
    const selectedimageId = image.getAttribute('imgId');
    localStorage.setItem('selectedimageId');
  });
});

