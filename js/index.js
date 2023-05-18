import { leerArchivo } from "./funcionalidades.js";
import { construirCurso, construirAyudante, construirRelator, construirEstudiante, construirCursoColaboracion } from "./funcionalidades.js";
import { escribirJSON } from "./funcionalidades.js";

const arregloCursos = construirCurso(leerArchivo('cursos'));
let arregloRelatores = [];
const funcionConCallback = (callback) => {
    setTimeout(() => {
        arregloRelatores = construirRelator(leerArchivo('relatores'));
        callback(construirCursoColaboracion(arregloCursos, arregloRelatores, arregloAyudantes, arregloEstudiantes));
    }, 5000);
}

funcionConCallback(escribirJSON);

const arregloAyudantes = construirAyudante(leerArchivo('ayudantes'));
const arregloEstudiantes = construirEstudiante(leerArchivo('estudiantes'));

escribirJSON(construirCursoColaboracion(arregloCursos, arregloRelatores, arregloAyudantes, arregloEstudiantes));
