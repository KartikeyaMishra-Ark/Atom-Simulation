const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

const maxRadius = Math.min(canvas.width, canvas.height) * 0.4;

const centerX = canvas.width / 2;

const centerY = canvas.height / 2;
let shells = [];






let rotation = 0;

const atom = {

    protons: 6,
    neutrons: 6,

    electrons: 118

};


function calcShells(){

    shells = [];

    let remainingElectrons = atom.electrons;

    const shellCapacity = [2, 8, 18, 32, 32, 18, 8];


    for (let i =0; i< shellCapacity.length; i++){

        const electronsInShell = Math.min(
            remainingElectrons,
            shellCapacity[i]

        )

        shells.push(electronsInShell);


        remainingElectrons -= electronsInShell;

        if(remainingElectrons === 0){
            break;
        }

    }


}




const nucleusRadius = 30;

const shellGap = 25;


let shellSpacing;



function calcGeometry(){
    shellSpacing = (maxRadius - nucleusRadius - shellGap) / shells.length;


}
calcShells();
calcGeometry();




function drawNucleus(){

    ctx.beginPath();

    ctx.arc(centerX, centerY, nucleusRadius, 0, Math.PI *2);

    ctx.fill();

}



function drawShell() {


    for(let i = 0; i<shells.length; i++){

        const radius = nucleusRadius + shellGap + shellSpacing * i;
        ctx.beginPath();


        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();

    }



}

function drawElectron(){



    for (let i = 0; i < shells.length; i++ ){

        const electronCount = shells[i];

        const angleStep = (Math.PI * 2) / electronCount;

        const radius = nucleusRadius + shellGap + shellSpacing * i;
        

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












