const cursor = document.querySelector('.cursor')
window.addEventListener('mousemove', (e)=>{
    cursor.style.left = e.clientX +'px';
    cursor.style.top = e.clientY +'px';
});


for (let i = 1; i < positions.length; i++) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * followSpeed;
        positions[i].y += (positions[i - 1].y - positions[i].y) * followSpeed;
    }
    
wormParts.forEach((part, i) => {
        part.style.left = `${positions[i].x}px`;
        part.style.top = `${positions[i].y}px`;
        part.style.transform = 'translate(-50%, -50%)';
    });

    requestAnimationFrame(animate);


animate();








MY ACTUAL JS

                const maze = document.getElementById('#scape')
                const parts = [document.querySelectorAll('.worm .part')];
                const partDstance = 10;
                const positions = [];

                const rect = maze.getBoundingClientRect();
                const startX = rect.width / 2;
                const startY = rect.height / 2;

                let mouseX = startX;
                let mouseY = startY;

                parts.forEach((part, i) =>{
                    positions.push({
                        x: startX - i  * partDstance,
                        y: startY
                    });
                });

                maze.addEventListener('mousemove', (e) => {
                    const rect = maze.getBoundingClientRect();
                    mouseX = e.clientX - rect.left;
                    mouseY = e.clientY - rect.top;
                });

                function animate(){
                    const face  = positions[0];
                face.x += (mouseX - face.x) * followSpeed;
                face.y += (mouseY - face.y) * followSpeed;
                }









******COPILOT JAVASCRIP GOTTA STARE AT IT UNTIL I UNDERSTAND WTH IT MEANS******
const maze = document.getElementById('scape');
const wormParts = [...document.querySelectorAll('#worm .face, #worm .part')];

const spacing = 12;
                                        const followSpeed = 0.35;
                                        const positions = wormParts.map((_, i) => ({
                                            x: maze.clientWidth / 2 - i * spacing,
                                            y: maze.clientHeight / 2
                                        }));

let mouseX = positions[0].x;
let mouseY = positions[0].y;

maze.addEventListener('mousemove', (event) => {
    const rect = maze.getBoundingClientRect();
    mouseX = event.clientX - rect.left - maze.clientLeft;
    mouseY = event.clientY - rect.top - maze.clientTop;
});

function animate() {
    // The face follows the mouse.
    positions[0].x += (mouseX - positions[0].x) * followSpeed;
    positions[0].y += (mouseY - positions[0].y) * followSpeed;

    // Each body part follows the part ahead of it.
    for (let i = 1; i < positions.length; i++) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * followSpeed;
        positions[i].y += (positions[i - 1].y - positions[i].y) * followSpeed;
    }

    wormParts.forEach((part, i) => {
        part.style.left = `${positions[i].x}px`;
        part.style.top = `${positions[i].y}px`;
        part.style.transform = 'translate(-50%, -50%)';
    });

    requestAnimationFrame(animate);
}

animate();