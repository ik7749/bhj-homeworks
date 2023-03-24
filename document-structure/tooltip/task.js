const arrTooltips = Array.from(document.querySelectorAll('.has-tooltip'));
const arrLinks = Array.from(document.querySelectorAll('a'));

const tooltip = document.createElement('div');
tooltip.className = 'tooltip';

arrTooltips.forEach((item) => item.addEventListener('click', () => {
	if (tooltip.innerText == item.title) {
		tooltip.classList.toggle('tooltip_active');
	} else {
		tooltip.innerText = item.title;
		tooltip.classList.add('tooltip_active');
		let coords = getCoords(item);
		tooltip.style.top = coords.bottom + 'px';
		tooltip.style.left = coords.left + 'px';
		item.insertAdjacentElement('afterend', tooltip);
	}
}));

arrLinks.forEach((link) => link.onclick = function() {
	if (link.title != '') {
		return false;
	}
})

function getCoords(item) {
	let box = item.getBoundingClientRect();

	return {
		bottom: box.bottom + window.pageYOffset,
		left: box.left + window.pageXOffset
	};
}