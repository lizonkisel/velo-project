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

// Bicycle cards generation //

const bicyclesArray = [
  {
    categoryName: "shosse",
    first: {
      name: "Cervelo Caledonia-5",
      url: "./images/1_1.jpg"
    },
    second: {
      name: "Cannondale Systemsix Himod",
      url: "./images/1_2.jpg"
    },
    third: {
      name: "Trek Domane SL-7",
      url: "./images/1_3.jpg"
    }
  },

  {
    categoryName: "gravel",
    first: {
      name: "Cervelo Aspero GRX 810",
      url: "./images/2_1.jpg"
    },
    second: {
      name: "Specialized S-Works Diverge",
      url: "./images/2_2.jpg"
    },
    third: {
      name: "Cannondale Topstone Lefty 3",
      url: "./images/2_3.jpg"
    }
  },

  {
    categoryName: "TT",
    first: {
      name: "Specialized S-Works Shiv",
      url: "./images/3_1.jpg"
    },
    second: {
      name: "BMC Timemachine 01 ONE",
      url: "./images/3_2.jpg"
    },
    third: {
      name: "Cervelo P-Series",
      url: "./images/3_3.jpg"
    }
  },
]

const bicyclesGallery = document.querySelector(".bicycles__gallery");
const bicyclesMenu = document.querySelector(".bicycles__menu");
const cardTemplate = document.querySelector("#card").content;

function deleteCards() {
  while (bicyclesGallery.hasChildNodes()) {
    bicyclesGallery.removeChild(bicyclesGallery.firstChild);
  }
}


bicyclesMenu.addEventListener("click", function (event) {
  const button = event.target;
  if (!button.classList.contains('bicycles__menu-item')) {
    return;
  }
  deleteCards();
  const buttonName = button.value;
  const neededObject = bicyclesArray.find(function (item) {
    return item.categoryName === buttonName;
  });

  const neededArray = Object.entries(neededObject).slice(1);
  neededArray.forEach(function(item) {;
    const neededImageUrl = item[1].url;
    const neededName = item[1].name;
    console.log(neededImageUrl);
    console.log(neededName);

    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    cardElement.querySelector('.card__image').src = neededImageUrl;
    cardElement.querySelector('.card__name').textContent = neededName;

    bicyclesGallery.append(cardElement);
  })
})

