import { Component, OnInit } from '@angular/core';
import { FichaUrbana } from '../../models/ficha-urbana';


@Component({
  selector: 'app-ficha-urbana',
  templateUrl: './ficha-urbana.component.html',
  styleUrls: ['./ficha-urbana.component.css']
})

export class FichaUrbanaComponent implements OnInit {

  tipoPropiedades: string;
  Propiedades: string[] = ['Propiedad Normal', 'Condominio (P.H.)'];

  Negocios: {nombre: string, direccion: string}[] = [
    {"nombre": "Carlos Moncada", "direccion": "5 calle, 14 avenida"},
    {"nombre": "Ignacio Salazar", "direccion": "14 calle, 10 avenida"}
  ];

  sexo: string;

  clickedButton1(){
    document.getElementById("prop-N").className = "selected-button";
    document.getElementById("prop-C").className = "RadioButtons";
  }

  clickedButton2(){
    document.getElementById("prop-C").className = "selected-button";
    document.getElementById("prop-N").className = "RadioButtons";
  }

  //constructor() { }

  ngOnInit() {
  }

}
