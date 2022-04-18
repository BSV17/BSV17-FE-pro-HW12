// 1. Дано 5 квадратов, внутри каждого из которых изначально вписана цифра 0. При клике на любой квадрат цифра в нем увеличивается на один.
// * сделать чтоб внутри квадратов были кнопки +/-

const container = document.createElement("div");
document.querySelector("body").appendChild(container);
container.classList.add("container");


function createSquare() {
    const square = document.createElement("div");
    square.classList.add("square");

    const count = document.createElement("span");
    count.textContent = "0";

    const plus = createButton("+");

    const minus = createButton("-");

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container");

    square.appendChild(count);
    square.appendChild(buttonsContainer);
    buttonsContainer.appendChild(plus);
    buttonsContainer.appendChild(minus);


    function createButton(label) {
        const button = document.createElement("button");
        button.textContent = label;
        button.addEventListener("click", () => {
            let value = Number(count.textContent);
            if (label === "+") {
                value++;
            } else if (label === "-") {
                value--;
            }

            count.textContent = value;
        });

        return button;
    }

    return square;
}

for (let i = 0; i < 5; i++) {
    const square = createSquare();
    container.appendChild(square);
}

// 2. Дано 5 квадратов. Каждый по клику меняет цвет (синий -> зеленый -> желтый)

const colorsArray = ["blue", "green", "yellow"];

function createColorSquare(array) {
    const square = document.createElement("div");
    square.classList.add("square", "blue");
    square.addEventListener("click", () => {
        for (let i = 0; i < array.length; i++) {
            if (square.classList.contains(array[i])) {
                square.classList.remove(array[i]);
                if (array[i + 1] !== undefined) {
                    square.classList.add(array[i + 1]);
                } else {
                    square.classList.add(array[0]);
                }
                return;
            }
        }
    });

    return square;
}

for (let i = 0; i < 5; i++) {
    const colorSquare = createColorSquare(colorsArray);
    container.appendChild(colorSquare);
}

// 3. Сделать список. По клику на любой из элементов он выделяется красным цветом.
// Если один уже выделен, а кликнули по другому, то выделение с прошлого снимается, и ставится на тот, по которому кликнули.

const wrapper = document.createElement("div");
document.querySelector("body").appendChild(wrapper);

const array = ["Audi", "Porsche", "BMW", "Mercedes", "Toyota", "Nissan"];

let generateList = function (array) {
    const ul = document.createElement("ul");
    array.forEach(function (item) {
        let li = document.createElement("li");
        li.innerText = item;
        li.addEventListener("click", () => {
            let selected = ul.querySelectorAll(".selected");
            for (let elem of selected) {
                elem.classList.remove("selected");
            }
            li.classList.add("selected");
        });
        ul.appendChild(li);
    });

    return ul;
};

wrapper.appendChild(generateList(array));
