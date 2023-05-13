import { leerArchivo } from "./funcionalidades.js";
import { construirCurso } from "./funcionalidades.js";
import { escribirJSON } from "./funcionalidades.js";

escribirJSON(construirCurso(leerArchivo('cursos')));
