export class UserId{
    value:string;
    constructor(value:string){
        this.value=value;
        this.ensureIsValid();
    }
    /** Puedo colocar reglas de negocio, que valida valors antes de ingresar  
     * Esto se le llama MODELADO DE DOMINIO
    */
    private ensureIsValid(){
        if(this.value.length<5){
            throw new Error("La longitud del id debe ser mayor a 5 ch")
        }
    }
}