export class Curso{
    
    _codigo;
    _nombre;
    _horas;

    constructor(codigo, nombre, horas){
        this._codigo = codigo;
        this._nombre = nombre;
        this._horas = horas;
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

    mostrarDatos(){
        return `Código: ${this._codigo} Nombre: ${this._nombre} Horas: ${this._horas}`;
    }

}