const userSign = document.getElementById('signin');
const formSign = document.getElementById('signin__form');
const btnSign = document.getElementById('signin__btn');
const welcome = document.getElementById('welcome');
const userIdValue = document.getElementById('user_id');

LogInUser();

btnSign.addEventListener('click', (event) => {
	event.preventDefault();
	const formData = new FormData(formSign);
	const xhr = new XMLHttpRequest();
	const url = 'https://students.netoservices.ru/nestjs-backend/auth';
	xhr.open('POST', url, true);
	xhr.responseType = 'json';
	xhr.send(formData);
	xhr.addEventListener('load', () => {
		response = (xhr.response);
		if (response.success) {
			logInSucces(response.user_id);
			localStorage.setItem('userId', response.user_id);
			formSign.reset();
		} else {
			formSign.login.value = '';
			formSign.password.value = '';
			formSign.reset();
			alert('Неверный логин/пароль');
		};
	});
});

function logInSucces(userId) {
	userSign.classList.remove('signin_active');
	welcome.classList.add('welcome_active');
	userIdValue.innerText = userId;
};

function LogInUser() {
	if (localStorage.getItem('userId')) {
		logInSucces(localStorage.getItem('userId'))
	}
};