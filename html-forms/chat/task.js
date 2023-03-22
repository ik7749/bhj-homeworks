const widget = document.querySelector('.chat-widget');
const input = document.querySelector('.chat-widget__input')
const messages = document.querySelector('.chat-widget__messages')
const currTime = new Date().toLocaleTimeString('ru-Ru', {
	hour: '2-digit',
	minute: '2-digit',
});
widget.addEventListener('click', () => {
	widget.classList.add('chat-widget_active')
})

const botMessages = ['Где ваша совесть?',
	'Кто тут?',
	'К сожалению, все операторы сейчас заняты. Не пишите нам больше.',
	'Добрый день! До свидания!',
	'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
	'Мы ничего не будем вам продавать!'
];

input.addEventListener('keydown', sendMessage);

function getRandomMessage() {
	let index = Math.floor(Math.random() * 6);
	let currMessage = botMessages[index];
	bot(currMessage);
}

function bot(currMessage) {
	messages.innerHTML += `<div class='message'>
    <div class='message__time'>${currTime}</div>
    <div class='message__text'>
      ${currMessage}
    </div>
  </div>`;
}

function sendMessage(e) {
	if (e.key === 'Enter' && input.value) {
		messages.innerHTML += `<div class='message message_client'>
    <div class='message__time'>${currTime}</div>
    <div class='message__text'>
      ${input.value}
    </div>
  </div>`;
		input.value = '';
		setTimeout(getRandomMessage());
	}
}