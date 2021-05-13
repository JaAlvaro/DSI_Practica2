import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute,NavigationStart } from '@angular/router';
import { GlobalService } from '../global.service';
import { tarjeta,Viewtarjeta } from '../tarjeta';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ver-detalle',
  templateUrl: './ver-detalle.component.html',
  styleUrls: ['./ver-detalle.component.scss']
})

export class VerDetalleComponent implements OnInit {

  constructor(public router: Router, public route: ActivatedRoute,private global:GlobalService, private _snackBar: MatSnackBar) { }
  public id;

  public tarjeta:tarjeta;

  ngOnInit() {
    
    this.route.paramMap.subscribe(params=>{

      this.id =params['params']['id'];
      console.log(params['params']['id']);
      if(this.id>0)
        this.tarjeta=this.global.readtarjeta(this.id-1);
      else 
        this.tarjeta=new tarjeta();
    })
    
  }

  public getTipos()
  {
    return Viewtarjeta.getTipos();
  }

  public getTiposCreacion()
  {
    return Viewtarjeta.getTiposCreacion();
  }

  public aceptar()
  {
    if (this.tarjeta.nombre == null || this.tarjeta.nombre == ""){
      let snackBarRef = this._snackBar.open('Nombre vacío, introduce uno por favor.','',{duration: 2000});
    } else if (this.tarjeta.serial_number == null || this.tarjeta.serial_number == ""){
      let snackBarRef = this._snackBar.open('Número de serie vacío, introduce uno por favor.','',{duration: 2000});
    } else if (this.tarjeta.tipo== null){
      let snackBarRef = this._snackBar.open('Tipo vacío, selecciona uno por favor.','',{duration: 2000});
    } else {
      if(this.id>0)
        this.global.updatetarjeta(this.tarjeta.id-1,this.tarjeta);
      else
        this.global.nuevotarjeta(this.tarjeta);   
      this.router.navigate(['list/']);
    }
  }

  public cancelar()
  {
    this.router.navigate(['list/']);
  }

  public editar(id)
  {
    this.router.navigate(['/edit',id,{id2:'4X4X',otro:57 } ]);
  }
}
