export class UserName{
    value:string;
    constructor(value:string){
        this.value=value;
        this.ensureIsValid();
    }
    /** Puedo colocar reglas de negocio, que valida valors antes de ingresar  
     * Esto se le llama MODELADO DE DOMINIO
    */
    private ensureIsValid(){
        if(this.value.length<3){
            throw new Error("La longitud debe ser mayor a 3 ch")
        }
    }
}