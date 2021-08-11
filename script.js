'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const sliders = document.querySelectorAll('.slide');
const dotContainer = document.querySelector('.dots')
// const slider = document.querySelector('.slider')
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

console.log(document.head)

const header = document.querySelector('.header')
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

document.getElementsByClassName('btn')

// Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = "We use cookies for improved functionality and analytics";
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close--cookie">Got it!</button>'
// adds as first child
// header.prepend(message)
// adds as last child (copy)
// header.append(message.cloneNode(true))

header.append(message);
// before header
// header.before(message)
// after header
// header.after(message);

// Delete elements

document.querySelector('.btn--close--cookie').addEventListener('click', function() {
  message.remove();
});

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// inline styles
console.log(message.style.color);
console.log(message.style.backgroundColor);
console.log(getComputedStyle(message).color);
// parseFloat, parseInt
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'limegreen')

const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);


logo.alt = 'Beautiful minimalist logo';

console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist')

console.log(logo.src);
console.log( logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href)
console.log(link.getAttribute('href'));

console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

const h1 = document.querySelector('h1');

const alerth1 = function(e){ 
  alert('addEventLister: Great! You are reading the heading')
  // h1.removeEventListener('mouseenter', alerth1)
}

// h1.addEventListener('mouseenter', alerth1);

// h1.onmouseenter =  function(e){ 
//   alert('addEventLister: Great! You are reading the heading')
// };
// setTimeout(() => h1.removeEventListener('mouseenter', alerth1), 3000)

//rgb(255,255,255)

// document.querySelector('.nav__link').addEventListener('click', function(e) {
//   console.log("LINK", e.target);
//   this.style.backgroundColor = randomColor()
// })

// document.querySelector('.nav__links').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor()
// })

// document.querySelector('.nav').addEventListener('click', function(e) {
//   this.style.backgroundColor = randomColor()

// })

// Page Navigation


const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function(e) { 
  const s1coords = section1.getBoundingClientRect();
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  })
  
})

// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
//     const id = this.getAttribute('href')
//     document.querySelector(id).scrollIntoView({behavior:'smooth'})
//   })
// })

// 1. Add event listener to common parent element
// 2. Determine what element originated the event 

document.querySelector('.nav__links').addEventListener('click', function(e){ 
  e.preventDefault();

  if(e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior:'smooth'})
  }

})

// Going downwards: child 
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.textContent);
console.log(h1.children);
// h1.firstElementChild.style.color = 'white'
// h1.lastElementChild.style.color = 'orangered'

// Going upwards: parents 

console.log(h1.parentNode);
console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)'


// h1.closest('h1').style.background = 'var(--gradient-primary)'

// Going sideways: siblings

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function(el) { 
  if(el !== h1) el.style.transform = 'scale(0.5)';
})

// Tabbed component

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content')

// tabs.forEach(t=>t.addEventListener('click', () => console.log('TAB')));

tabsContainer.addEventListener('click', function(e) { 
  e.preventDefault();
  const clicked = e.target.closest('.operations__tab')

  // Guard clause
  if(!clicked) return;

  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  // Active Tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'))
  clicked.classList.add('operations__tab--active');

  document.querySelector(`.operations__content--${clicked.dataset.tab}`)
  .classList
  .add('operations__content--active');
});

// Menu fade animation 
const handleHover = function(e){ 
  if(e.target.classList.contains('nav__link')) { 
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach(el => { 
      if(el !== link) { 
        el.style.opacity = this;
        logo.style.opacity = this;
      }
    })
  }
}

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// // Sticky navigation
// const initialCoords = section1.getBoundingClientRect()
// window.addEventListener('scroll', function(e) { 
//   if(window.scrollY > initialCoords.top) nav.classList.add('sticky') 
//   else nav.classList.remove('sticky')

// })

// const obsCallback = function(entries, observer) { 
//   entries.forEach(entry => console.log(entry));
// }

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// }
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);


const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function(entries) { 
  const [entry] = entries;
  console.log(entry);
  if(!entry.isIntersecting)
  nav.classList.add('sticky')
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {root: null, threshold: 0, rootMargin: `${navHeight}px`});

headerObserver.observe(header);

const revealSection = function(entries, observer) { 
  const [entry] = entries;
  if(!entry.isIntersecting) return;
  else entry.target.classList.remove('section--hidden')

  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {root: null, threshold: 0.15})
allSections.forEach(function(section) {
  sectionObserver.observe(section)
  section.classList.add('section--hidden')

})

const loadImg = function(entries, observer) { 
  const [entry] = entries;

  if(!entry.isIntersecting) return;
  else 
  entry.target.src = entry.target.dataset.src;
  entry.target.classList.remove('lazy-img')
  entry.target.addEventListener('load', function() {})
}
// Lazy loading images 
const imgTargets = document.querySelectorAll('img[data-src]')

const imgObserver = new IntersectionObserver(loadImg, 
  {root: null, 
  threshold: 0,
  rootMargin: '200px'});

imgTargets.forEach(img => imgObserver.observe(img));

// Slider 
const slider = function() {
let currSlide = 0;
const maxSlide = sliders.length - 1;

const btnLeft = document.querySelector('.slider__btn--left')
const btnRight = document.querySelector('.slider__btn--right')

// Functions
const createDots = function() {
  sliders.forEach(function(_, i) {
    dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
  });
};


const activateDot = function(slide) {
  document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));

  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
}
const goToSlide = function(slide){ 
  sliders.forEach((s, i) => s.style.transform = `translateX(${(i - currSlide)* 100}%)`);

}


const nextSlide = function(){ 
  if(currSlide === maxSlide){ 
    currSlide = 0;
  }
  currSlide++;

  goToSlide(currSlide)
  activateDot(currSlide);
}
const prevSlide = function() {
  if(currSlide === 0){ 
    currSlide = maxSlide;
  }
  currSlide--
  goToSlide(currSlide)
  activateDot(currSlide);

}

const init = function() {
  goToSlide(0);
  createDots();
  activateDot(0)
};
init();

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

document.addEventListener('keydown', function(e){ 
  if(e.key === 'ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide();
})

dotContainer.addEventListener('click', function(e) {
  if(e.target.classList.contains('dots__dot')) {
    currSlide = e.target.dataset.slide;
    goToSlide(currSlide);
    activateDot(currSlide)
  }
})
};
slider();

document.addEventListener('DOMContentLoaded', function(e) { 
console.log('HTML parsed and Dom tree built!');
})

window.addEventListener('load', function(e){ 
  console.log('Page fully loaded', e);
})

//Leave changes popup

// window.addEventListener('beforeunload', function(e) { 
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = ''
// })