let position = 0;

const gallery = document.querySelector('.covers__gallery');
const galleryItem = document.querySelector('.covers__image');
const galleryItemWidth = galleryItem.offsetWidth;

let borderValue = galleryItemWidth * 3 + 40 * 2;

const btnPrev = document.querySelector('.covers__prev');
const btnNext = document.querySelector('.covers__next');

function test() {
  console.log(position === ((galleryItemWidth + 40) * (-2)));
  if (position === 0) {
    /* btnPrev.setAttribute("disabled", "disabled");
    btnPrev.removeAttribute("disabled", "disabled"); */
    btnPrev.disabled = true;
    console.log('one');
  } else if (position > ((galleryItemWidth + 40) * (-2))) {
    btnPrev.disabled = false;
    btnNext.disabled = false;
    console.log('two');
  } else if (position === ((galleryItemWidth + 40) * (-2))) {
    btnNext.disabled = true;
    console.log('three');
  }
}

btnPrev.addEventListener('click', function () {
  position += galleryItemWidth + 40;
  console.log(position);
  gallery.style.transform = `translateX(${position}px)`;
  test();
});

btnNext.addEventListener('click', function () {
  position -= galleryItemWidth + 40;
  console.log(position);
  gallery.style.transform = `translateX(${position}px)`;
  test();
});



