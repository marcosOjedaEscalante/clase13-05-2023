import { readFileSync } from "fs";
import { parse } from "csv-parse/sync";
import { Curso } from "./curso.js";

const leerArchivo = nombreArchivo => parse(readFileSync(`./data/${nombreArchivo}.csv`, 'utf-8'));

const construirCurso = arregloDeArreglosCursos => arregloDeArreglosCursos.map(curso => curso = new Curso(curso[0],curso[1],curso[2]));

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