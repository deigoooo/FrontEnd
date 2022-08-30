import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-nueva-skills',
  templateUrl: './nueva-skills.component.html',
  styleUrls: ['./nueva-skills.component.css']
})
export class NuevaSkillsComponent implements OnInit {

  habilidad:string= '';
  nivel:string ='';
  img:string='';

  constructor(private skillsService:SkillsService, private router:Router) { }

  ngOnInit(): void {
  }

  onCrearSkills():void{
    const skills=new Skills(this.habilidad, this.nivel, this.img);
    this.skillsService.crearSkills(skills).subscribe(
      data=>{
        alert("Nueva habilidad añadida");
        this.router.navigate(['/skills']);
    },err =>{
      alert("la operacion fallo");
      this.router.navigate(['']);
    }
    )
  }

}
