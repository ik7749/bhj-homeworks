const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
const xhr = new XMLHttpRequest();
const url = 'https://students.netoservices.ru/nestjs-backend/poll';
xhr.open('GET', url, true);
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let responseObject = JSON.parse(xhr.responseText).data;
        pollTitle.innerText = responseObject.title;
        for (let answer of responseObject.answers) {
            pollAnswers.innerHTML +=
            `<button class='poll__answer'>
                ${answer}
            </button>`
        }
    }
})

pollAnswers.addEventListener('click', () => {
    alert('Спасибо, ваш голос засчитан!')
})