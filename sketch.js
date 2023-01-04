const celdas = [];
const RETICULA = 12;

let ancho; //ancho de celda
let alto; //alto de celda

let opcionesI = [];

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

function preload() {
  for(let i = 0; i < NA; i++){
    azulejos[i] = loadImage(`tiles/tile${i}.png`);
  }
}






function setup() {
  createCanvas(1080, 1080);

  ancho = width / RETICULA;
  alto = height / RETICULA;

  for(let i = 0 ; i < azulejos.length; i++){
    opcionesI.push(i);
  } 
  for (let i = 0; i < RETICULA*RETICULA; i++) {
    celdas[i] = {
      colapsada: false,
      opciones : opcionesI,
  
    };
  }
  //celdas[9].colapsada = true;
  //celdas[4].colapsada = true;
  //celdas[14].opciones = [5,6,8];
  //celdas[2].opciones = [4,7,12];
  //celdas[8].opciones = [6,4,8,10];
  //celdas[5].opciones = [11,6,4,8,10];
}






function draw() {
//backgound(111);

  const celdasDisponibles = celdas.filter((celda)=> {
    return celda.colapsada == false;
  });
  
  if(celdasDisponibles.length > 0) {
    celdasDisponibles.sort((a,b)=> {
      return a.opciones.length - b.opciones.length;
    });

    const celdasPorColapsar = celdasDisponibles.filter((celda) => {
      return celda.opciones.length == celdasDisponibles[0].opciones.length
    });


    const celdaSeleccionada = random(celdasPorColapsar);
    celdaSeleccionada.colapsada = true;

    const opcionSeleccionada = random(celdaSeleccionada.opciones);
    celdaSeleccionada.opciones = [opcionSeleccionada];

    //print(opcionSeleccionada);

    
    for (let x = 0; x < RETICULA; x++) {
    for (let y = 0; y < RETICULA; y++) {
        const celdaIndex = x + y * RETICULA;
        const celdaActual = celdas[celdaIndex];
        if (celdaActual.colapsada) {
          const indiceDeAzulejo = celdaActual.opciones[0];
          const reglasActuales = reglas[indiceDeAzulejo];
          print(reglasActuales);
          image(azulejos[indiceDeAzulejo], 
            x * ancho, 
            y * alto, 
            ancho, 
            alto
          );


    //UP
          if (y > 0) {
            const indiceUp = x + (y - 1) * RETICULA;
            const celdaUp = celdas[indiceUp];
            if (!celdaUp.colapsada) {

              entropia(
                celdaUp, 
                reglasActuales['UP'],
                'DOWN'
              )
            }
          }

    //RIGHT
          if (x < RETICULA - 1) {
            const indiceRight = x + 1 + y * RETICULA;
            const celdaRight = celdas[indiceRight];
            if (!celdaRight.colapsada) {

              entropia(
                celdaRight, 
                reglasActuales['RIGHT'],
                'LEFT'
              )
            }
          }

    //DOWN
          if (y < RETICULA - 1) {
            const indiceDown = x + (y + 1) * RETICULA;
            const celdaDown = celdas[indiceDown];
            if (!celdaDown.colapsada) {
              
              entropia(
                celdaDown, 
                reglasActuales['DOWN'], 
                'UP'
              );
            }
          }

    //LEFT
          if (x > 0) {
            const indiceLeft = x - 1 + y * RETICULA;
            const celdaLeft = celdas[indiceLeft];
            if (!celdaLeft.colapsada) {

              entropia(
                celdaLeft,
                reglasActuales['LEFT'],
                'RIGHT'
              );
            }
          }
        }
        else {
          strokeWeight(5);
          rect(x * ancho, y * alto, ancho, alto);
        }
      }
    }
    // noLoop();

  }

  // ACTIVAR LOOP


   else {
     for (let i = 0; i < RETICULA * RETICULA; i++) {
      celdas[i] = {
       colapsada: false,
       opciones: opcionesI,
       };
     }
   }
}

function entropia (_celda, _regla, _opuesto) {
  const nuevaOpcion = []
  for (let i = 0; i < _celda.opciones.length; i++ ) {
    if (_regla == reglas[_celda.opciones[i]][_opuesto]) {
      const celdaCompatible = _celda.opciones[i];
      nuevaOpcion.push(celdaCompatible);
    }
  }
  _celda.opciones = nuevaOpcion;
  print(nuevaOpcion);
}



