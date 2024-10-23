import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Miguel';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }
  
  changeClient():void {
    this.name = 'Barbara';
    this.gender = 'female';
  }

  // i18 Plural && slice
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo'];
  public clientsMap = {
    '=0': 'No hay clientes papu, podes pasar',
    '=1': 'Hay un cliente esperando, jodete namas tú boludo',
    'other': 'Ostia tio chaval maquina toro, hay # clientes esperando =O'  
  }

  mandarALevantarCliente():void {
    this.clients.shift();
  }

  //keyValue Pipe && JSON
  public person = {
    name: 'Miguel Eduardo',
    age: '17',
    addres: 'la casa de obama'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000);

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve( 'Tenemos data en la promesa')
    }, 3500);
  })
}
