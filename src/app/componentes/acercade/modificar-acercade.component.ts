import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { InicioService } from 'src/app/servicios/inicio.service';

@Component({
  selector: 'app-modificar-acercade',
  templateUrl: './modificar-acercade.component.html',
  styleUrls: ['./modificar-acercade.component.css']
})
export class ModificarAcercadeComponent implements OnInit {
  
  public persona:Persona[]=[];
  per: Persona = null;
  public modificarDescripcion: Persona | undefined;

  constructor(
    private inicioService: InicioService,
    private activatedRouter: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['id'];
    this.inicioService.buscarPersona(id).subscribe(
      (data) => {
        this.per = data;
        console.log(this.per);
      },
      (err) => {
        console.log(this.per);
        alert('No se recibio ninguna id');
        this.router.navigate(['']);
      }
    );

  }
  public onModificarPersona(): void {
    this.inicioService.modificarPersona(this.per).subscribe({
      next: (response: Persona) => {
        console.log(response);
        this.router.navigate(['']);
      },
      error: (error: HttpErrorResponse) => {
        alert('No se pudo modificar');
      },
    });
  }
}
