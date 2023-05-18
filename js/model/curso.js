export class Curso{
    
    _codigo;
    _nombre;
    _horas;
    _relator;
    _ayudante;
    _estudiantes;

    constructor(codigo, nombre, horas, relator, ayudante, estudiantes){
        this._codigo = codigo;
        this._nombre = nombre;
        this._horas = horas;
        this._relator = relator;
        this._ayudante = ayudante;
        this._estudiantes = estudiantes;
    } 

    get codigo(){
        return this._codigo;
    }

    set codigo(codigo){
        this._codigo = codigo;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get horas(){
        return this._horas;
    }

    set horas(horas){
        const regex = new RegExp(/[0-9]/, 'g');
        if(regex.test(String(horas))){
            this._horas = horas;
        }
    }

    get relator(){
        return this._relator;
    }

    set relator(relator){
        this._relator = relator;
    }

    get ayudante(){
        return this._ayudante;
    }

    set ayudante(ayudante){
        this._ayudante = ayudante;
    }

    get estudiantes(){
        return this._estudiantes;
    }

    set estudiantes(estudiante){
        this._estudiantes.push(estudiante);
    }

    mostrarDatos(){
        return `Código: ${this._codigo} Nombre: ${this._nombre} Horas: ${this._horas}`;
    }

}