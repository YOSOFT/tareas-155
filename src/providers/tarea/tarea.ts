import { Injectable } from '@angular/core';

/*
  Generated class for the TareaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TareaProvider {


  tareas = [];
  tareasArchivadas = [];
  constructor() {
    console.log('Hello TareaProvider Provider');
  }
  obtenerTareas(){
    return this.tareas;
  }
  obtenerTareasArchivadas(): any {
    return this.tareasArchivadas;
  }
  agregarTareas(tarea){
    this.tareas.push(tarea);
  }
  editarTarea(){}
  archivarTarea(indice: any){
    let tarea = this.tareas[indice];
    this.tareasArchivadas.push(tarea);
    this.tareas.splice(indice,1);
  }
}
