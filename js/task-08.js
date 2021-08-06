const input = document.querySelector('[type = "number"]');
const create = document.querySelector('[data-action="render"]');
const clear = document.querySelector('[data-action="destroy"]');
const box = document.querySelector('#boxes');

const boxOperations = {
    valueInput: 0,
    getValueInput(e) {
        this.valueInput = e.target.value;
        console.log(`значение valueInput  ${this.valueInput}`)
    },

    createBoxes(amount) {
        amount = boxOperations.valueInput;
        let div;
        let r;
        let g;
        let b;
        let color;

        for (let i = 0; i < amount; i += 1) {
            div = document.createElement('div')

                r = Math.floor(Math.random() * (256)),
                g = Math.floor(Math.random() * (256)),
                b = Math.floor(Math.random() * (256)),
                color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
            div.style.background = color;
       
                div.style.width = '30px'

                div.style.height = '30px'
         
            box.append(div)
        }

    },
    
    destroyBoxes() {
        while (box.firstChild) {
            box.removeChild(box.firstChild);
        }
    }
};

input.addEventListener('change', boxOperations.getValueInput.bind(boxOperations));
create.addEventListener('click', boxOperations.createBoxes.bind(boxOperations.valueInput));
clear.addEventListener('click', boxOperations.destroyBoxes.bind(boxOperations));






