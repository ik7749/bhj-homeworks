const modal = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const btnMain = document.querySelector('.show-success');
const btnClose = document.querySelectorAll('.modal__close');
modal.classList.add('modal_active');

for (let i = 0; i < btnClose.length; i++) {
	btnClose[i].onclick = modalClose;
}

function modalClose() {
	this.closest('.modal').classList.remove('modal_active');
}

btnMain.onclick = showSuccess;

function showSuccess() {
	modal.classList.remove('modal_active');
	modalSuccess.classList.add('modal_active');
}