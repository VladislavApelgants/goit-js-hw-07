const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

text.style.fontSize = '50px';

const event = (e) => text.style.fontSize = e.target.value + 'px';

input.addEventListener('input', event)