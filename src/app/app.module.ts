import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { SubheaderComponent } from './pages/subheader/subheader.component';
import { ListoParaAyudarteComponent } from './pages/listo-para-ayudarte/listo-para-ayudarte.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { DondeEstamosComponent } from './pages/donde-estamos/donde-estamos.component';
import { PorqueElegirnosComponent } from './pages/porque-elegirnos/porque-elegirnos.component';
import { ProyectosComponent } from './pages/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    SubheaderComponent,
    ListoParaAyudarteComponent,
    ServiciosComponent,
    DondeEstamosComponent,
    PorqueElegirnosComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
