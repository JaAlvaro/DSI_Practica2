import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute,NavigationStart } from '@angular/router';
import { GlobalService } from '../global.service';
import { contacto,Viewcontacto } from '../contacto';
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
    return this.global.readcontacto(id-1)
  }
  public getTarjetas(){
    return this.global.getTarjetas()
  }

  public getTipo(o: contacto) {
    return Viewcontacto.getTipo(o);
  }

  public getTarjeta(o: contacto) {
    return Viewcontacto.getTarjeta(o);
  }
}
