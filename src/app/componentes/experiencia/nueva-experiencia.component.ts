import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css'],
})
export class NuevaExperienciaComponent implements OnInit {
  nombreEmpresa: string = '';
  actual: string = '';
  fechaIniExp: string = '';
  fechaFinExp: string = '';
  puesto: string = '';
  referencia: string = '';
  contacto: string = '';

  constructor(
    private experienciaService: ExperienciaService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCrearExperiencia(): void {
    const experiencia = new Experiencia(
      this.nombreEmpresa,
      this.actual,
      this.fechaIniExp,
      this.fechaFinExp,
      this.puesto,
      this.referencia,
      this.contacto
    );
    this.experienciaService.crearExperiencia(experiencia).subscribe(
      (data) => {
        alert('Nueva Experiencia añadida');
        this.router.navigate(['/experiencia']);
      },
      (err) => {
        alert('la operacion fallo');
        this.router.navigate(['']);
      }
    );
  }
}
