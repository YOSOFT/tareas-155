import { Injectable } from '@angular/core';

/*
  Generated class for the TareaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TareaProvider {

  tareas = [];
  constructor() {
    console.log('Hello TareaProvider Provider');
  }
  obtenerTareas(){
    return this.tareas;
  }
  agregarTareas(tarea){
    this.tareas.push(tarea);
  }
  editarTarea(){}
  archivarTarea(indice: any){
    this.tareas.splice(indice,1);
  }
}
