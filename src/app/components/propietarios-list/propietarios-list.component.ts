import { Component, OnInit, ViewChild } from '@angular/core';
import { PropietarioService } from '../../services/propietario.service'; 
import { Propietario } from '../../models/propietario'
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-propietarios-list',
  templateUrl: './propietarios-list.component.html',
  styleUrls: ['./propietarios-list.component.css']
})
export class PropietariosListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombres', 'apellidos', 'telefono', 'rtn', 'sexo', 'nacionalidad'];
  dataSource: MatTableDataSource<Propietario>;

  propietarios: any = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private propietariosService: PropietarioService) {}

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

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

