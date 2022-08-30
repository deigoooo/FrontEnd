import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ModificarEducacionComponent } from './componentes/educacion/modificar-educacion.component';
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { ModificarExperienciaComponent } from './componentes/experiencia/modificar-experiencia.component';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { SkillsComponent } from './componentes/skills/skills.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'acercade', component: AcercadeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'experiencia', component: ExperienciaComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'nuevaEducacion', component:NuevaEducacionComponent },
  { path: 'modificarEducacion/:idEdu', component:ModificarEducacionComponent},
  { path: 'nuevaExperiencia', component:NuevaExperienciaComponent},
  { path: 'modificarExperiencia/:idExp', component:ModificarExperienciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
