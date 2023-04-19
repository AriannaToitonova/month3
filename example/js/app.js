const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabContent = document.querySelectorAll(".tabcontent");

const hideTabContent = () => {
  tabContent.forEach((item) => {
    item.style.display = "none";
  });
  tabs.forEach((item) => {
    item.classList.remove("tabheader__item_active");
  });
};

const showTabContent = (i = 0) => {
  tabContent[i].style.display = "block";
  tabs[i].classList.add("tabheader__item_active");
};

hideTabContent();
showTabContent();

tabsParent.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("tabheader__item")) {
    tabs.forEach((item, i) => {
      if (target === item) {
        console.log(i);
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});


const modal = document.querySelector(".modal");
const modalTrigger = document.querySelector(".btn_white");
const closeModalBtn = document.querySelector(".modal__close");

const openModal = () => {
  modal.classList.add("show");
  modal.classList.remove("hide");
  document.body.style.overflow = "hidden";
};
const closeModal = () => {
  modal.classList.add("hide");
  modal.classList.remove("show");
  document.body.style.overflow = "";
};

modalTrigger.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
  if (event.target == modal) {
    closeModal();
  }
});
function openModalScroll() {
  const page = document.documentElement
  if (page.scrollTop + page.clientHeight >= page.scrollHeight) {
    openModal()

    window.removeEventListener('scroll', openModalScroll)
  }
}
window.addEventListener('scroll', openModalScroll);

//---------------//

const sliderWrapper = document.querySelector('.offer__slider-wrapper');
const slides = Array.from(sliderWrapper.querySelectorAll('.offer__slide'));
const prevButton = document.querySelector('.offer__slider-prev');
const nextButton = document.querySelector('.offer__slider-next');
const currentNumber = document.querySelector('#current');
const totalNumber = document.querySelector('#total');

let slideIndex = 1;
let timerId;

function showSlide(index) {
  if (index < 1) {
    index = slides.length;
  } else if (index > slides.length) {
    index = 1;
  }

  const currentSlide = slides[slideIndex - 1];
  const newSlide = slides[index - 1];
  currentSlide.classList.add('hidden');
  newSlide.classList.remove('hidden');
  currentNumber.textContent = (index < 10 ? '0' : '') + index;
  totalNumber.textContent = (slides.length < 10 ? '0' : '') + slides.length;
  slideIndex = index;
}


function startSlider() {
  timerId = setInterval(nextSlide, 2000);
}

function startTimer() {
  timerId = setTimeout(startSlider, 5000);
}

function nextSlide() {
  showSlide(slideIndex + 1);
}

function prevSlide() {
  showSlide(slideIndex - 1);
}

prevButton.addEventListener('mouseover', () => clearInterval(timerId));
nextButton.addEventListener('mouseover', () => clearInterval(timerId));
prevButton.addEventListener('mouseout', startTimer);
nextButton.addEventListener('mouseout', startTimer);
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

showSlide(slideIndex);
startSlider();
