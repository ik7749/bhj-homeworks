const editor = document.querySelector('#editor');

editor.addEventListener('keydown', () => {
	localStorage.setItem('text', editor.value)
})
editor.value = localStorage.getItem('text')