import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit {
  institucion:string= '';
  estado:string ='';
  fechaIniEdu:string='';
  fechaFinEdu:string='';
  titulo:string='';

  constructor(private educacionService : EducacionService,private router:Router) { }

  ngOnInit(): void {
  }

  onCrearEducacion():void{
    const educacion=new Educacion(this.institucion, this.estado, this.fechaIniEdu, this.fechaFinEdu, this.titulo);
    this.educacionService.crearEducacion(educacion).subscribe(
      data=>{
        alert("Nueva Experiencia añadida");
        this.router.navigate(['/educacion']);
    },err =>{
      alert("la operacion fallo");
      this.router.navigate(['']);
    }
    )
  }

}
