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

function createColorSquare() {
    const square = document.createElement("div");
    square.classList.add("square", "blue");
    square.addEventListener("click", ()=> {
        if (square.classList.contains("blue")) {
            square.classList.remove("blue");
            square.classList.add("green");
        } else if (square.classList.contains("green")) {
            square.classList.remove("green");
            square.classList.add("yellow");
        } else if (square.classList.contains("yellow")) {
            square.classList.remove("yellow");
            square.classList.add("blue")
        }

    });

    return square;
}

for (let i = 0; i < 5; i++) {
    const colorSquare = createColorSquare();
    container.appendChild(colorSquare);
}

// 3. Сделать список. По клику на любой из элементов он выделяется красным цветом.
// Если один уже выделен, а кликнули по другому, то выделение с прошлого снимается, и ставится на тот, по которому кликнули.

const wrapper = document.createElement("div");
document.querySelector("body").appendChild(wrapper);

const array = ["Audi", "Porsche", "BMW", "Mercedes", "Toyota", "Nissan"];

let generateList = function(array) {
    const ul = document.createElement("ul");
    array.forEach(function(item) {
        let li = document.createElement("li");
        li.innerText = item;
        li.addEventListener("click", ()=> {
            let selected = ul.querySelectorAll(".selected");
            for(let elem of selected) {
                elem.classList.remove("selected");
            }
            li.classList.add("selected");
        });
        ul.appendChild(li);
    });

    return ul;
};

// function select(li) {
//     let selected = li.querySelectorAll(".selected");
//     for(let elem of selected) {
//         elem.classList.remove("selected");
//     }
//     li.classList.add("selected");
// }

wrapper.appendChild(generateList(array));
