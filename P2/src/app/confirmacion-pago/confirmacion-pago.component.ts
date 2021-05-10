import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute,NavigationStart } from '@angular/router';
import { GlobalService } from '../global.service';
import { contacto,Viewcontacto } from '../contacto';

@Component({
  selector: 'app-confirmacion-pago',
  templateUrl: './confirmacion-pago.component.html',
  styleUrls: ['./confirmacion-pago.component.scss']
})
export class ConfirmacionPagoComponent implements OnInit {

  constructor(public router: Router, public route: ActivatedRoute,private global:GlobalService) { }

  ngOnInit(): void {
  }

}
