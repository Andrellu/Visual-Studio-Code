export class Producto {
    public nombre :  string;
    public imagen :  string;
    public precio :  number;
    // Nuestro constructor que recibe parámetros
    constructor(nombre : string, imagen :  string, precio : number){
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
    }
}