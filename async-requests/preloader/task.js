const loader = document.getElementById('loader');
const items = document.getElementById('items');
const xhr = new XMLHttpRequest();
const url = 'https://students.netoservices.ru/nestjs-backend/slow-get-courses';
xhr.open('GET', url, true);
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
      loader.classList.remove('loader_active');
        const responseObject = JSON.parse(xhr.responseText).response.Valute;
        for (let valute in responseObject) {
            let newValute = document.createElement('div');
            newValute.classList.add('item');
            newValute.innerHTML =
                `<div class='item__code'>
                    ${responseObject[valute].CharCode}
                </div>
                <div class='item__value'>
                    ${responseObject[valute].Value}
                </div>
                <div class='item__currency'>
                    руб.
                </div>`
                items.append(newValute);
        }
    }
})
