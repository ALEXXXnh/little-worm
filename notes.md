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
const maze = document.getElementById('scape'); 0k
const wormParts = [...document.querySelectorAll('#worm .face, #worm .part')]; 0k

const spacing = 12; forgot
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
}); 0k

function animate() {
    // The face follows the mouse.
    positions[0].x += (mouseX - positions[0].x) * followSpeed;
    positions[0].y += (mouseY - positions[0].y) * followSpeed;

    // Each body part follows the part ahead of it.
    for (let i = 1; i < positions.length; i++) {
        positions[i].x += (positions[i - 1].x - posi
        tions[i].x) * followSpeed;
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
























****MY TRASH CODE LMAO
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








                enough i dont have time fr to polish this more ill try later but maybe too late for submission it was extremly hard idk why










































THE TRY OF POLISHED CODE OMG*********quiet important


    //ez pc
                //not ez pc anymore i dont get why this ddoesnt work
                const maze = document.getElementById('scape2')
                const parts = [...document.querySelectorAll('#worm .face, #worm .part')];
                //const partDstance = 10; maybe this too?
                //const positions = []; gotta hide mine
                        //HERE IR THE PROBLEM OFC
                //so copilot said i shoul create a const and define followspeed i can do that idk why but may make this move
                const spacing = 18;
                const followSpeed = 0.2;
                const positions = parts.map((_, i) => ({
                x: maze.clientWidth / 2 - i * spacing,
                y: maze.clientHeight / 2
                }));
                //i think there i nedd to add somthin
                let mouseX = positions[0].x;
                let mouseY = positions[0].y;
                //got it perfectly  but i think there is a problem
                maze.addEventListener('mousemove', (e) => {
                    const rect = maze.getBoundingClientRect();
                    mouseX = e.clientX - rect.left //- maze.clientLeft
                    ;
                    mouseY = e.clientY - rect.top //- maze.clientTop
                    ;
                });
                //ifeel like i need more here uhh im stressed
                function collidesAt(x, y, element){
                    const rect = maze.getBoundingClientRect();
                    const mazeRect = maze.getBoundingClientRect();


                
                //im dying
                const currentX = rect.left + rect.width / 2;
                const currentY = rect.top + rect.height / 2;

                    const dx = x - positions[0].x;
                    const dy = y - positions[0].y;

                    const nextLeft = currentX + dx - rect.width / 2;
                    const nextRight = nextLeft + rect.width;

                    const nextTop = currentY + dy - rect.height / 2;
                    const nextBottom = nextTop + rect.height;
                    //i feel like the yandere simulator code

                    return [...walls].some((wall) => {
                        //i had typos here
                    const w = wall.getBoundingClientRect();
                //uh i forgot what i was doing and i think isnt working
                    //two videos had different explanations im confused
                return (
                    Rect.left < w.right &&
                    Rect.right > w.left &&
                    Rect.top < w.bottom &&
                    Rect.bottom > w.top
                );
                }); 
                }

            
        
                //not so lost atp 
                //forgot i think my big problems start here
                function animate() {

                const oldX = positions[0].x;
                const oldY = positions[0].y;

                const nextX = oldX + (mouseX - oldX) * followSpeed;
                const nextY = oldY + (mouseY - oldY) * followSpeed;

                //im so fucking tired


                //positions[0].x += (mouseX - positions[0].x) * followSpeed;
                //positions[0].y += (mouseY - positions[0].y) * followSpeed;
                //gotta rewrite this part cuz no making senseeee mb
                if (!collidesAt(nextX, oldY, parts[0])){
                    positions[0].x = nextX;
                }


                //im in tears my meds making this too hard i need to stay awaaaake\
                if (!collidesAt(positions[0].x, nextY, parts[0])){
                    positions[0].y = nextY;
                }
                //i think i half got this
                //uhh mb dow there i added random thingz not needed
                //yeah i think im back there but wa is useful and wa not
                //for (let i = 1; i < positions.length; i++) {
                    //positions[i].x += (positions[i - 1].x - positions[i].x) * followSpeed;
                    //positions[i].y += (positions[i - 1].y - positions[i].y) * followSpeed;}
                        //it was duplicatet lol
                    //next paragraph is senior assistefd w one friend a very intelligent one uhh hes younger than me but he freakin genus cmon jesuz learn eng and code with me for hq or wathevere
                //his nickname is mazapan
                for (let i = 1; i < positions.length; i++){
                    const targetX = positions[i - 1].x;
                    const targetY = positions[i - 1].y;
                
                //NOT HALF OF THE PARAGRAPH AND IM ALREADY TIED TIERD THAAAAT
                    positions[i].x += (targetX -positions[i].x) * followSpeed;
                    positions[i].y += (targetY -positions[i].y) * followSpeed;
            }
                    ////wth
                parts.forEach((part, i) => {
                    part.style.left = `${positions[i].x}px`;
                    part.style.top = `${positions[i].y}px`;
                    part.style.transform = 'translate(-50%, -50%)';
                });

                requestAnimationFrame(animate);
            }
            animate();
            //forfgot to make collissions of the walls i gotta hear a podcast abput it while i code
            //const walls = document.querySelectorAll('[class*="wall"]');
            //function collission(element){
                //const rect = element.getBoundingClientRect();
                //i dont remember what this is for so gotta comment it to have it js in case
            //gotta sleep i hate my life
            //my comments dont have an order just the feeling 
            //sorry i just started with my meds and im falling from sleep i dont think i can finish this now ill submit like this byeee