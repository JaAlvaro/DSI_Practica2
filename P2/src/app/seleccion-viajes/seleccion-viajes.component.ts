import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute,NavigationStart } from '@angular/router';
import { GlobalService } from '../global.service';
import { contacto,Viewcontacto } from '../contacto';

@Component({
  selector: 'app-seleccion-viajes',
  templateUrl: './seleccion-viajes.component.html',
  styleUrls: ['./seleccion-viajes.component.scss']
})
export class SeleccionViajesComponent implements OnInit {

  constructor(public router: Router, public route: ActivatedRoute,private global:GlobalService) { }

  ngOnInit(): void {
  }

}
