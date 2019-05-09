import { Component, OnInit } from '@angular/core';
import { FichaCatastral } from '../../models/ficha-catastral';
import { FichasCatastralesService } from '../../services/fichas-catastrales.service';

@Component({
  selector: 'app-ficha-catastral',
  templateUrl: './ficha-catastral.component.html',
  styleUrls: ['./ficha-catastral.component.css']
})
export class FichaCatastralComponent implements OnInit {

  ficha: FichaCatastral = new FichaCatastral();

  constructor(private fichasService: FichasCatastralesService) { }
  //constructor() { }
  ngOnInit() {
  }
  
  submitForm(): void {
    this.fichasService.saveFicha(this.ficha)
      .subscribe(res => {
        console.log(this.ficha);
        console.log(res);
      },
      err => console.log(err)
    )
  }
  
}
