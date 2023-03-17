const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

cookie.onclick = function() {
	let count = Number(counter.textContent);
	counter.textContent = count + 1;
	cookie.width = count % 2 === 0 ? 200 : 220;
}
