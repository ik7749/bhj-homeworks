const lost = document.getElementById('lost');
const dead = document.getElementById('dead');

function moleHunting() {
	if (this.className.includes('hole_has-mole') === true) {
		dead.textContent = Number(dead.textContent) + 1;
	} else {
		lost.textContent = Number(lost.textContent) + 1;
	};

	if (Number(dead.textContent) === 10) {
		alert('Вы выиграли!');
		lost.textContent = 0;
		dead.textContent = 0;
		return;
	}
	if (Number(lost.textContent) === 5) {
		alert('Вы проиграли');
		lost.textContent = 0;
		dead.textContent = 0;
		return;
	}
};

for (let index = 1; index < 10; index++) {
	const getHole = document.getElementById(`hole${index}`);
	getHole.onclick = moleHunting;
}
