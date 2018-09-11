import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tareas = [];
  constructor
  (public navCtrl: NavController,
    private alerta: AlertController
    ) {

  }
  agregarTarea(){
    this.tareas.push("texto");
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
            this.tareas.push(datos.textoTarea);
          }
        }
      ]
    });
    alert.present();
  }
}
