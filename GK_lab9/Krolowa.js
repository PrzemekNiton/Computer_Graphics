let canvas = document.getElementById("glcanvas");

const scene = new THREE.Scene({color: 0xfff});

const camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 1000);

const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

var light;  // A light shining from the direction of the camera; moves with the camera.
light = new THREE.DirectionalLight();
light.position.set(-10, -2, 1);
camera.add(light);
scene.add(camera);

// zmiana koloru wieży
const material = new THREE.MeshPhongMaterial(
    {
        color: 0x000000, 
    });



const GeometryBasis = new THREE.CylinderGeometry(1, 1, 0.15, 100);

const base = new THREE.Mesh(GeometryBasis, material);

const GeometryBasis2 = new THREE.CylinderGeometry(0.9, 0.9, 0.25, 100);

const BaseUpper = new THREE.Mesh(GeometryBasis2, material);
BaseUpper.position.y = 0.1;

let group = new THREE.Group();
group.add(base);
group.add(BaseUpper);
group.position.set(0, -4, 0);
group.scale.set(2, 2, 1);

let points = [];
for (var i = 0; i < 7; i++) {
    points.push(new THREE.Vector2(Math.tan(i * 0.1)*3+7.5 , (i - 4.5) * 4));
}
let size = 0.2;
let geometry1 = new THREE.LatheGeometry(points);
let lathe1 = new THREE.Mesh(geometry1, material);
lathe1.position.set(0, -1.7, -0.3);
lathe1.scale.set(size, -size, -size);

const ringGeometry = new THREE.CylinderGeometry(1.5, 1.5, 0.3, 100);
const ring = new THREE.Mesh(ringGeometry, material);
ring.position.set(0, 1.3, 0);

const ringGeometry2 = new THREE.CylinderGeometry(1.8, 1.8, 0.15, 100);
material.side = THREE.DoubleSide;
const ball = new THREE.Mesh(ringGeometry2, material);
ball.position.set(0, 0.8, 0);
ball.scale.set(1,-1,-1);

let head = new THREE.Group();
head.add( ball);
head.position.set(0,1.2,0);

let chessPawn = new THREE.Group();
chessPawn.add(group, lathe1, head);
scene.add(chessPawn);

//podstawa głowy z kuli



const geometry = new THREE.CylinderGeometry(1.5, 1.5, 0.40, 100 );
const baseForHeads = new THREE.Mesh( geometry, material );
baseForHeads.position.set(0, 2.15, 0);
scene.add( baseForHeads );

const geometry2 = new THREE.SphereGeometry(Math.PI / 2, 80, 80, Math.PI,  2*Math.PI, 0, 0.7 * Math.PI);
const headCrowned = new THREE.Mesh( geometry2, material );
headCrowned.position.set(0, 3.3, 0);
scene.add( headCrowned );

//korona


const geometry3 = new THREE.BoxGeometry( 0.8, 0.8, 1 );
const brick3 = new THREE.Mesh( geometry3, material );
brick3.position.set(0,4.3,0.8);
scene.add( brick3 );

const geometry4 = new THREE.BoxGeometry( 0.5, 1, 0.3 );
const brick4 = new THREE.Mesh( geometry4, material );
brick4.position.set(0.8,4.3,0.9);
scene.add( brick4 );

const geometry5 = new THREE.BoxGeometry( 0.5, 1, 0.3 );
const brick5 = new THREE.Mesh( geometry5, material );
brick5.position.set(0,5.8,0.9);
scene.add( brick5 );


const geometry6 = new THREE.BoxGeometry( 0.2, 1, 0.05 );
const brick6 = new THREE.Mesh( geometry6, material );
brick6.position.set(1.4,5.8,0.90);
scene.add( brick4 );


const geometry7 = new THREE.BoxGeometry( 0.2, 1, 0.05 );
const brick7 = new THREE.Mesh( geometry7, material );
brick5.position.set(-0.8,4.3,0.9);
scene.add( brick7 );



function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

camera.position.z = 8;
camera.position.y = 1.6;
animate();
