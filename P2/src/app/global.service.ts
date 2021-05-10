import { Injectable } from '@angular/core';
import { Icontacto,contacto,Viewcontacto } from './contacto';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  public datos: contacto[] = [
    {id: 1, nombre: 'Tarjeta TTP', serial_number: '0061274879', caducidad: new Date(2024, 2, 29), tipo: 1, habitual: true},
    {id: 2, nombre: 'Tarjeta Multi',serial_number: '1061295300', caducidad: new Date(2030, 7, 12), tipo: 2, habitual: false},
    {id: 3, nombre: 'Tarjeta Renfe&Tú',  serial_number: '8064374879',caducidad: new Date(2025, 1, 25),tipo: 3, habitual:false},

  ];

  
  

  public readcontacto(id:number):contacto
  {
    return new contacto(this.datos[id]);
  }

  public eliminar(id)
  {
    console.log('Eliminando:' + id);
    console.log(this.datos);
    this.datos.splice(id-1,1);
    let i=1;
    for(let dato of this.datos)
    {
      dato.id=i;
      i++;
    }
  }

  public updatecontacto(id:number,contacto:contacto)
  {
    this.datos[id]=contacto;
  }

  public nuevocontacto(contacto:contacto)
  {
    contacto.id=this.datos.length;
    this.datos.push(contacto);
  }

  public getNcontactos()
  {
    return this.datos.length;
  }

  public getTarjetas(){
    let tarjetas = [];
    for (let i = 0; i<this.datos.length; i++){
      tarjetas[i] = this.datos[i].id; 
    }
    console.log(tarjetas);
    return tarjetas;
  }
}
