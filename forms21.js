const form = document.querySelector('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

fetch ("https://httpbin.org/post",
    {
    method: 'POST',    
    body: new FormData(form),
    headers: {
        "Content-Type": "application/x-xxx-form-urlcoded; charset=utf-8"
        },
    })
    .then(response => response.json())
    .then(kotik => {
        console.log(kotik);
    })
    .catch(error => console.log(error));
})