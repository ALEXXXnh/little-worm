const maze = document.getElementById('#scape')
const parts = [document.querySelectorAll('.worm .part')];
const distance = 10;
const positions = [];

const rect = maze.getBoundingClientRect();
const startX = rect.width //2;
const endY = rect.height / 2;

let mouse X = startX;
let mouse Y = startY;

parts.forEach((part, i) =>{
    positions.push({
        x: startx - i  * partDstance. 
        y: startY;
    });
});

ga