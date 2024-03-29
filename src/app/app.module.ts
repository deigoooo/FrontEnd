import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NuevaEducacionComponent } from './componentes/educacion/nueva-educacion.component';
import { ModificarEducacionComponent } from './componentes/educacion/modificar-educacion.component';
import { NuevaExperienciaComponent } from './componentes/experiencia/nueva-experiencia.component';
import { ModificarExperienciaComponent } from './componentes/experiencia/modificar-experiencia.component';
import { NuevaSkillsComponent } from './componentes/skills/nueva-skills.component';
import { ModificarSkillsComponent } from './componentes/skills/modificar-skills.component';
import { ModificarAcercadeComponent } from './componentes/acercade/modificar-acercade.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AcercadeComponent,
    EducacionComponent,
    ExperienciaComponent,
    SkillsComponent,
    ContactoComponent,
    FooterComponent,
    InicioComponent,
    LoginComponent,
    HomeComponent,
    NuevaEducacionComponent,
    ModificarEducacionComponent,
    NuevaExperienciaComponent,
    ModificarExperienciaComponent,
    NuevaSkillsComponent,
    ModificarSkillsComponent,
    ModificarAcercadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
