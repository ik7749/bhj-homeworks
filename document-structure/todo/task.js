const tasksInput = document.querySelector('.tasks__input');
const tasksList = document.querySelector('.tasks__list');
const form = document.querySelector('.tasks__control');

form.onsubmit = function() {
	inputText = tasksInput.value.trim();
	if (inputText === '') {
		return false;
	}
	tasksList.insertAdjacentHTML('afterbegin',
		`<div class='task'>
    <div class='task__title'>${inputText}</div>
    <a href='#' class='task__remove'>&times;</a>
    </div>`);
	form.reset();
	const btnRemove = document.querySelector('.task__remove');
	btnRemove.addEventListener('click', () => {
		btnRemove.parentElement.remove();
	})
	return false;
}