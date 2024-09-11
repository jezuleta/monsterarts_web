
interface ProductoConstructor{
    idProducto: number | null;
    nombre: string;
    descripcion: string;
    precio: number;
    categoria: string;
    stock: number;
    imagen: string;
}

export default class Producto{
    public idProducto: number | null;
    public nombre: string;
    public descripcion: string;
    public precio: number;
    public categoria: string;
    public stock: number;
    public imagen: string;
    
    constructor(params: ProductoConstructor){
        this.idProducto = params.idProducto;
        this.nombre = params.nombre;
        this.descripcion = params.descripcion;
        this.precio = params.precio;
        this.categoria = params.categoria;
        this.stock = params.stock;
        this.imagen = params.imagen;
    }
}