import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  public experiencias:Experiencia[]=[];
  public modificarEducacion:Experiencia|undefined;
  public eliminarExperiencia:Experiencia|undefined;

  constructor(private experienciaService:ExperienciaService, private router:Router) { }

  ngOnInit(): void {
    
    this.verExperiencia();

  }

  public verExperiencia(): void {
    this.experienciaService.verExperiencia().subscribe(data=>{this.experiencias=data;})
  }
  
  public onEliminarExperiencia(idExp:number):void{
    this.experienciaService.eliminarExperiencia(idExp).subscribe({
      next:(response:void)=>{
        alert("Se elimino correctamente el elemento");
        this.router.navigate(['']);
               
      },
      error:(error:HttpErrorResponse)=>{
      alert('No se pudo eliminar elemento');
      this.router.navigate(['']);
      }
    })
  }

}
