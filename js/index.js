import { leerArchivo } from "./funcionalidades.js";
import { construirCurso, construirAyudante, construirRelator, construirEstudiante, construirCursoColaboracion } from "./funcionalidades.js";
import { escribirJSON } from "./funcionalidades.js";

/* console.log(construirCurso(leerArchivo('cursos')));
console.log(construirRelator(leerArchivo('relatores')));
console.log(construirAyudante(leerArchivo('ayudantes')));
console.log(construirEstudiante(leerArchivo('estudiantes'))); */
/* escribirJSON(construirCurso(leerArchivo('cursos'))); */

escribirJSON(construirCursoColaboracion(construirCurso(leerArchivo('cursos')), construirRelator(leerArchivo('relatores')), construirAyudante(leerArchivo('ayudantes')), construirEstudiante(leerArchivo('estudiantes'))));
