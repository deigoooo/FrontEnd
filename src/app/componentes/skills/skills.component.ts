import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public skillss:Skills[]=[];
  public modificarSkills:Skills|undefined;
  public eliminarSkills:Skills|undefined;

  constructor(private skillsService:SkillsService, private router:Router) { }

  ngOnInit(): void {

    this.verSkills();

  }

  public verSkills(): void {
    this.skillsService.verSkills().subscribe(data=>{this.skillss=data;})
  }
  
  public onEliminarSkills(idSki:number):void{
    this.skillsService.eliminarSkills(idSki).subscribe({
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
