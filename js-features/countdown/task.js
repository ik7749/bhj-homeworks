const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

cookie.onclick = function() {
	let count = Number(counter.textContent);
	counter.textContent = count + 1;

	if (count % 2 === 0) {
		cookie.width = 200;
		cookie.height = 200;
	} else {
		cookie.width = 220;
		cookie.height = 220;
	}
}
