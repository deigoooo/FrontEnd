export class Educacion{
    idEdu?:number;
    institucion:string;
    estado:string;
    fechaIniEdu:string;
    fechaFinEdu:string;
    titulo:string;

    constructor(institucion:string,estado:string, fechaIniEdu:string,fechaFinEdu:string,titulo:string){
        this.institucion=institucion;
        this.estado=estado;
        this.fechaIniEdu=fechaIniEdu;
        this.fechaFinEdu=fechaFinEdu;
        this.titulo=titulo;
    }
}