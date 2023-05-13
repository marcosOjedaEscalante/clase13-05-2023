export class Curso{
    
    #codigo;
    #nombre;
    #horas;

    constructor(codigo, nombre, horas){
        this.#codigo = codigo;
        this.#nombre = nombre;
        this.#horas = horas;
    } 

    get codigo(){
        return this.#codigo;
    }

    set codigo(codigo){
        this.#codigo = codigo;
    }

    get nombre(){
        return this.#nombre;
    }

    set nombre(nombre){
        this.#nombre = nombre;
    }

    get horas(){
        return this.#horas;
    }

    set horas(horas){
        const regex = new RegExp(/[0-9]/, 'g');
        if(regex.test(String(horas))){
            this.#horas = horas;
        }
    }

    mostrarDatos(){
        return `Código: ${this.#codigo} Nombre: ${this.#nombre} Horas: ${this.#horas}`;
    }

}