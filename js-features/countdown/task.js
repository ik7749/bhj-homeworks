const timerElement = document.getElementById('timer');
const intervalId = setInterval(timer, 1000);
let count = Number(timerElement.textContent);

function timer() {
	count = count - 1;
	timerElement.textContent = count;

	if (count <= 0) {
		clearInterval(intervalId);
		alert('Вы победили в конкурсе!');
		return;
	}
};
