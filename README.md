<div align="center">

# ATOM SIMULATOR
## Test Every Isotope Ever Discovered!

<p> An interactive, Bohr-model-inspired atom simulator built with <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and the <strong>HTML5 Canvas </strong>. </p>

<p> <strong>Learn about the properties of every ground state isotope ever discovered by humanity!</strong></p>

<a href="https://kartikeyamishra-ark.github.io/Atom-Simulation/">Test the project!</a>

<p><img width="1470" height="838" alt="Screenshot 2026-09-19 at 5 10 06 PM" src="https://github.com/user-attachments/assets/80ea42b9-bb06-4ce7-8766-90b5629b7847" /></p>

</div>

# About
Atom Simulator is an interactive visualisation that allows users to construct and explore atoms by manipulating their fundamental particles.

Change the number of protons, neutrons, and electrons and watch the atom, element information, charge, isotope data, and electron configuration update in real time.

The project combines a dynamic Canvas simulation with an interactive scientific interface and periodic table.

<strong>This project has the data of every ground state isotope ever discovered by humans!</strong>

# Features

## Atom builder
- Add/Remove Electrons
- Add/Remove Protons
- Add/Remove Neutrons
- Option to Add/Remove 10 particles at a time.
- Option to type in the desired number of particles.
- Dynamic shell addition according to Bohr configuration
- Optimised animation for electron addition

<img width="907" height="72" alt="Screenshot 2026-09-19 at 5 28 30 PM" src="https://github.com/user-attachments/assets/3af6f5e8-cb13-40f3-a363-50e88a8e5ba4" />

## Element Identification
The panel on the top left provides all the information about the created atom. The information includes:
- Element name
- Charge
- Atomic Number
- Mass Number
- Type
<img width="212" height="200" alt="Screenshot 2026-09-19 at 5 28 59 PM" src="https://github.com/user-attachments/assets/ba5bc043-53ce-47ba-bf0a-720f4f23dc4b" />

## Isotope Panel
All the important information about every ground-state isotope ever discovered has been added which includes:
- Atomic Mass
- Number of neutrons
- Radioactivity
- Half-Life
- Decay Mode
- Spin/Parity
- Invalid isotopes are detected and visually highlighted
<img width="219" height="493" alt="Screenshot 2026-09-19 at 5 29 47 PM" src="https://github.com/user-attachments/assets/60b5acb2-5843-4e6f-ba55-4e0cf24f0778" />

## Periodic Table
The entire periodic table has been added which can be accessed by clicking the periodic table button. 

The user can choose any element as they please to immediately build that element!

<img width="1183" height="552" alt="Screenshot 2026-09-19 at 5 31 50 PM" src="https://github.com/user-attachments/assets/eae7ae00-630a-4826-a25d-8f7140c88004" />

## Animated Visuals
- Animated electrons
- Multiple electron shells
- Rotating shells
- Tilted Shells
- Dynamic Nucleus pattern

# Technicalities

## Canvas Visualization

The atom is rendered using the HTML5 Canvas API.

- ### <strong>Nucleus</strong>
    
    The nucleus is composed of individually positioned proton and neutron particles rather than a single static shape.

- ### <strong>Electron Shells</strong>
    
    Electrons are distributed across shells using the project's shell-capacity model:
    
    2 · 8 · 18 · 32 · 32 · 18 · 8
    
    The number of active shells changes dynamically with the electron count.

- ### <strong>Orbital Projection</strong>

    The shells are rendered as tilted elliptical projections using Canvas transformations:
    
    ctx.translate();
    ctx.rotate();
    ctx.scale();
    
    This gives the otherwise 2D Canvas visualisation a more three-dimensional appearance.

## Animation System

The simulation uses requestAnimationFrame() to continuously render the atom.

The animation system tracks:

- Electron angles
- Shell rotations
- Animation progress
- Electron transitions

The rendering pipeline follows:

```text
Atom State
    ↓
Calculate Geometry
    ↓
Update Animation
    ↓
Clear Canvas
    ↓
Draw Shells
    ↓
Draw Electrons
    ↓
Draw Nucleus
    ↓
Render Next Frame
```
## UI / UX

The interface follows a scientific instrument-inspired aesthetic.

- Design principles
- Deep black background
- Graphite surfaces
- Glass-style panels
- Subtle borders
- Muted category colours
- Off-white typography
- Controlled particle glow
- Clear visual feedback

The atom is kept as the primary visual focus while information panels and controls remain secondary.

Invalid isotope states are highlighted in red to provide immediate feedback instead of relying solely on text.

# Built With

Structure: HTML5	

UI, layout & styling: CSS3	

Logic & state management: JavaScript

Atom rendering: Canvas API

Animation: requestAnimationFrame()


# Demo
Click this link to try the project:

<a href="https://kartikeyamishra-ark.github.io/Atom-Simulation/">Test the project!</a>

# What I Learned

- HTML5 Canvas
- Canvas Drawing
- Canvas Coordinate Systems
- requestAnimationFrame()
- Graphics / Animation Loops
- Mathematical Animation
- Polar / Circular Positioning
- Trigonometry in Programming
- Canvas Transformations
- 2.5D / Depth Illusion
- Painter's Algorithm / Draw Order
- Dynamic Geometry
- State-Driven Graphics
- Data-Driven Application Design
- Managing Dynamic Object Collections
- Animation State
- Interpolated Animation
- Dynamic Numbers of Animated Objects
- Dynamic Shell Allocation
- UI State

# AI declaration
AI has been used to teach me new concepts used in the project as well as guide me towards other sources for knowledge. It has also been used to parse the data for the isotopes from the NUMBASE library.

# Credits
## Documentations referred to:
- https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
- https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
- https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
- https://html.spec.whatwg.org/multipage/canvas.html
- https://developer.mozilla.org/en-US/docs/Web/API/Path2D

## The video which introduced me to Canvas
- https://youtu.be/gm1QtePAYTM?si=L7VWXextQvAn2uVA

# Built while learning HTML, CSS and JavaScript


