export class Experiencia{
    idExp?:number;
    nombreEmpresa:string;
    actual:string;
    fechaIniExp:string;
    fechaFinExp:string;
    puesto:string;
    referencia:string;
    contacto:string;

    constructor(nombreEmpresa:string, actual:string, fechaIniExp:string, fechaFinExp:string, puesto:string, referencia:string, contacto:string){
        this.nombreEmpresa=nombreEmpresa;
        this.actual=actual;
        this.fechaIniExp=fechaIniExp;
        this.fechaFinExp=fechaFinExp;
        this.puesto=puesto;
        this.referencia=referencia;
        this.contacto=contacto;
    }
}