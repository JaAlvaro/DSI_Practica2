import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';
import { contacto,Viewcontacto } from '../contacto';
import {MatTable} from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor(public router: Router, public route: ActivatedRoute,
    private global:GlobalService) { }

  ngOnInit(): void {
  }

  
  public editar(id)
  {
    this.router.navigate(['/edit',id,{id2:'4X4X',otro:57 } ]);
  }

}
