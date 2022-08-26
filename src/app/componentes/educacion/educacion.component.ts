import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  public educaciones:Educacion[]=[];
  public modificarEducacion:Educacion|undefined;
  public eliminarEducacion:Educacion|undefined;

  constructor(private educacionService:EducacionService) { }

  ngOnInit(): void {

    this.verEducaciones();

  }
  public verEducaciones(): void {
    this.educacionService.verEducacion().subscribe({
      next:(Response:Educacion[])=>{
        this.educaciones=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }



  public onOpenModal(mode:String, educacion?:Educacion):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle', 'modal');
    if (mode==='crear'){
      button.setAttribute('data-target','#crearEducacionModal');
    }else if (mode==='eliminar'){
      this.eliminarEducacion=educacion;
      button.setAttribute('data-target','#eliminarEducacionModal');
    }else if (mode==='modificar'){
      this.modificarEducacion=educacion;
      button.setAttribute('data-target','#modificarEducacionModal')
    }
    container?.appendChild(button);
    button.click();
  }
  public onCrearEducacion(addForm:NgForm){
    document.getElementById('crear-educacion-form')?.click();
    this.educacionService.crearEducacion(addForm.value).subscribe({
      next:(response:Educacion)=>{
        console.log(response);
        this.verEducaciones();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    })
  }
  public onModificarEducacion(educacion:Educacion){
    this.modificarEducacion=educacion;
    document.getElementById('crear-educacion-form')?.click();
    this.educacionService.modificarEducacion(educacion).subscribe({
      next:(response:Educacion)=>{
        console.log(response);
        this.verEducaciones();        
      },
      error:(error:HttpErrorResponse)=>{
      alert(error.message);
      }
    })
  }

  public onEliminarEducacion(idEdu:number):void{
    this.educacionService.eliminarEducacion(idEdu).subscribe({
      next:(response:void)=>{
        console.log(response);
        this.verEducaciones();        
      },
      error:(error:HttpErrorResponse)=>{
      alert(error.message);
      }
    })
  }

}
