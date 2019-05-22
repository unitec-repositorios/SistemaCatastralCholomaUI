import { Component, OnInit } from '@angular/core';
import { FichaUrbana } from '../../models/ficha-urbana';
import { FichaUrbanaService } from 'src/app/services/ficha-urbana.service';


@Component({
  selector: 'app-ficha-urbana',
  templateUrl: './ficha-urbana.component.html',
  styleUrls: ['./ficha-urbana.component.css']
})

export class FichaUrbanaComponent implements OnInit {

  ficha: FichaUrbana = new FichaUrbana();

  tipoPropiedades: string;
  Propiedades: string[] = ['Propiedad Normal', 'Condominio (P.H.)'];

  mapa: string;
  bloque: string;
  predio: string;

  Negocios: {nombre: string, direccion: string}[] = [
    {"nombre": "Carlos Moncada", "direccion": "5 calle, 14 avenida"},
    {"nombre": "Ignacio Salazar", "direccion": "14 calle, 10 avenida"}
  ];

  sexo: string;

  clickedButton1(){
    document.getElementById("prop-N").className = "selected-button";
    document.getElementById("prop-C").className = "toggle-buttons";
  }

  clickedButton2(){
    document.getElementById("prop-C").className = "selected-button";
    document.getElementById("prop-N").className = "toggle-buttons";
  }

  //constructor() { }

  constructor(private fichasService: FichaUrbanaService) { }

  ngOnInit() {
  }

  submitForm(): void {

    this.ficha.claveCatastral = this.mapa + this.bloque + this.predio;
    
    this.fichasService.saveFicha(this.ficha)
      .subscribe(res => {
        console.log(this.ficha);
        console.log(res);
        alert('Ficha Urbana agregada con exito')
      },
      err => {
        console.log(err);
        alert('Error al agregar ficha');
      }
    )
  }

}
