import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { InfoProcesosComponent } from './components/info-procesos/info-procesos.component';
import { InformacionProductosComponent } from './components/informacion-productos/informacion-productos.component';
import { InformacionPersonalComponent } from './components/cuenta/informacion-personal/informacion-personal.component';
import { AsideComponent } from './components/cuenta/aside/aside.component';
import { loginGuard } from './guards/login.guard';
import { CarritoComponent } from './components/carrito/carrito.component';
import { PedidosComponent } from './components/cuenta/pedidos/pedidos.component';
import { CreaPlanComponent } from './components/plan/crea-plan/crea-plan.component';
import { GestionarPlanComponent } from './components/plan/gestionar-plan/gestionar-plan.component';
import { CriteriosDeCreacionComponent } from './components/plan/criterios-de-creacion/criterios-de-creacion.component';
import { EstimacionesComponent } from './components/estimaciones/estimaciones.component';

const routes: Routes = [
  {
    path:'users', component:UsersListComponent,
    
  },
  {path: 'productos', component:ProductosComponent,},
  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path: 'inicio', component:InicioComponent},
  {path: 'informacionProductos',component:InformacionProductosComponent}, 
  {path: 'informacionProcesos',component:InfoProcesosComponent}, 
  {path: 'cuenta',component: InformacionPersonalComponent, canActivate:[loginGuard]},
  {path: 'asideCuenta',component: AsideComponent},
  { path: 'carrito', component: CarritoComponent },
  { path: 'pedidos', component: PedidosComponent, canActivate: [loginGuard] },
  { path: 'crearPlan', component: CreaPlanComponent },
  { path: 'gestionarPlan', component: GestionarPlanComponent },
  { path: 'criterioscreacion', component: CriteriosDeCreacionComponent },
  {path:'estimaciones', component: EstimacionesComponent},
  {path:'**', component: InicioComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
