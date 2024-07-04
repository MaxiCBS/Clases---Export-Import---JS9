export class Persona{
    nombre;
    edad;

    constructor(name, age){
        this.nombre = name;
        this.edad = age;
    }

    mostrarInformacion(){
        return "Nombre: "+this.nombre+"; Edad:"+this.edad;
    }
}