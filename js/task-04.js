const counter = {
    value: 0,

    increment() {
    this.value += 1;
},

    decrement() {
    this.value -= 1;
}

}


const plus = document.querySelector('[data-action="increment"]')
const minus = document.querySelector('[data-action="decrement"]')
const result = document.querySelector('#value')


plus.addEventListener('click', () => {
    counter.increment()
    result.textContent = counter.value
});

minus.addEventListener('click', () => {
    counter.decrement()
    result.textContent = counter.value
});

