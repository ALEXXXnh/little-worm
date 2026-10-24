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
                    mouseX = e.clientX - rect.left - maze.clientLeft;
                    mouseY = e.clientY - rect.top - maze.clientTop;
                });
                //not so lost atp 
                //forgot i think my big problems start here
                function animate() {
                positions[0].x += (mouseX - positions[0].x) * followSpeed;
                positions[0].y += (mouseY - positions[0].y) * followSpeed;

                //i think i half got this
                for (let i = 1; i < positions.length; i++) {
                    positions[i].x += (positions[i - 1].x - positions[i].x) * followSpeed;
                    positions[i].y += (positions[i - 1].y - positions[i].y) * followSpeed;
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