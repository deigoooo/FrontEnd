import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { InicioService } from 'src/app/servicios/inicio.service';

@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})
export class AcercadeComponent implements OnInit {

  public persona : Persona | undefined;
  public editPersona: Persona | undefined;

  constructor(private inicioService : InicioService) {}

  ngOnInit(): void {
    this.getPer();
  }

  public getPer():void{
    this.inicioService.getPersona().subscribe({
      next: (response:Persona) =>{
        this.persona=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}
