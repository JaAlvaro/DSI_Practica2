import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute,NavigationStart } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-seleccion-viajes',
  templateUrl: './seleccion-viajes.component.html',
  styleUrls: ['./seleccion-viajes.component.scss']
})
export class SeleccionViajesComponent implements OnInit {
  public tipoTarjetaSeleccionada;
  public viajes;

  constructor(public router: Router, public route: ActivatedRoute,private global:GlobalService) {
    
  }
  

  ngOnInit(): void {
    this.route.paramMap.subscribe(params=>{

    this.tipoTarjetaSeleccionada =params['params']['tipoTarjetaSeleccionada'];
    console.log(params['params']['tipoTarjetaSeleccionada']);
    switch (this.tipoTarjetaSeleccionada){
      case 'renfe':
        this.viajes=this.global.viajesRenfe;
        break;
      case 'multi':
        this.viajes=this.global.viajesMulti;
        break;
      case 'ttp':
        this.viajes=this.global.viajesTTP;
        break;
      case 'infantil':
        this.viajes=this.global.viajesInfantil;
        break;
      case 'azul':
        this.viajes=this.global.viajesAzul;
    }
  
  })
  }

  public getViajes(){
    return this.viajes;
  }
}
