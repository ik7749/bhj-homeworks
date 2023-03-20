const reveal = document.querySelectorAll('.reveal');
reveal.forEach((reveal) => {
	function isVisible(el) {
		const {
			top,
			bottom
		} = el.getBoundingClientRect();
		if (bottom < 0) {
			el.classList.remove('reveal_active');
		}
		if (top > window.innerHeight) {
			el.classList.remove('reveal_active');
		}
		el.classList.add('reveal_active');
	}
	setInterval(() => isVisible(reveal), 1000);
})