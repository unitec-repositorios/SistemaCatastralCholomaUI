import { Component, OnInit } from '@angular/core';
import { Propietario } from '../../models/propietario';
import { PropietarioService }from '../../services/propietario.service';

@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.component.html',
  styleUrls: ['./propietario.component.css']
})
export class PropietarioComponent implements OnInit {

  propietario: Propietario = new Propietario();


  //constructor() { }

  ngOnInit() {
  }

  constructor(private propietarioService: PropietarioService) { }

  submitForm(): void {
    
    this.propietarioService.savePropietario(this.propietario)
      .subscribe(res => {
        console.log(this.propietario);
        console.log(res);
        alert('Propietario agregado con exito')
      },
      err => {
        console.log(err);
        alert('Error al agregar propietario');
      }
    )
  }

}
