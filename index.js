                //ez pc
                const maze = document.getElementById('#scape')
                const parts = [document.querySelectorAll('#worm .part')];
                const partDstance = 10;
                const positions = [];
                        //HERE IR THE PROBLEM OFC
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
                wormParts.forEach((part, i) => {
                    part.style.left = `${positions[i].x}px`;
                    part.style.top = `${positions[i].y}px`;
                    part.style.transform = 'translate(-50%, -50%)';
                });

                requestAnimationFrame(animate);
            }

            animate();