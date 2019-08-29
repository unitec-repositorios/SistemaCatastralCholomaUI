import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  newUser: Empleado = new Empleado();

  constructor(private empleadosService: EmpleadosService) { }

  ngOnInit() {
  }

  sendUser() : void {
    this.empleadosService.saveEmpleado(this.newUser)
      .subscribe(
        res => {
          console.log(res);
          alert('Usuario nuevo creado con exito');
          this.newUser = new Empleado();
        },
        err => {
          alert('Error al crear usuario');
          this.newUser = new Empleado();
        }
      );
  }

}
