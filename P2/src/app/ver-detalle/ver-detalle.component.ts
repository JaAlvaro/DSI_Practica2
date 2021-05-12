import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute,NavigationStart } from '@angular/router';
import { GlobalService } from '../global.service';
import { contacto,Viewcontacto } from '../contacto';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ver-detalle',
  templateUrl: './ver-detalle.component.html',
  styleUrls: ['./ver-detalle.component.scss']
})

export class VerDetalleComponent implements OnInit {

  constructor(public router: Router, public route: ActivatedRoute,private global:GlobalService, private _snackBar: MatSnackBar) { }
  public id;

  public contacto:contacto;

  ngOnInit() {
    
    this.route.paramMap.subscribe(params=>{

      this.id =params['params']['id'];
      console.log(params['params']['id']);
      if(this.id>0)
        this.contacto=this.global.readcontacto(this.id-1);
      else 
        this.contacto=new contacto();
    })
    
  }

  public getTipos()
  {
    return Viewcontacto.getTipos();
  }

  public getTiposCreacion()
  {
    return Viewcontacto.getTiposCreacion();
  }

  public aceptar()
  {
    if (this.contacto.nombre == null || this.contacto.nombre == ""){
      let snackBarRef = this._snackBar.open('Nombre vacío, introduce uno por favor.','',{duration: 2000});
    } else if (this.contacto.serial_number == null || this.contacto.serial_number == ""){
      let snackBarRef = this._snackBar.open('Número de serie vacío, introduce uno por favor.','',{duration: 2000});
    } else if (this.contacto.tipo== null){
      let snackBarRef = this._snackBar.open('Tipo vacío, selecciona uno por favor.','',{duration: 2000});
    } else {
      if(this.id>0)
        this.global.updatecontacto(this.contacto.id-1,this.contacto);
      else
        this.global.nuevocontacto(this.contacto);   
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
