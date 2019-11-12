import { Component, OnInit } from '@angular/core';
import { Empleado} from 'src/app/models/empleado';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-fichas',
  templateUrl: './fichas.component.html',
  styleUrls: ['./fichas.component.css']
})
export class FichasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
