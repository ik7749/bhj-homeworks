const menuLinks = Array.from(document.querySelectorAll('.menu__link'));

menuLinks.forEach((item) => item.onclick = function() {
	let parent = item.parentElement;
	const subMenu = parent.querySelector('.menu');
	if (subMenu) {
		subMenu.classList.toggle('menu_active');
		event.preventDefault();
		return false;
	}
});