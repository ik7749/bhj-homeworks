const btnMenu = document.querySelector('.dropdown__value');
const listMenu = document.querySelector('.dropdown__list');
const arrItems = Array.from(document.querySelectorAll('.dropdown__item'));

function showList() {
	listMenu.classList.toggle('dropdown__list_active');
};

btnMenu.addEventListener('click', showList);

function activeValue(event) {
	event.preventDefault();
	let target = event.target;
	listMenu.classList.remove('dropdown__list_active');
	btnMenu.textContent = event.target.textContent;
	return false;
};

arrItems.forEach(item => {
	item.addEventListener('click', activeValue);
});
