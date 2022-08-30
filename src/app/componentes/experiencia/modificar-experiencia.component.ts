import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-modificar-experiencia',
  templateUrl: './modificar-experiencia.component.html',
  styleUrls: ['./modificar-experiencia.component.css'],
})
export class ModificarExperienciaComponent implements OnInit {
  public experiencia: Experiencia[] = [];
  exp: Experiencia = null;
  public modificarExperiencia: Experiencia | undefined;

  constructor(
    private experienciaService: ExperienciaService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['idExp'];
    this.experienciaService.buscarExperiencia(id).subscribe(
      (data) => {
        this.exp = data;
        console.log(this.exp);
      },
      (err) => {
        alert('No se recibio ninguna id');
        this.router.navigate(['']);
      }
    );
  }

  public onModificarExperiencia(): void {
    this.experienciaService.modificarExperiencia(this.exp).subscribe({
      next: (response: Experiencia) => {
        console.log(response);
        this.router.navigate(['']);
      },
      error: (error: HttpErrorResponse) => {
        alert('No se pudo modificar');
      },
    });
  }

}
