const modal = document.getElementById('subscribe-modal');
const btnClose = document.querySelector('.modal__close');

btnClose.addEventListener('click', () => {
	modal.classList.remove('modal_active');
	document.cookie = 'modal_close=true';
});

window.addEventListener('load', () => {
	if (!document.cookie.includes('modal_close=true')) {
		modal.classList.add('modal_active');
	}
});