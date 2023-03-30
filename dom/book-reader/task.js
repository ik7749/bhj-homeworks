Array.from(document.querySelectorAll('.font-size')).forEach((item) => {
	item.addEventListener('click', (event) => {
		event.preventDefault();
		Array.from(document.querySelectorAll('.font-size')).forEach((fontSizeA) => fontSizeA.classList.remove('font-size_active'));
		let fontData = event.target.dataset.size;
		const book = document.querySelector('.book__content');
		if (fontData === 'small') {
			event.target.classList.remove('font-size_active');
			book.classList.remove('book_fs-big');
			book.classList.add('book_fs-small');
		} else if (fontData === 'big') {
			event.target.classList.remove('font-size_active');
			book.classList.remove('book_fs-small');
			book.classList.add('book_fs-big');
		} else {
			event.target.classList.add('font-size_active');
			book.classList.remove('book_fs-small');
			book.classList.remove('book_fs-big');
		}
	});
});