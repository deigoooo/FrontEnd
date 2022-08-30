import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Skills } from '../model/skills';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public verSkills():Observable<Skills[]>{
    return this.http.get<Skills[]>(`${this.apiServerUrl}/skills/todo`);
  }
  public modificarSkills(skills: Skills):Observable<Skills>{
    return this.http.put<Skills>(`${this.apiServerUrl}/skills/modificar`,skills);
  }
  public crearSkills(skills: Skills):Observable<Skills>{
    return this.http.post<Skills>(`${this.apiServerUrl}/skills/crear`,skills);
  }
  public eliminarSkills(skillsId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/skills/eliminar/${skillsId}`);
  }
  public buscarSkills(idSki: number):Observable<Skills>{
    return this.http.get<Skills>(`${this.apiServerUrl}/skills/buscar/${idSki}`);
  }

}
