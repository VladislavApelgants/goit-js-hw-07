const textInput = document.querySelector('#name-input')
const textOutput = document.querySelector('#name-output')

const showText = (update) => { textInput.value.trim() !== '' ?  textOutput.textContent = update.target.value : textOutput.textContent = 'незнакомец' }

textInput.addEventListener('input', showText)