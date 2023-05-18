import { readFileSync } from "fs";
import { writeFileSync } from "fs";
import { parse } from "csv-parse/sync";
import { Curso } from "./model/curso.js";
import { Relator } from "./model/relator.js";
import { Ayudante } from "./model/ayudante.js";
import { Estudiante } from "./model/estudiante.js";

const leerArchivo = nombreArchivo => parse(readFileSync(`./data/${nombreArchivo}.csv`, 'utf-8'));

const construirCurso = arregloDeArreglosCursos => arregloDeArreglosCursos.map(curso => curso = new Curso(curso[0],curso[1],curso[2]));

const construirRelator = arregloDeArreglosRelatores => arregloDeArreglosRelatores.map(relator => relator = new Relator(relator[0],relator[1],relator[2],relator[3]));

const construirAyudante = arregloDeArreglosAyudantes => arregloDeArreglosAyudantes.map(ayudante => ayudante = new Ayudante(ayudante[0],ayudante[1],ayudante[2],ayudante[3]));

const construirEstudiante = arregloDeArreglosEstudiantes => arregloDeArreglosEstudiantes.map(estudiante => estudiante = new Estudiante(estudiante[0],estudiante[1],estudiante[2],estudiante[3]));

const construirCursoColaboracion = (arregloCursos, arregloRelatores, arregloAyudantes, arregloEstudiantes) =>{
    arregloCursos.forEach((curso) => {
        arregloRelatores.forEach((relator) => {
            if(curso.codigo === relator.codigoCurso){
                curso.relator = relator;
            }
        });
        arregloAyudantes.forEach((ayudante) => {
            if(curso.codigo === ayudante.codigoCurso){
                curso.ayudante = ayudante;
            }
        });
        arregloEstudiantes.forEach((estudiante) => {
            if(curso.codigo === estudiante.codigoCurso){
                curso.estudiantes = estudiante;
            }
        });
    });
    return arregloCursos;
}

const escribirJSON = arregloCursos => writeFileSync('./dataJSON/cursos.json', JSON.stringify(arregloCursos));

export {
    leerArchivo,
    construirCurso,
    construirRelator,
    construirAyudante,
    construirEstudiante,
    construirCursoColaboracion,
    escribirJSON
}

/* const leerArchivo = (nombreArchivo) => {
    const archivoCSV = readFileSync(`./data/${nombreArchivo}.csv`, 'utf-8');
    const archivoCSVArreglo = parse(archivoCSV);
    return archivoCSVArreglo;
} */

/* const construirCurso = (arregloDeArreglosCursos) => {
    const arregloCursos = arregloDeArreglosCursos.map((curso) => {
        return curso = new Curso(curso[0],curso[1],curso[2]);
    });
    return arregloCursos;
} */