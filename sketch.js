const celdas = [];
const RETICULA = 8;

const azulejos = [];
const NA = 11; //# de azulejos
const reglas = [
  //Bordes de Azulejos
{
  //tile 0
  UP: 1,
  RIGHT: 1,
  DOWN : 1,
  LEFT: 1,
},
{
  //tile 1
  UP: 0,
  RIGHT: 1,
  DOWN : 0,
  LEFT: 1,
},
{
  //tile 2
  UP: 0,
  RIGHT: 1,
  DOWN : 1,
  LEFT: 1,
},
{
  //tile 3
  UP: 1,
  RIGHT: 0,
  DOWN :1,
  LEFT: 0,
},
{
  //tile 4
  UP: 1,
  RIGHT: 1,
  DOWN : 0,
  LEFT: 0,
},
{
  //tile 5
  UP: 0,
  RIGHT: 1,
  DOWN : 1,
  LEFT: 0,
},
{
  //tile 6
  UP: 1,
  RIGHT: 1,
  DOWN : 0,
  LEFT: 1,
},
{
  //tile 7
  UP: 1,
  RIGHT: 0,
  DOWN : 1,
  LEFT: 1,
},
{
  //tile 8
  UP: 1,
  RIGHT: 0,
  DOWN : 0,
  LEFT: 1,
},
{
  //tile 9
  UP: 0,
  RIGHT: 0,
  DOWN : 1,
  LEFT: 1,
},
{
  //tile 10
  UP: 1,
  RIGHT: 1,
  DOWN : 1,
  LEFT: 0,
},
{
  //tile 11
  UP: 0,
  RIGHT: 0,
  DOWN : 0,
  LEFT: 0,
},
{
  //tile 11
  UP: 0,
  RIGHT: 0,
  DOWN : 0,
  LEFT: 0,
},
];

function preload(){
  for(let i = 0; i < NA; i ++);
    azulejos [i] * loadImage(`Tiles/tile${i}.png`);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {}
