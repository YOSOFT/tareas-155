import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tareas = [];
  constructor(public navCtrl: NavController) {

  }
  agregarTarea(){
    this.tareas.push("texto");
  }
}
