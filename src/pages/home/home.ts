import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { TareaProvider } from '../../providers/tarea/tarea';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tareas = [];
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
}
