import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private educacionService:EducacionService, private router:Router) { }

  ngOnInit(): void {

    this.verEducaciones();

  }
  public verEducaciones(): void {
    this.educacionService.verEducacion().subscribe(data=>{this.educaciones=data;})
  }
  
  public onEliminarEducacion(idEdu:number):void{
    this.educacionService.eliminarEducacion(idEdu).subscribe({
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
