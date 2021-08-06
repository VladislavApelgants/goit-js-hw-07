const input = document.querySelector('#validation-input');

const inputValue = (e) => {
if (e.target.value.trim().length === 6) {
    input.classList.contains('invalid') ? input.classList.replace('invalid', 'valid') : input.classList.add('valid');
} else if (e.target.value.trim().length === 0) {
    input.classList.remove('invalid', 'valid');
}
else {
    input.classList.contains('valid') ? input.classList.replace('valid', 'invalid') : input.classList.add('invalid');
}
}
     
input.addEventListener('change', inputValue);


