const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    const url = 'https://students.netoservices.ru/nestjs-backend/upload';
    xhr.open('POST', url, true);
    
    xhr.upload.onprogress = function (event) {
        progress.value = (event.loaded / event.total).toFixed(2);
    };

    xhr.send(formData);
});