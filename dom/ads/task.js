const arrRotator = Array.from(document.querySelectorAll('.rotator__case'));
let currRotator = 0;

setInterval(() => {
	arrRotator[currRotator].classList.remove('rotator__case_active');
	currRotator = (currRotator + 1) % arrRotator.length;
	arrRotator[currRotator].classList.add('rotator__case_active');
}, 1000);