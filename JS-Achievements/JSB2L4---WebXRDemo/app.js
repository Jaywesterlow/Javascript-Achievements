// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

// create a model
const minecraftModel = new Model('assets/models/minecraft/scene.gltf');
minecraftModel.setPosition(5.073, 1.707, -1.911);
minecraftModel.setScale(0.05, 0.05, 0.05);
minecraftModel.setRotation(0, -71.530, 0);

// create a model

const cuberoom = new Model('assets/models/cube-room/cube-room.gltf');

cuberoom.setPosition(1.105, 0.91001, -1.409);
cuberoom.setScale(0.7, 0.5, 0.8);
cuberoom.setRotation(0, -36.95, 0);

// create a primitive (sphere)
const sphere = new Sphere();
sphere.setColor('green');
sphere.setRadius(0.5);
sphere.setPosition(-1.251, 1.587, -2.464);
sphere.setScale(0.5, 0.5, 0.5);



// create some text
const testText = new Text('Mediacollege Amsterdam WebXR');
testText.setPosition(3.927, 3.124, -2.922);
testText.setFontsize(10);
testText.setColor('blue');
testText.setRotation(20.750, -82.020, 0);
testText.setScale(0.33668, 0.44443, 0.16213);

// create an image
const image = new XRImage('assets/images/sampleImage.jpg');
image.setPosition(0.996, 3.512, -5.509);
image.setScale(1, 1, 1);

const image2 = new XRImage('assets/images/Lisse-049.jpg');
image2.setPosition(0.826, 2.658, -5.916);
image2.setScale(1, 1, 1);

// create a 360 image
const image360 = new Sky('assets/360_world.jpg');

const spotLight = new SpotLight();
spotLight.setPosition(-3.39382, 4.72931, 1.37905);
spotLight.setTarget(minecraftModel);

// listen for an event
minecraftModel.addEventListener('click', () => console.log('je klikt op mij'));