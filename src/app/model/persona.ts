export class Persona{
    id?:number;
    nombre:string;
    apellido:string;
    domicilio:string;
    fechaNac:string;
    telefono:string;
    correo:string;
    sobre_mi:string;
    url_foto:string;
    url_fondo:string;
    usuario:string;
    pass:string;
    
    constructor(nombre:string, apellido:string, domicilio:string, fechaNac:string, telefono:string, correo:string, sobre_mi:string, url_foto:string, url_fondo:string, usuario:string, pass:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.domicilio=domicilio;
        this.fechaNac=fechaNac;
        this.telefono=telefono;
        this.correo=correo;
        this.sobre_mi=sobre_mi;
        this.url_foto=url_foto;
        this.url_fondo=url_fondo;
        this.usuario=usuario;
        this.pass=pass;
    }
}