import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute,NavigationStart } from '@angular/router';
import { GlobalService } from '../global.service';
import { tarjeta,Viewtarjeta } from '../tarjeta';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-lectura',
  templateUrl: './lectura.component.html',
  styleUrls: ['./lectura.component.scss']
})
export class LecturaComponent implements OnInit {

  constructor(public router: Router, public route: ActivatedRoute,private global:GlobalService, private _card: MatCardModule) { }

  ngOnInit(): void {
  }

  public search_tarjeta:number = -1; 
  
  public verTarjeta(id:number){
    return this.global.readtarjeta(id-1)
  }
  public getTarjetas(){
    return this.global.getTarjetas()
  }

  public getTipo(o: tarjeta) {
    return Viewtarjeta.getTipo(o);
  }

  public getTarjeta(o: tarjeta) {
    return Viewtarjeta.getTarjeta(o);
  }

  public getRoute(o: tarjeta) {
    let route;

    switch (Viewtarjeta.getTipo(o)){
      case 'TTP':
        route = 'seleccion-viajes/ttp';
        // route = "this.router.navigate(['seleccion-viajes/ttp']);"
        break;
      case'Multi':
      route = 'seleccion-viajes/multi';
        // route = "this.router.navigate(['seleccion-viajes/multi']);"
        break;
      case 'Renfe&Tú':
        route = 'seleccion-viajes/renfe';
        // route = "this.router.navigate(['seleccion-viajes/renfe']);"
        break;
      case 'Infantil':
        route = 'seleccion-viajes/infantil';
        // route = "this.router.navigate(['seleccion-viajes/infantil']);"
        break;
      case 'Azul':
        route = 'seleccion-viajes/azul';
        // route = "this.router.navigate(['seleccion-viajes/azul']);"
        break;
      
    }
    this.router.navigate([route]);
  }
  
}
