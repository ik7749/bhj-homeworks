const arrPrev = document.querySelector('.slider__arrow_prev');
const arrNext = document.querySelector('.slider__arrow_next');
const sliderItems = Array.from(document.querySelectorAll('.slider__item'));
let currSlide = 0;

arrPrev.onclick = () => {
	currSlide = sliderItems.findIndex((item) =>
		item.className.includes('slider__item_active'));

	sliderItems[currSlide].classList.remove('slider__item_active');

	if (currSlide === 0) {
		currSlide = sliderItems.length - 1;
	} else {
		currSlide -= 1;
	};

	sliderItems[currSlide].classList.add('slider__item_active');
};

arrNext.onclick = () => {
	currSlide = sliderItems.findIndex((item) =>
		item.className.includes('slider__item_active'));

	sliderItems[currSlide].classList.remove('slider__item_active');

	if (currSlide === (sliderItems.length - 1)) {
		currSlide = 0;
	} else {
		currSlide += 1;
	};

	sliderItems[currSlide].classList.add('slider__item_active');
};