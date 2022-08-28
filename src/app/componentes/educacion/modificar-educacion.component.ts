import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-modificar-educacion',
  templateUrl: './modificar-educacion.component.html',
  styleUrls: ['./modificar-educacion.component.css'],
})
export class ModificarEducacionComponent implements OnInit {
  
  public educacion:Educacion[]=[];
  edu:Educacion=null;
  public modificarEducacion:Educacion|undefined;

  constructor(
    private educacionService: EducacionService,
    private activatedRouter: ActivatedRoute,
    private router: Router

  ) {}

  ngOnInit(): void {
    
    const id = this.activatedRouter.snapshot.params['idEdu'];
    this.educacionService.buscarEducacion(id).subscribe(
      (data) => {
        this.edu = data;
        console.log(this.edu);
      },
      (err) => {
        alert('No se recibio ninguna id');
        this.router.navigate(['']);
      }
    );
  }

  public onModificarEducacion(): void{    
    this.educacionService.modificarEducacion(this.edu).subscribe({
      next:(response:Educacion)=>{
        console.log(response);
        this.router.navigate(['']);
      },
      error:(error:HttpErrorResponse)=>{
      alert('No se pudo modificar');
      }
    })
  }
}
