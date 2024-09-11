export class UserEmail{
    value:string;
    constructor(value:string){
        this.value=value;
        this.ensureIsValid();
    }
    /** Puedo colocar reglas de negocio, que valida valors antes de ingresar  
     * Esto se le llama MODELADO DE DOMINIO
    */
    private ensureIsValid(){
        if(!this.value.includes('@') && !this.value.includes('.')){
            throw new Error("User Email debe ser un email valido")
        }
    }
}