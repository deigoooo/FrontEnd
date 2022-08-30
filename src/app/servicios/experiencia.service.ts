import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http : HttpClient) { }

  private apiServerUrl=environment.apiBaseUrl;

  public verExperiencia():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.apiServerUrl}/experiencia/todo`);
  }
  public modificarExperiencia(experiencia: Experiencia):Observable<Experiencia>{
    return this.http.put<Experiencia>(`${this.apiServerUrl}/experiencia/modificar`,experiencia);
  }
  public crearExperiencia(experiencia: Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(`${this.apiServerUrl}/experiencia/crear`,experiencia);
  }
  public eliminarExperiencia(experienciaId: number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/experiencia/eliminar/${experienciaId}`);
  }
  public buscarExperiencia(idExp: number):Observable<Experiencia>{
    return this.http.get<Experiencia>(`${this.apiServerUrl}/experiencia/buscar/${idExp}`);
  }
}
