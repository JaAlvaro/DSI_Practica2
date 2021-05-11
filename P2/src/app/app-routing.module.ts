import { NgModule } from '@angular/core';
import { Routes, Router,RouterModule } from '@angular/router';
import { VerDetalleComponent } from './ver-detalle/ver-detalle.component';
import { ListadoComponent } from './listado/listado.component';
import { PrincipalComponent } from './principal/principal.component';
import { SeleccionViajesComponent } from './seleccion-viajes/seleccion-viajes.component';
import { PagoComponent } from './pago/pago.component';
import { LecturaComponent } from './lectura/lectura.component';
import { ConfirmacionPagoComponent } from './confirmacion-pago/confirmacion-pago.component';



const routes: Routes = [{path:'list',component:ListadoComponent},
                        {path:'',redirectTo:'/principal',pathMatch:'full'},
                        {path:'principal',component:PrincipalComponent},
                        {path:'seleccion-viajes',component:SeleccionViajesComponent},
                        {path:'edit/:id',component:VerDetalleComponent},
                        {path:'pago',component:PagoComponent},
                        {path:'lectura',component:LecturaComponent},
                        {path:'confirmacion_pago',component:ConfirmacionPagoComponent},
                        {path:'seleccion-viajes/:tipoTarjetaSeleccionada',component:SeleccionViajesComponent},
                        
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
