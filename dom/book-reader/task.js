const size = document.querySelectorAll('.font-size');
let arrSize = Array.from(size);
const arrLinks = Array.from(document.querySelectorAll('a'));
const book = document.querySelector('.book');
arrSize.forEach((item) => item.addEventListener('click', () => {
	let index = arrSize.findIndex((item) => item.className.includes('font-size_active'));
	arrSize[index].classList.remove('font-size_active');
	let fontData = arrSize[index].getAttribute('data-size');
	if (fontData === 'small') {
		book.classList.remove('book_fs-big');
		book.classList.add('book_fs-small')
	} else if (fontData === 'big') {
		book.classList.add('book_fs-big');
		book.classList.remove('book_fs-small')
	} else {
		book.classList.remove('book_fs-small')
		book.classList.remove('book_fs-big');
	}
	event.preventDefault();
	item.classList.add('font-size_active');
}));

arrLinks.forEach((item) => item.onclick = function() {
	return false;
})