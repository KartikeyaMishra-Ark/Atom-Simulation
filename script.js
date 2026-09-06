const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
const elementName = document.getElementById("element-name");
const elementSymbol = document.getElementById("element-symbol");
const atomicNumber = document.getElementById("atomic-number")
const massNumber = document.getElementById("mass-number");
const charge = document.getElementById("charge");
const protonRemove = document.getElementById("proton-remove");
const protonAdd = document.getElementById("proton-add");
const neutronAdd = document.getElementById("neutron-add");

const neutronRemove = document.getElementById("neutron-remove");
const electronAdd = document.getElementById("electron-add");
const electronRemove = document.getElementById("electron-remove");
const electronConfiguration = document.getElementById("electron-configuration");
const ionType = document.getElementById("ion-type");


const shellTilts = [
    0.60,
    0.90,
    1.20,
    1.45,
    1.20,
    0.90,
    0.60
];


canvas.width = window.innerWidth;

canvas.height = window.innerHeight;
const maxRadius = Math.min(canvas.width, canvas.height) * 0.4;
const centerX = canvas.width / 2;

const centerY = canvas.height / 2;

let shells = [];

let rotation = [];




const atom = {

    protons: 24,
    neutrons: 24,
    electrons: 24
};




const elements = [

    
    { atomicNumber: 1, symbol: "H", name: "Hydrogen", atomicMass: 1.008, period: 1, group: 1, category: "nonmetal" },
    { atomicNumber: 2, symbol: "He", name: "Helium", atomicMass: 4.003, period: 1, group: 18, category: "noble gas" },
    { atomicNumber: 3, symbol: "Li", name: "Lithium", atomicMass: 6.94, period: 2, group: 1, category: "alkali metal" },
    { atomicNumber: 4, symbol: "Be", name: "Beryllium", atomicMass: 9.012, period: 2, group: 2, category: "alkaline earth metal" },
    { atomicNumber: 5, symbol: "B", name: "Boron", atomicMass: 10.81, period: 2, group: 13, category: "metalloid" },
    { atomicNumber: 6, symbol: "C", name: "Carbon", atomicMass: 12.011, period: 2, group: 14, category: "nonmetal" },
    { atomicNumber: 7, symbol: "N", name: "Nitrogen", atomicMass: 14.007, period: 2, group: 15, category: "nonmetal" },
    { atomicNumber: 8, symbol: "O", name: "Oxygen", atomicMass: 15.999, period: 2, group: 16, category: "nonmetal" },
    { atomicNumber: 9, symbol: "F", name: "Fluorine", atomicMass: 18.998, period: 2, group: 17, category: "halogen" },
    { atomicNumber: 10, symbol: "Ne", name: "Neon", atomicMass: 20.180, period: 2, group: 18, category: "noble gas" },
    { atomicNumber: 11, symbol: "Na", name: "Sodium", atomicMass: 22.990, period: 3, group: 1, category: "alkali metal" },
    { atomicNumber: 12, symbol: "Mg", name: "Magnesium", atomicMass: 24.305, period: 3, group: 2, category: "alkaline earth metal" },
    { atomicNumber: 13, symbol: "Al", name: "Aluminium", atomicMass: 26.982, period: 3, group: 13, category: "post-transition metal" },
    { atomicNumber: 14, symbol: "Si", name: "Silicon", atomicMass: 28.085, period: 3, group: 14, category: "metalloid" },
    { atomicNumber: 15, symbol: "P", name: "Phosphorus", atomicMass: 30.974, period: 3, group: 15, category: "nonmetal" },
    { atomicNumber: 16, symbol: "S", name: "Sulfur", atomicMass: 32.06, period: 3, group: 16, category: "nonmetal" },
    { atomicNumber: 17, symbol: "Cl", name: "Chlorine", atomicMass: 35.45, period: 3, group: 17, category: "halogen" },
    { atomicNumber: 18, symbol: "Ar", name: "Argon", atomicMass: 39.948, period: 3, group: 18, category: "noble gas" },
    { atomicNumber: 19, symbol: "K", name: "Potassium", atomicMass: 39.098, period: 4, group: 1, category: "alkali metal" },
    { atomicNumber: 20, symbol: "Ca", name: "Calcium", atomicMass: 40.078, period: 4, group: 2, category: "alkaline earth metal" },
    { atomicNumber: 21, symbol: "Sc", name: "Scandium", atomicMass: 44.956, period: 4, group: 3, category: "transition metal" },
    { atomicNumber: 22, symbol: "Ti", name: "Titanium", atomicMass: 47.867, period: 4, group: 4, category: "transition metal" },
    { atomicNumber: 23, symbol: "V", name: "Vanadium", atomicMass: 50.942, period: 4, group: 5, category: "transition metal" },
    { atomicNumber: 24, symbol: "Cr", name: "Chromium", atomicMass: 51.996, period: 4, group: 6, category: "transition metal" },
    { atomicNumber: 25, symbol: "Mn", name: "Manganese", atomicMass: 54.938, period: 4, group: 7, category: "transition metal" },
    { atomicNumber: 26, symbol: "Fe", name: "Iron", atomicMass: 55.845, period: 4, group: 8, category: "transition metal" },
    { atomicNumber: 27, symbol: "Co", name: "Cobalt", atomicMass: 58.933, period: 4, group: 9, category: "transition metal" },
    { atomicNumber: 28, symbol: "Ni", name: "Nickel", atomicMass: 58.693, period: 4, group: 10, category: "transition metal" },
    { atomicNumber: 29, symbol: "Cu", name: "Copper", atomicMass: 63.546, period: 4, group: 11, category: "transition metal" },
    { atomicNumber: 30, symbol: "Zn", name: "Zinc", atomicMass: 65.38, period: 4, group: 12, category: "transition metal" },
    { atomicNumber: 31, symbol: "Ga", name: "Gallium", atomicMass: 69.723, period: 4, group: 13, category: "post-transition metal" },
    { atomicNumber: 32, symbol: "Ge", name: "Germanium", atomicMass: 72.630, period: 4, group: 14, category: "metalloid" },
    { atomicNumber: 33, symbol: "As", name: "Arsenic", atomicMass: 74.922, period: 4, group: 15, category: "metalloid" },
    { atomicNumber: 34, symbol: "Se", name: "Selenium", atomicMass: 78.971, period: 4, group: 16, category: "nonmetal" },
    { atomicNumber: 35, symbol: "Br", name: "Bromine", atomicMass: 79.904, period: 4, group: 17, category: "halogen" },
    { atomicNumber: 36, symbol: "Kr", name: "Krypton", atomicMass: 83.798, period: 4, group: 18, category: "noble gas" },
    { atomicNumber: 37, symbol: "Rb", name: "Rubidium", atomicMass: 85.468, period: 5, group: 1, category: "alkali metal" },
    { atomicNumber: 38, symbol: "Sr", name: "Strontium", atomicMass: 87.62, period: 5, group: 2, category: "alkaline earth metal" },
    { atomicNumber: 39, symbol: "Y", name: "Yttrium", atomicMass: 88.906, period: 5, group: 3, category: "transition metal" },
    { atomicNumber: 40, symbol: "Zr", name: "Zirconium", atomicMass: 91.224, period: 5, group: 4, category: "transition metal" },
    { atomicNumber: 41, symbol: "Nb", name: "Niobium", atomicMass: 92.906, period: 5, group: 5, category: "transition metal" },
    { atomicNumber: 42, symbol: "Mo", name: "Molybdenum", atomicMass: 95.95, period: 5, group: 6, category: "transition metal" },
    { atomicNumber: 43, symbol: "Tc", name: "Technetium", atomicMass: 98, period: 5, group: 7, category: "transition metal" },
    { atomicNumber: 44, symbol: "Ru", name: "Ruthenium", atomicMass: 101.07, period: 5, group: 8, category: "transition metal" },
    { atomicNumber: 45, symbol: "Rh", name: "Rhodium", atomicMass: 102.906, period: 5, group: 9, category: "transition metal" },
    { atomicNumber: 46, symbol: "Pd", name: "Palladium", atomicMass: 106.42, period: 5, group: 10, category: "transition metal" },
    { atomicNumber: 47, symbol: "Ag", name: "Silver", atomicMass: 107.868, period: 5, group: 11, category: "transition metal" },
    { atomicNumber: 48, symbol: "Cd", name: "Cadmium", atomicMass: 112.414, period: 5, group: 12, category: "transition metal" },
    { atomicNumber: 49, symbol: "In", name: "Indium", atomicMass: 114.818, period: 5, group: 13, category: "post-transition metal" },
    { atomicNumber: 50, symbol: "Sn", name: "Tin", atomicMass: 118.710, period: 5, group: 14, category: "post-transition metal" },
    { atomicNumber: 51, symbol: "Sb", name: "Antimony", atomicMass: 121.760, period: 5, group: 15, category: "metalloid" },
    { atomicNumber: 52, symbol: "Te", name: "Tellurium", atomicMass: 127.60, period: 5, group: 16, category: "metalloid" },
    { atomicNumber: 53, symbol: "I", name: "Iodine", atomicMass: 126.904, period: 5, group: 17, category: "halogen" },
    { atomicNumber: 54, symbol: "Xe", name: "Xenon", atomicMass: 131.293, period: 5, group: 18, category: "noble gas" },
    { atomicNumber: 55, symbol: "Cs", name: "Caesium", atomicMass: 132.905, period: 6, group: 1, category: "alkali metal" },
    { atomicNumber: 56, symbol: "Ba", name: "Barium", atomicMass: 137.327, period: 6, group: 2, category: "alkaline earth metal" },
    { atomicNumber: 57, symbol: "La", name: "Lanthanum", atomicMass: 138.905, period: 6, group: null, category: "lanthanide" },
    { atomicNumber: 58, symbol: "Ce", name: "Cerium", atomicMass: 140.116, period: 6, group: null, category: "lanthanide" },
    { atomicNumber: 59, symbol: "Pr", name: "Praseodymium", atomicMass: 140.908, period: 6, group: null, category: "lanthanide" },
    { atomicNumber: 60, symbol: "Nd", name: "Neodymium", atomicMass: 144.242, period: 6, group: null, category: "lanthanide" },
    { atomicNumber: 61, symbol: "Pm", name: "Promethium", atomicMass: 145, period: 6, group: null, category: "lanthanide" },
    { atomicNumber: 62, symbol: "Sm", name: "Samarium", atomicMass: 150.36, period: 6, group: null, category: "lanthanide" },
    { atomicNumber: 63, symbol: "Eu", name: "Europium", atomicMass: 151.964, period: 6, group: null, category: "lanthanide" },
    { atomicNumber: 64, symbol: "Gd", name: "Gadolinium", atomicMass: 157.25, period: 6, group: null, category: "lanthanide" },
    { atomicNumber: 65, symbol: "Tb", name: "Terbium", atomicMass: 158.925, period: 6, group: null, category: "lanthanide" },
    { atomicNumber: 66, symbol: "Dy", name: "Dysprosium", atomicMass: 162.500, period: 6, group: null, category: "lanthanide" },
    { atomicNumber: 67, symbol: "Ho", name: "Holmium", atomicMass: 164.930, period: 6, group: null, category: "lanthanide" },
    { atomicNumber: 68, symbol: "Er", name: "Erbium", atomicMass: 167.259, period: 6, group: null, category: "lanthanide" },
    { atomicNumber: 69, symbol: "Tm", name: "Thulium", atomicMass: 168.934, period: 6, group: null, category: "lanthanide" },
    { atomicNumber: 70, symbol: "Yb", name: "Ytterbium", atomicMass: 173.045, period: 6, group: null, category: "lanthanide" },
    { atomicNumber: 71, symbol: "Lu", name: "Lutetium", atomicMass: 174.967, period: 6, group: null, category: "lanthanide" },
    { atomicNumber: 72, symbol: "Hf", name: "Hafnium", atomicMass: 178.49, period: 6, group: 4, category: "transition metal" },
    { atomicNumber: 73, symbol: "Ta", name: "Tantalum", atomicMass: 180.948, period: 6, group: 5, category: "transition metal" },
    { atomicNumber: 74, symbol: "W", name: "Tungsten", atomicMass: 183.84, period: 6, group: 6, category: "transition metal" },
    { atomicNumber: 76, symbol: "Os", name: "Osmium", atomicMass: 190.23, period: 6, group: 8, category: "transition metal" },
    { atomicNumber: 75, symbol: "Re", name: "Rhenium", atomicMass: 186.207, period: 6, group: 7, category: "transition metal" },
    { atomicNumber: 77, symbol: "Ir", name: "Iridium", atomicMass: 192.217, period: 6, group: 9, category: "transition metal" },
    { atomicNumber: 78, symbol: "Pt", name: "Platinum", atomicMass: 195.084, period: 6, group: 10, category: "transition metal" },
    { atomicNumber: 79, symbol: "Au", name: "Gold", atomicMass: 196.967, period: 6, group: 11, category: "transition metal" },
    { atomicNumber: 80, symbol: "Hg", name: "Mercury", atomicMass: 200.592, period: 6, group: 12, category: "transition metal" },
    { atomicNumber: 81, symbol: "Tl", name: "Thallium", atomicMass: 204.38, period: 6, group: 13, category: "post-transition metal" },
    { atomicNumber: 82, symbol: "Pb", name: "Lead", atomicMass: 207.2, period: 6, group: 14, category: "post-transition metal" },
    { atomicNumber: 83, symbol: "Bi", name: "Bismuth", atomicMass: 208.980, period: 6, group: 15, category: "post-transition metal" },
    { atomicNumber: 84, symbol: "Po", name: "Polonium", atomicMass: 209, period: 6, group: 16, category: "post-transition metal" },
    { atomicNumber: 85, symbol: "At", name: "Astatine", atomicMass: 210, period: 6, group: 17, category: "halogen" },
    { atomicNumber: 86, symbol: "Rn", name: "Radon", atomicMass: 222, period: 6, group: 18, category: "noble gas" },
    { atomicNumber: 87, symbol: "Fr", name: "Francium", atomicMass: 223, period: 7, group: 1, category: "alkali metal" },
    { atomicNumber: 88, symbol: "Ra", name: "Radium", atomicMass: 226, period: 7, group: 2, category: "alkaline earth metal" },
    { atomicNumber: 89, symbol: "Ac", name: "Actinium", atomicMass: 227, period: 7, group: null, category: "actinide" },
    { atomicNumber: 90, symbol: "Th", name: "Thorium", atomicMass: 232.038, period: 7, group: null, category: "actinide" },
    { atomicNumber: 91, symbol: "Pa", name: "Protactinium", atomicMass: 231.036, period: 7, group: null, category: "actinide" },
    { atomicNumber: 92, symbol: "U", name: "Uranium", atomicMass: 238.029, period: 7, group: null, category: "actinide" },
    { atomicNumber: 93, symbol: "Np", name: "Neptunium", atomicMass: 237, period: 7, group: null, category: "actinide" },
    { atomicNumber: 94, symbol: "Pu", name: "Plutonium", atomicMass: 244, period: 7, group: null, category: "actinide" },
    { atomicNumber: 95, symbol: "Am", name: "Americium", atomicMass: 243, period: 7, group: null, category: "actinide" },
    { atomicNumber: 96, symbol: "Cm", name: "Curium", atomicMass: 247, period: 7, group: null, category: "actinide" },
    { atomicNumber: 97, symbol: "Bk", name: "Berkelium", atomicMass: 247, period: 7, group: null, category: "actinide" },
    { atomicNumber: 98, symbol: "Cf", name: "Californium", atomicMass: 251, period: 7, group: null, category: "actinide" },
    { atomicNumber: 99, symbol: "Es", name: "Einsteinium", atomicMass: 252, period: 7, group: null, category: "actinide" },
    { atomicNumber: 100, symbol: "Fm", name: "Fermium", atomicMass: 257, period: 7, group: null, category: "actinide" },
    { atomicNumber: 101, symbol: "Md", name: "Mendelevium", atomicMass: 258, period: 7, group: null, category: "actinide" },
    { atomicNumber: 102, symbol: "No", name: "Nobelium", atomicMass: 259, period: 7, group: null, category: "actinide" },
    { atomicNumber: 103, symbol: "Lr", name: "Lawrencium", atomicMass: 266, period: 7, group: null, category: "actinide" },
    { atomicNumber: 104, symbol: "Rf", name: "Rutherfordium", atomicMass: 267, period: 7, group: 4, category: "transition metal" },
    { atomicNumber: 105, symbol: "Db", name: "Dubnium", atomicMass: 268, period: 7, group: 5, category: "transition metal" },
    { atomicNumber: 106, symbol: "Sg", name: "Seaborgium", atomicMass: 269, period: 7, group: 6, category: "transition metal" },
    { atomicNumber: 107, symbol: "Bh", name: "Bohrium", atomicMass: 270, period: 7, group: 7, category: "transition metal" },
    { atomicNumber: 108, symbol: "Hs", name: "Hassium", atomicMass: 277, period: 7, group: 8, category: "transition metal" },
    { atomicNumber: 109, symbol: "Mt", name: "Meitnerium", atomicMass: 278, period: 7, group: 9, category: "transition metal" },
    { atomicNumber: 110, symbol: "Ds", name: "Darmstadtium", atomicMass: 281, period: 7, group: 10, category: "transition metal" },
    { atomicNumber: 111, symbol: "Rg", name: "Roentgenium", atomicMass: 282, period: 7, group: 11, category: "transition metal" },
    { atomicNumber: 112, symbol: "Cn", name: "Copernicium", atomicMass: 285, period: 7, group: 12, category: "transition metal" },
    { atomicNumber: 114, symbol: "Fl", name: "Flerovium", atomicMass: 289, period: 7, group: 14, category: "post-transition metal" },
    { atomicNumber: 115, symbol: "Mc", name: "Moscovium", atomicMass: 290, period: 7, group: 15, category: "post-transition metal" },
    { atomicNumber: 113, symbol: "Nh", name: "Nihonium", atomicMass: 286, period: 7, group: 13, category: "post-transition metal" },
    { atomicNumber: 116, symbol: "Lv", name: "Livermorium", atomicMass: 293, period: 7, group: 16, category: "post-transition metal" },
    { atomicNumber: 117, symbol: "Ts", name: "Tennessine", atomicMass: 294, period: 7, group: 17, category: "halogen" },
    { atomicNumber: 118, symbol: "Og", name: "Oganesson", atomicMass: 294, period: 7, group: 18, category: "noble gas" }

]
function updateParticleCounts() {

    document.getElementById("proton-count").textContent = atom.protons;


    document.getElementById("neutron-count").textContent = atom.neutrons;

    document.getElementById("electron-count").textContent = atom.electrons;

}
protonAdd.addEventListener("click", () => {

    atom.protons++;
    updateAtom();
})


protonRemove.addEventListener("click", () =>{

    if(atom.protons>1){

        atom.protons--

        updateAtom();

    }
})


neutronAdd.addEventListener("click", () =>{

    atom.neutrons++

    updateAtom()

})

neutronRemove.addEventListener("click", () =>{

    if(atom.neutrons>0){

        atom.neutrons--
        updateAtom()

    }

})


electronAdd.addEventListener("click", ()=>{
    atom.electrons++

    updateAtom();
})

electronRemove.addEventListener("click", ()=>{

    if(atom.electrons>0){

        atom.electrons--

        updateAtom()

    }

})



function getElectronConfiguration(){

    let electrons = atom.electrons;


    const orbitals = [
        ["1s", 2],
        ["2s", 2],
        ["2p", 6],
        ["3s", 2],
        ["3p", 6],
        ["4s", 2],
        ["3d", 10],
        ["4p", 6],
        ["5s", 2],
        ["4d", 10],
        ["5p", 6],
        ["6s", 2],
        ["4f", 14],
        ["5d", 10],
        ["6p", 6],
        ["7s", 2],
        ["5f", 14],
        ["6d", 10],
        ["7p", 6]



    ];

    let configuration = [];
    for (let i = 0; i<orbitals.length; i++){


        if (electrons === 0){
            break;

        }
        const electronsInOrbital = Math.min(
            electrons,
            orbitals[i][1]
        )
        configuration.push(

            orbitals[i][0]+electronsInOrbital
        );

        electrons -= electronsInOrbital

    }
    return configuration.join(" ");

};





function updateInfo(){

    const element = fetchElement()
    if (!element) return;
    elementName.textContent = element.name;


    
    elementSymbol.textContent = element.symbol;
    atomicNumber.textContent = element.atomicNumber;

    massNumber.textContent = getMassNumber();
    charge.textContent = getCharge()
    ionType.textContent = getIonType();
    elementName.textContent = getDisplayedName();
    elementSymbol.textContent = getDisplayedSymbol();

    electronConfiguration.textContent = getElectronConfiguration();

}


function getMassNumber(){

    const massNumber = atom.neutrons + atom.protons;

    return massNumber;


}




function getCharge(){


    const charge = atom.protons - atom.electrons;
    return charge;
    
}
function fetchElement(){


    return elements.find(element => element.atomicNumber === atom.protons);
}

function calcShells(){

    shells = [];
    rotation = [];


    let remainingElectrons = atom.electrons;

    const shellCapacity = [2, 8, 18, 32, 32, 18, 8];

    for (let i = 0; i< shellCapacity.length; i++){


        const electronsInShell = Math.min(
            remainingElectrons,


            shellCapacity[i]

        )

        shells.push(electronsInShell);

        remainingElectrons -= electronsInShell;


        rotation.push(i*0.8)

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
function updateAtom(){

    calcShells();

    calcGeometry();
    updateInfo();


    updateParticleCounts();

}




function drawNucleus(){

    const totalParticles = atom.protons + atom.neutrons

    const particleRadius=3.5;


    const nucleusSize = Math.max(
        18,
        Math.min(38, 12 + Math.sqrt(totalParticles) * 1.5)
    );

    for (let i = 0; i < totalParticles; i++) {

        const isProton = i < atom.protons;
        
        if (isProton) {
            ctx.fillStyle = "#ff6b6b";
        } 
        else {
            ctx.fillStyle = "#8ecae6";
        }
        let x;
        let y;

        if (totalParticles === 1 ){

            x = centerX
            y = centerY;


        }

        else if (totalParticles<=14){

            const angle = i* (Math.PI*2/totalParticles)
            const distance = 5+Math.floor(i/7)*5;

            x = centerX+Math.cos(angle)*distance;
            y=centerY+Math.sin(angle )* distance;

        }

        else{
            const angle = i * 2.4;

            const distance =
                Math.sqrt((i + 0.5) / totalParticles) *
                (nucleusSize - particleRadius);

            x = centerX + Math.cos(angle) * distance;
            y = centerY + Math.sin(angle) * distance;
        }

        ctx.beginPath();

        ctx.arc(

            x,
            y,

            particleRadius,



            0,

            Math.PI * 2
        );


        ctx.fill();
        
    }
    
}



function drawShell() {


    for(let i = 0; i<shells.length; i++){

        const radius = nucleusRadius + shellGap + shellSpacing * i;
        ctx.save();
        ctx.translate(centerX, centerY);

        ctx.scale(1, Math.cos(shellTilts[i]));

        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, Math.PI * 2);
        ctx.stroke();

        ctx.restore();

       

    }



}


function getIonType() {
    const charge = getCharge();

    if (charge > 0) {
        return "Cation";
    }

    if (charge < 0) {
        return "Anion";
    }

    return "Neutral";
}

function drawElectron(){
    ctx.fillStyle = "#ffd166";

    for (let i = 0; i < shells.length; i++ ){

        const electronCount = shells[i];

        const angleStep = (Math.PI * 2) / electronCount;

        const radius = nucleusRadius + shellGap + shellSpacing * i;
        for (let j = 0; j < electronCount; j++){

            const angle = j * angleStep + rotation[i];

            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);



            const tilt = shellTilts[i];

            const electronX = centerX + x

            const electronY = centerY + y * Math.cos(tilt)

            ctx.beginPath()

            const depth = Math.sin(angle);


            const electronSize = 6 + depth * 2;
            
            ctx.arc(electronX, electronY, electronSize, 0, Math.PI * 2);            
            ctx.fill();

        }
    }

}

function electronMovement(){

    
    for (let i = 0; i<rotation.length; i++){

        rotation[i] += 0.01+ i * 0.003;

    }

    
    ctx.clearRect(0, 0, canvas.width, canvas.height )

    drawNucleus();
    drawElectron();
    drawShell();

    requestAnimationFrame(electronMovement);
}  


function getDisplayedName() {
    const element = fetchElement();

    if (!element) return "";

    const charge = getCharge();
    if (charge > 0) {

        return element.name + " ion";
    }

    if (charge < 0) {
        return element.name + " ion";
    }

    return element.name;
}

function getDisplayedSymbol() {
    const element = fetchElement();

    if (!element) return "";

    const charge = getCharge();

    if (charge === 0) {

        return element.symbol;
    }
    if (charge === 1) {

        return element.symbol + "+";
    }

    if (charge === -1) {
        return element.symbol + "-";
    }

    if (charge > 1) {
        return element.symbol + charge + "+";
    }
    return element.symbol + Math.abs(charge) + "-";
}


electronMovement();





updateAtom()
console.log(getMassNumber())


console.log(getCharge())
