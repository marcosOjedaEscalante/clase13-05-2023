export class Persona{
    
    _rut;
    _nombre;
    _apellido;
    _codigoCurso;

    constructor(rut, nombre, apellido, codigoCurso){
        this._rut = rut;
        this._nombre = nombre;
        this._apellido = apellido;
        this._codigoCurso = codigoCurso;
    }

    get rut(){
        return this._rut;
    }
    
    set rut(rut){
        this._rut = rut;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get codigoCurso(){
        return this._codigoCurso;
    }

    set codigoCurso(codigoCurso){
        this._codigoCurso = codigoCurso;
    }

    mostrarDatos(){
        return `Rut: ${this._rut}, Nombre Completo: ${this._nombre} ${this._apellido}, Código Curso: ${this._codigoCurso}`;
    }

}