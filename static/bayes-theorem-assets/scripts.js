const colorsList = [
    "#E63946",
    "#A8DADC",
    "#F1FAEE",
    "#FDB9B5"
]


let count = 0;
const canvas = document.getElementById("render");
const ctx = canvas.getContext('2d');

canvas.innerWidth = canvas.width;
canvas.innerHeight = canvas.height;

window.addEventListener("resize", function () {
    canvas.innerWidth = canvas.width;
    canvas.innerHeight = canvas.height;
})

let ph = 0.05;
let peh = 0.4;
let penh = 0.2;
let ratio = 0;

function draw() {
    //P(-H)
    ctx.fillStyle = colorsList[2];
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    //P(H)
    ctx.fillStyle = colorsList[3];
    ctx.fillRect(0, 0, canvas.width * ph, canvas.height)

    //P(E|H)
    ctx.fillStyle = colorsList[0];
    ctx.fillRect(0, canvas.height - (canvas.height * peh), canvas.width * ph, canvas.height * peh);

    //P(E/-H)
    ctx.fillStyle = colorsList[1];
    ctx.fillRect(canvas.width * ph, canvas.height - (canvas.height * penh), canvas.width * (1 - ph), canvas.height * penh);

    //P(E|H)*P(H)

    ratio = ph * peh / ((ph * peh) + ((1 - ph) * penh)) * 100;
    document.getElementById('inside-bar').style.width = `${ratio}%`;
    document.getElementById('librarian').textContent = `${ratio.toFixed(0)}%`;
    document.getElementById('farmer').textContent = `${100 - ratio.toFixed(0)}%`;
}


noUiSlider.create(slider_ph, {
    start: ph,
    connect: [true, false],
    step: 0.05,
    range: {
        'min': 0,
        'max': 1,
    },
    tooltips: true,
    format: wNumb({
        prefix: 'P(chill): '
    }),
});

slider_ph.noUiSlider.on('update', (values) => {
    ph = values[0].split(" ")[1];
    draw();
});

noUiSlider.create(slider_peh, {
    start: peh,
    connect: [true, false],
    step: 0.1,
    range: {
        'min': 0,
        'max': 1,
    },
    tooltips: true,
    direction: 'rtl',
    orientation: 'vertical',
    format: wNumb({
        prefix: 'P(netflix|chill): '
    }),
});

slider_peh.noUiSlider.on('update', (values) => {
    peh = values[0].split(" ")[1];
    draw();
});

noUiSlider.create(slider_penh, {
    start: penh,
    connect: [true, false],
    step: 0.1,
    range: {
        'min': 0,
        'max': 1,
    },
    tooltips: true,
    direction: 'rtl',
    orientation: 'vertical',
    format: wNumb({
        prefix: 'P(netflix|friend): '
    }),
});

slider_penh.noUiSlider.on('update', (values) => {
    penh = values[0].split(" ")[1];
    draw();
});

for (let i = 1; i < 11; i++) {
    document.getElementById('people-grid').innerHTML += `<div class="person-row"></div>`
    for (let j = 0; j < 20; j++) {
        document.getElementById('people-grid').lastElementChild.innerHTML += `
        <div class="icon-person">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="male" class="svg-inline--fa fa-male fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M96 0c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64S60.654 0 96 0m48 144h-11.36c-22.711 10.443-49.59 10.894-73.28 0H48c-26.51 0-48 21.49-48 48v136c0 13.255 10.745 24 24 24h16v136c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24V352h16c13.255 0 24-10.745 24-24V192c0-26.51-21.49-48-48-48z"></path></svg>
        </div>
        `
        count += 1;
    }

}

draw();