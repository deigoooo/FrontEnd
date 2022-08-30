import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-modificar-skills',
  templateUrl: './modificar-skills.component.html',
  styleUrls: ['./modificar-skills.component.css']
})
export class ModificarSkillsComponent implements OnInit {

  public skills: Skills[] = [];
  ski: Skills = null;
  public modificarSkills: Skills | undefined;

  constructor(
    private skillsService: SkillsService,
    private activatedRouter: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['idSki'];
    this.skillsService.buscarSkills(id).subscribe(
      (data) => {
        this.ski = data;
        console.log(this.ski);
      },
      (err) => {
        alert('No se recibio ninguna id');
        this.router.navigate(['']);
      }
    );
  }

  public onModificarSkills(): void {
    this.skillsService.modificarSkills(this.ski).subscribe({
      next: (response: Skills) => {
        console.log(response);
        this.router.navigate(['']);
      },
      error: (error: HttpErrorResponse) => {
        alert('No se pudo modificar');
      },
    });
  }

}
