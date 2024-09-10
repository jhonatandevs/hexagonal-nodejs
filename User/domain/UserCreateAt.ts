export class UserCreateAt {
    value: Date;
    constructor(value: Date) {
        this.value = value;
        this.ensureIsValid();
    }
    /** Puedo colocar reglas de negocio, que valida valors antes de ingresar  
     * Esto se le llama MODELADO DE DOMINIO
    */
    private ensureIsValid() {
        if (this.value > new Date()) {
            throw new Error("La fecha de creacion no puede ser mayor a la fecha actual, es imposible.!")
        }
    }
}