import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  isLogged= false;
  public experiencias:Experiencia[]=[];
  public modificarEducacion:Experiencia|undefined;
  public eliminarExperiencia:Experiencia|undefined;

  constructor(private experienciaService:ExperienciaService, 
              private router:Router,
              private tokenService: TokenService) { }

  ngOnInit(): void {
    
    this.verExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false;
    }

  }

  public verExperiencia(): void {
    this.experienciaService.verExperiencia().subscribe(data=>{this.experiencias=data;})
  }
  
  public onEliminarExperiencia(idExp:number):void{
    this.experienciaService.eliminarExperiencia(idExp).subscribe({
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
  login(){
    this.router.navigate(['/login'])
  }
  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }

}
