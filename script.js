const canvas = document.getElementById("background");

const ctx = canvas.getContext("2d");




canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

const centerX = canvas.width / 2;

const centerY = canvas.height / 2;

let rotation = 0;






function drawNucleus(){

    ctx.beginPath();
    ctx.arc(centerX, centerY, 30, 0, Math.PI*2);
    ctx.fill();

}




function drawShell() {

    ctx.beginPath();

    ctx.arc(centerX, centerY, 180, 0, Math.PI * 2);
    ctx.stroke();

}



function drawElectron(){
    const electronCount= 4;

    const angleStep = (Math.PI * 2) / electronCount;
    const radius = 180;


    for (let i = 0; i < 4; i++){


        const angle = i * angleStep + rotation;

        const electronX = centerX + radius*Math.cos(angle);
        const electronY = centerY + radius *Math.sin(angle);

        ctx.beginPath();

        ctx.arc(electronX, electronY, 8, 0, Math.PI * 2);
        ctx.fill();


    }
  


}

function electronMovement(){

    
    rotation = rotation + 0.02;
     
    ctx.clearRect(0, 0, canvas.width, canvas.height )

    drawNucleus();

    drawElectron();

    drawShell();
    requestAnimationFrame(electronMovement);
}     



electronMovement();









