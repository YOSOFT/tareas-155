import { Component } from '@angular/core';
import { NavController, AlertController, reorderArray } from 'ionic-angular';
import { TareaProvider } from '../../providers/tarea/tarea';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tareas = [];
  ordenHabilitado = false;
  constructor
  (public navCtrl: NavController,
    private alerta: AlertController,
    private servicioTarea: TareaProvider
    ) {
      this.tareas = servicioTarea.obtenerTareas();
  }
  agregarTarea(){
    // this.tareas.push("texto");
    let alert = this.alerta.create({
      title: "Agregar tarea",
      inputs: [{
        type: "text",
        name: "textoTarea"
      }],
      buttons:[
        {text: "Cancelar"},
        {
          text: "Agregar",
          handler: (datos) => { console.log(datos);
            // this.tareas.push(datos.textoTarea);
            this.servicioTarea.agregarTareas(datos.textoTarea);
          }
        }
      ]
    });
    alert.present();
  }
  archivarTarea(indice){
    console.log(indice);
    this.servicioTarea.archivarTarea(indice);
  }
  editarTarea(indiceTarea){
    let alert = this.alerta.create({
      title: "Editar tarea",
      inputs: [{
        name: "textoNuevo",
        value: this.tareas[indiceTarea]
      }],
      buttons: [
        { text: "cancelar"},
        {
          text: "listo",
          handler: (datos) => {
            this.servicioTarea.editarTarea(indiceTarea, datos.textoNuevo)
          }
        },
      ]
    });
    alert.present();
  }

  ordenarLista(evento){
    console.log(evento);
    reorderArray(this.tareas,evento);
  }
  toggleOrden(){
    this.ordenHabilitado = !this.ordenHabilitado;
  }
}
