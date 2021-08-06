const input = document.querySelector('[type = "number"]');
const create = document.querySelector('[data-action="render"]');
const clear = document.querySelector('[data-action="destroy"]');
const box = document.querySelector('#boxes');

const boxOperations = {
    valueInput: 0,
    getValueInput(e) {
        this.valueInput = e.target.value;
        console.log(`значение valueInput  ${this.valueInput}`);
    },

    createBoxes(amount) {
        amount = boxOperations.valueInput;
        let div;
        let r;
        let g;
        let b;
        let color;
        let minWidth = 30;

        for (let i = 0; i < amount; i += 1) {

            div = document.createElement('div');

            r = Math.floor(Math.random() * (256));
            g = Math.floor(Math.random() * (256));
            b = Math.floor(Math.random() * (256));
                color = '#' + r.toString(16) + g.toString(16) + b.toString(16);
            div.style.background = color;

            for (let q = minWidth; q < box.children.length * 11 + 30; q +=10 ) {
                div.style.width = q + 'px';
                div.style.height = q + 'px';
            };

            box.append(div);
        }

    },
    
    destroyBoxes() {
        while (box.firstChild) {
            box.removeChild(box.firstChild);
        }
    },
};

input.addEventListener('change', boxOperations.getValueInput.bind(boxOperations));
create.addEventListener('click', boxOperations.createBoxes.bind(boxOperations));
clear.addEventListener('click', boxOperations.destroyBoxes.bind(boxOperations));