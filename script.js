const canvas = document.getElementById("background");




const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



const centerX = canvas.width / 2;





const centerY = canvas.height / 2;

let rotation = 0;

const shells = [2, 8, 8];





function drawNucleus(){

    ctx.beginPath();

    ctx.arc(centerX, centerY, 30, 0, Math.PI*2);

    ctx.fill();

}




function drawShell() {


    for(let i = 0; i<shells.length; i++){

        ctx.beginPath();

        ctx.arc(centerX, centerY, 70+i *60, 0, Math.PI * 2);
        ctx.stroke();

    }



    

}



function drawElectron(){



    for (let i = 0; i < shells.length; i++ ){



    

        const electronCount = shells[i];

        const angleStep = (Math.PI * 2) / electronCount;
        const radius = 70 + i*60;
        



        for (let j = 0; j < electronCount; j++){


            const angle = j * angleStep + rotation;

            const electronX = centerX + radius*Math.cos(angle);

            const electronY= centerY + radius *Math.sin(angle);
            ctx.beginPath();



            ctx.arc(electronX, electronY, 8, 0, Math.PI * 2);
            ctx.fill();




        }
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














