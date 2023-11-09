import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { FormsModule, } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InformacionProductosComponent } from './components/informacion-productos/informacion-productos.component';
import { InfoProcesosComponent } from './components/info-procesos/info-procesos.component';
import { InformacionPersonalComponent } from './components/cuenta/informacion-personal/informacion-personal.component';
import { AsideComponent } from './components/cuenta/aside/aside.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { PedidosComponent } from './components/cuenta/pedidos/pedidos.component';
import { CreaPlanComponent } from './components/plan/crea-plan/crea-plan.component';
import { GestionarPlanComponent } from './components/plan/gestionar-plan/gestionar-plan.component';
import { CriteriosDeCreacionComponent } from './components/plan/criterios-de-creacion/criterios-de-creacion.component';
import { EstimacionesComponent } from './components/estimaciones/estimaciones.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    ProductosComponent,
    RegisterComponent,
    LoginComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    InformacionProductosComponent,
    InfoProcesosComponent,
    InformacionPersonalComponent,
    AsideComponent,
    CarritoComponent,
    PedidosComponent,
    CreaPlanComponent,
    GestionarPlanComponent,
    CriteriosDeCreacionComponent,
    EstimacionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
