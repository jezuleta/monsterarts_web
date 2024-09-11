import { hashContrasena } from "../utils/contrasena";

export enum EstadoUsuario {
    HABILITADO,
    DESHABILITADO,
}

export interface UsuarioConstructor{
    idUsuario: number | null;
    identificacion: string;
    nombre: string;
    apellidos: string;
    email: string;
    direccion: string;
    telefono: string;
    rol: string;
    estado: EstadoUsuario | number;
    fechaCreacion: Date | number;
    ultimaSesion: Date | number;
    contrasena: string;
    forzarCambioContrasena: boolean;
}

export default class Usuario{
    public idUsuario: number | null;
    public identificacion: string;
    public nombre: string;
    public apellidos: string;
    public email: string;
    public direccion: string;
    public telefono: string;
    public rol: string;
    public estado: EstadoUsuario;
    public fechaCreacion: Date | number;
    public ultimaSesion: Date | number;
    private contrasena: string;
    protected forzarCambioContrasena: boolean;

    private async asignarContrasena(contrasena: string){
        this.contrasena = await hashContrasena(contrasena);
    }

    constructor(params: UsuarioConstructor){
        this.idUsuario = params.idUsuario;
        this.identificacion = params.identificacion;
        this.nombre = params.nombre;
        this.apellidos = params.apellidos;
        this.email = params.email;
        this.direccion = params.direccion;
        this.telefono = params.telefono;
        this.rol = params.rol;
        this.estado = params.estado;
        if (params.fechaCreacion instanceof Date) {
            this.fechaCreacion = params.fechaCreacion;
        } else {
            this.fechaCreacion = new Date(params.fechaCreacion);
        }
        if (params.ultimaSesion instanceof Date) {
            this.ultimaSesion = params.ultimaSesion;
        } else {
            this.ultimaSesion = new Date(params.ultimaSesion);
        }
        this.contrasena = '';
        this.forzarCambioContrasena = params.forzarCambioContrasena;
    }

    public async cambiarContrasena(contrasenaActual: string, nuevaContrasena: string) {
        if (await hashContrasena(contrasenaActual) == this.contrasena) {
            this.asignarContrasena(nuevaContrasena);
            return;
        }

        throw new Error('the password is not valid');
    }
    public forzarElCambioContrasena() {
        this.forzarCambioContrasena = true;
    }

    public obtenerParametrosDB() {
        return {
            contrasena: this.contrasena,
            forzarCambioContrasena: this.forzarCambioContrasena,
        };
    }
}


const juan = new Usuario ({
    idUsuario: 1,
    identificacion: "123456789",
    nombre: "Juan",
    apellidos: "Pérez",
    email: "juan@example.com",
    direccion: "Calle Falsa 123",
    telefono: "1234567890",
    rol: "cliente",
    estado: EstadoUsuario.HABILITADO,
    fechaCreacion: new Date(),
    ultimaSesion: new Date(),
    contrasena: "password123",
    forzarCambioContrasena: false,
});

console.log(juan)