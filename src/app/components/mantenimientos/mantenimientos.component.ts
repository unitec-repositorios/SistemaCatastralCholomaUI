import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

//datos en memoria
class Sexo {
  nombre: string;
}

@Component({
  selector: 'app-mantenimientos',
  templateUrl: './mantenimientos.component.html',
  styleUrls: ['./mantenimientos.component.css']
})
export class MantenimientosComponent implements OnInit {

  displayedColumns: string[] = ['sexo', 'actions'];
  dataSource: MatTableDataSource<Sexo>;

  sexo: string; //value of input sexo field

  sexos: Sexo[] = [];

  constructor() { }

  ngOnInit() {
    // Assign the data to the data source for the table to render
    this.sexos.push({nombre: 'Masculino'});
    this.sexos.push({nombre: 'Femenino'});
    this.sexos.push({nombre: 'Helicoptero de guerra'});
    this.dataSource = new MatTableDataSource(this.sexos);
  }

  addSex(): void {
    this.sexos.push({nombre: this.sexo});
    this.sexo = '';
    this.dataSource = new MatTableDataSource(this.sexos);
  }

  deleteSex(nombreSexo: string): void {
    this.sexos = this.sexos.filter(obj => obj.nombre !== nombreSexo);
    this.dataSource = new MatTableDataSource(this.sexos);
  }
}
