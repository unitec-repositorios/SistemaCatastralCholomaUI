import { Component, OnInit, ViewChild } from '@angular/core';
import { Propietario } from '../../models/propietario';
import { PropietarioService }from '../../services/propietario.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.component.html',
  styleUrls: ['./propietario.component.css']
})
export class PropietarioComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombres', 'apellidos', 'telefono', 'rtn', 'sexo', 'nacionalidad', 'actions'];
  dataSource: MatTableDataSource<Propietario>;

  propietarios: any = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  propietario: Propietario = new Propietario();


  constructor(private propietariosService: PropietarioService) { }

  ngOnInit() {
    this.propietariosService.getPropietarios()
    .subscribe(
      res => {
        console.log(res);
        this.propietarios = res;
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(this.propietarios);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      err => {
        console.log(err);
      }
    ); 
  }

  onEdit(): void {

  }

  onDelete(id: number): void {
    this.propietarios = this.propietarios.filter(x => x.id != id);
    this.dataSource = new MatTableDataSource(this.propietarios);
  }

  submitForm(): void {
    
    this.propietariosService.savePropietario(this.propietario)
      .subscribe(res => {
        console.log(this.propietario);
        console.log(res);
        alert('Propietario agregado con exito');
        this.propietarios.push(this.propietario);
        this.propietario = new Propietario();
      },
      err => {
        console.log(err);
        alert('Error al agregar propietario');
      }
    )
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
