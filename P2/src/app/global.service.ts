import { Injectable } from '@angular/core';
import { Itarjeta,tarjeta,Viewtarjeta } from './tarjeta';
import { Iviaje,viaje} from './viaje';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  public datos: tarjeta[] = [
    {id: 1, nombre: 'Tarjeta TTP', serial_number: '0061274879', caducidad: new Date(2024, 2, 29), tipo: 1, habitual: true},
    {id: 2, nombre: 'Tarjeta Multi',serial_number: '1061295300', caducidad: new Date(2030, 7, 12), tipo: 2, habitual: false},
    {id: 3, nombre: 'Tarjeta Renfe&Tú',  serial_number: '8064374879',caducidad: new Date(2025, 1, 25),tipo: 3, habitual:false},

  ];

  public viajesRenfe: viaje[] = [
    {id: 1, nombre: 'Viaje sencillo zona A', precio: '2.00€', icon: '../../assets/cercanias-icon.png'},
    {id: 2, nombre: 'Viaje sencillo zona B', precio: '2.50€', icon: '../../assets/cercanias-icon.png'},
    {id: 3, nombre: 'Viaje sencillo zona C', precio: '3.00€', icon: '../../assets/cercanias-icon.png'},
    {id: 4, nombre: '10 viajes sencillos', precio: '20.00€', icon: '../../assets/cercanias-icon.png'},
    {id: 5, nombre: 'Viaje Media Distancia', precio: '10.00€', icon: '../../assets/renfe-icon.png'}
  ];

  public viajesMulti: viaje[] = [
    {id: 1, nombre: 'Viaje Metro + MetroSur', precio: '1.50€', icon: '../../assets/metro-icon.png'},
    {id: 2, nombre: 'Viaje Metro Ligero', precio: '2.00€', icon: '../../assets/metroligero-icon.png'},
    {id: 3, nombre: 'Viaje autobús', precio: '1.50€', icon: '../../assets/bus-icon.svg'},
    {id: 4, nombre: '10 viajes MetroBús', precio: '12.50€', icon: '../../assets/metro-icon.png'}
  ];

  public viajesTTP: viaje[] = [
    {id: 1, nombre: 'Abono joven', precio: '20.00€', icon: '../../assets/logo_crtm.png'},
    {id: 2, nombre: 'Abono adulto', precio: '65.00€', icon: '../../assets/logo_crtm.png'}
  ];

  public viajesInfantil: viaje[] = [
    {id: 1, nombre: 'Abono infantil', precio: '15.00€', icon: '../../assets/logo_crtm.png'}
  ];

  public viajesAzul: viaje[] = [
    {id: 1, nombre: 'Abono azul', precio: '30.00€', icon: '../../assets/logo_crtm.png'}
  ];

  public readtarjeta(id:number):tarjeta
  {
    return new tarjeta(this.datos[id]);
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

  public updatetarjeta(id:number,tarjeta:tarjeta)
  {
    this.datos[id]=tarjeta;
  }

  public nuevotarjeta(tarjeta:tarjeta)
  {
    tarjeta.id=this.datos.length+1;
    this.datos.push(tarjeta);
  }

  public getNtarjetas()
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
