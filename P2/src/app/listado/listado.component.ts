import { Component, OnInit,ViewChild } from '@angular/core';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';
import { tarjeta,Viewtarjeta } from '../tarjeta';
import {MatTable} from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  @ViewChild(MatTable,{static:true}) tabladatos: MatTable<any>;

  constructor(public router: Router, public route: ActivatedRoute,
              private global:GlobalService,private _snackBar: MatSnackBar) { }

  ngOnInit() {}

  public displayedColumns: string[] = ['tarjeta','nombre', 'tipo','serial_number','caducidad','habitual','action2'];
  //public dataSource:tarjeta[]= this.global.datos;
  
  public search_texto:string="";
  public search_tipo:number=0;
  
  public getData()
  {
    if(this.search_tipo>0)
      if(this.search_texto!='')
        return this.global.datos.filter(c=>c.tipo==this.search_tipo && c.nombre.toLowerCase().startsWith(this.search_texto.toLowerCase()));
      else
        return this.global.datos.filter(c=>c.tipo==this.search_tipo);
    else
    {
      if(this.search_texto!='')
        return this.global.datos.filter(c=>c.nombre.toLowerCase().startsWith(this.search_texto.toLowerCase()));
      else
        return this.global.datos;
    }
      
  }

  public editar(id)
  {
    this.router.navigate(['/edit',id,{id2:'4X4X',otro:57 } ]);
  }

  public eliminar(id)
  {
      if (confirm("¿Estás seguro de eliminar la tarjeta?")) {
        let snackBarRef = this._snackBar.open('Tarjeta eliminada', '', { duration: 2000 });
        this.global.eliminar(id);
        // Lanzar explicitamente el render solo es necesario con datasource estaticos...
        // si los datos son un Observable la tabla se repinta sola!.
        this.tabladatos.renderRows();
      }
  }

  public getTipos()
  {
    return Viewtarjeta.getTipos();
  }


  public getHabitual(o:tarjeta)
  {
    return Viewtarjeta.getHabitual(o);
  }

  public getTipo(o:tarjeta)
  {
    return Viewtarjeta.getTipo(o);
  }

  public getTarjeta(o:tarjeta)
  {
    return Viewtarjeta.getTarjeta(o);
  }


  public getNtarjetas()
  {
    return this.global.getNtarjetas()
  }
}
