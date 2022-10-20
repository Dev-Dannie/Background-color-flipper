let randomColors = [0, 1, 2, 3 , 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

let btn = document.getElementById('btn');
let color = document.querySelector('.color');

btn.addEventListener('click', () => {
    let colorInit = '#'
    
    for (let i = 0; i<6; i++){
        colorInit += randomColors[getRandom()]
    }
    document.body.style.backgroundColor = colorInit
    color.textContent = colorInit
})

const getRandom = () => {
    return Math.floor(Math.random() * randomColors.length)
}
