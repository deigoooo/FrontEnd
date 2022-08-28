export class Skills{
    idSki?:number;
    habilidad:string;
    nivel:string;
    img:string;

    constructor(habilidad:string, nivel:string, img:string){
        this.habilidad=habilidad;
        this.nivel=nivel;
        this.img=img;
    }
}