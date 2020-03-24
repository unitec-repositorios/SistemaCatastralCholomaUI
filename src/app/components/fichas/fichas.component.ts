import { Component, OnInit, ViewChild } from '@angular/core';
import { Empleado} from 'src/app/models/empleado';
import { EmpleadosService } from '../../services/empleados.service';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { FichaCatastral } from 'src/app/models/ficha-catastral';
import { FichasCatastralesService } from 'src/app/services/fichas-catastrales.service';

@Component({
  selector: 'app-fichas',
  templateUrl: './fichas.component.html',
  styleUrls: ['./fichas.component.css']
})
export class FichasComponent implements OnInit {
  fichas: any = [];
  displayedColumns: string[] = ["cocata","identidadPropietario","mapa"];
  dataSource: MatTableDataSource<FichaCatastral>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private fichasCatastralesService: FichasCatastralesService) { }

  ngOnInit() {
     this.fichasCatastralesService.getFichaCatastrales()
       .subscribe(
         res => {
           console.log(res);
           this.fichas = res;
           // Assign the data to the data source for the table to render
           this.dataSource = new MatTableDataSource(this.fichas);
           this.dataSource.paginator = this.paginator;
           this.dataSource.sort = this.sort;
         },
         err => {
           console.log(err);
         }
       );
  }

}
