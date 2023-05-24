/*------slider-----------*/
document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    arrows: 'false',
    type: 'loop',
    perPage: 1,
    autoplay: true,
    cover: false,
    interval: 5000,
    pauseOnHover: false,
  })
  splide.mount()
})

/*-------------------------*/
const caccordContent = document.querySelectorAll('.box-show')

for (i = 0; i < caccordContent.length; i++) {
  caccordContent[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}
