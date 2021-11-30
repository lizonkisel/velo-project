// Bicycle cards generation //

const bicyclesArray = [
  {
    categoryName: "shosse",
    first: {
      name: "Cervelo Caledonia-5",
      url: "./images/1_1.jpg",
      link: "https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN"
    },
    second: {
      name: "Cannondale Systemsix Himod",
      url: "./images/1_2.jpg",
      link: "https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J"
    },
    third: {
      name: "Trek Domane SL-7",
      url: "./images/1_3.jpg",
      link: "https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF"
    }
  },

  {
    categoryName: "gravel",
    first: {
      name: "Cervelo Aspero GRX 810",
      url: "./images/2_1.jpg",
      link: "https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE"
    },
    second: {
      name: "Specialized S-Works Diverge",
      url: "./images/2_2.jpg",
      link: "https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9"
    },
    third: {
      name: "Cannondale Topstone Lefty 3",
      url: "./images/2_3.jpg",
      link: "https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8"
    }
  },

  {
    categoryName: "TT",
    first: {
      name: "Specialized S-Works Shiv",
      url: "./images/3_1.jpg",
      link: "https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9"
    },
    second: {
      name: "BMC Timemachine 01 ONE",
      url: "./images/3_2.jpg",
      link: "https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835"
    },
    third: {
      name: "Cervelo P-Series",
      url: "./images/3_3.jpg",
      link: "https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q"
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
  makeLabelactive(button);
  const buttonName = button.value;
  const neededObject = bicyclesArray.find(function (item) {
    return item.categoryName === buttonName;
  });

  const neededArray = Object.entries(neededObject).slice(1);
  neededArray.forEach(function(item) {;
    const neededImageUrl = item[1].url;
    const neededName = item[1].name;
    const neededLink = item[1].link;

    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    cardElement.querySelector('.card__image').src = neededImageUrl;
    cardElement.querySelector('.card__name').textContent = neededName;
    cardElement.querySelector('.card__name').href = neededLink;

    bicyclesGallery.append(cardElement);
  })
});

function makeLabelactive(button) {
  const menuLabels = bicyclesMenu.querySelectorAll('.bicycles__menu-label');
  menuLabels.forEach(function(item) {
    item.classList.remove('bicycles__menu-label_active');
  })
  const label = bicyclesMenu.querySelector(`[for="${button.id}"]`);
  label.classList.add('bicycles__menu-label_active');
}

bicyclesMenu.querySelector('.bicycles__menu-item').checked = true;


// Swiper

const swiper = new Swiper('.covers__gallery-wrapper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 2,
  spaceBetween: 40,
  speed: 400,

  // Navigation arrows
  navigation: {
    nextEl: '.covers__next',
    prevEl: '.covers__prev',
  },

});

const coversTitle = document.querySelector('.covers__title');
const coversDescription = document.querySelector('.covers__description');

const coversArray = [
  {
    title: "Шоссе",
    description: "На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно."
  },

  {
    title: "Грэвел",
    description: "Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью."
  },

  {
    title: "ТТ",
    description: "ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный."
  }
];

swiper.on('slideChange', function () {
  const currentIndex = this.realIndex;

  coversTitle.textContent = coversArray[currentIndex].title;
  coversDescription.textContent = coversArray[currentIndex].description;
});


// Header scrollIntoView

const headerMenuCovers = document.querySelector('.header__link_covers');
const headerMenuBicycles = document.querySelector('.header__link_bicycles');
const headerMenuTrainings = document.querySelector('.header__link_trainings');

const covers = document.querySelector('.covers');
const bicycles = document.querySelector('.bicycles');
const trainings = document.querySelector('.trainings');

headerMenuCovers.addEventListener('click', function() {
  toScrollIntoView(covers)
});

headerMenuBicycles.addEventListener('click', function() {
  toScrollIntoView(bicycles)
});

headerMenuTrainings.addEventListener('click', function() {
  toScrollIntoView(trainings)
});

function toScrollIntoView(element) {
  element.scrollIntoView({block: "start", behavior: "smooth"})
};

// footer form

const footerForm = document.querySelector('.footer__form');
const footerInput = document.querySelector('.footer__input');
const footerSubmit = document.querySelector('.footer__submit');
const footerAlert = document.querySelector('.footer__alert');

footerForm.reset();

footerInput.addEventListener('focus', function() {
  footerSubmit.style.opacity = 1;
  footerAlert.style.opacity = 0;
})

footerInput.addEventListener('blur', function() {
  footerSubmit.style.opacity = 0;
})

footerSubmit.addEventListener('click', function(evt) {
  evt.preventDefault();
  if (footerInput.checkValidity() === true) {
    footerInput.value = "Круто!";
    footerInput.setAttribute('disabled', 'disabled');
    setTimeout(clearFooterInput, 2000);
  } else {
    footerAlert.style.opacity = 1;
  }
})

function clearFooterInput() {
  footerInput.value = "";
  footerInput.removeAttribute('disabled', 'disabled');
}

// color mode switcher

const switcher = document.querySelector('.switcher');
const switcherButtons = document.querySelectorAll('.switcher__button');
const switcherElement = document.querySelector('.switcher__element');

switcherButtons.forEach(function(item) {
  console.log(item);
  const switcherLabel = switcher.querySelector(`[for="${item.id}"]`);

  item.addEventListener('change', function() {
    if (switcherLabel.classList.contains('switcher__label_light')) {
      switcherElement.style.transform = "translateX(0px)";
      styleLight.media = "all";
      styleDark.media = "not all";
      localStorage.setItem('color-scheme', 'light');
    } else {
      switcherElement.style.transform = "translateX(22px)"
      styleDark.media = "all";
      styleLight.media = "not all";
      localStorage.setItem('color-scheme', 'dark');
    }
  })
})

const switcherButtonLight = document.querySelectorAll('.switcher__button[value=light]');
const switcherButtonDark = document.querySelectorAll('.switcher__button[value=dark]');
const styleLight = document.querySelector('[media*=prefers-color-scheme][media*=light]');
const styleDark = document.querySelector('[media*=prefers-color-scheme][media*=dark]');
const savedStyle = localStorage.getItem('color-scheme');

if (savedStyle === 'light') {
  styleLight.media = "all";
  styleDark.media = "not all";
  switcherButtonLight.checked = true;
  switcherElement.style.transform = "translateX(0px)"
} else {
  styleDark.media = "all";
  styleLight.media = "not all";
  localStorage.setItem('color-scheme', 'dark');
  switcherButtonDark.checked = true;
  switcherElement.style.transform = "translateX(22px)"
}





