let process = require("process");
const fs = require("fs");
const tareas = JSON.parse(fs.readFileSync("./tareas.json", "utf8"));

let comandoLista = process.argv[2];

let mostrarLista = (comando) => {
if(comando ==null){
    console.log('Atencion-Tienes que pasar una accion');
}else
  {
      let accion;
  switch (comando) {
    case "listar": accion = tareas;
      break;
    default:
      accion= 'No entiendo que quieres hacer';
  }
  return accion;
}
};
console.log(mostrarLista(comandoLista));
