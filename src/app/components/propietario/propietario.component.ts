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

  //esta variable controla si el boton de editar aparecerá en pantalla o no
  isEditable: boolean = false;

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

  //envia todos los datos del propietario seleccionado a los inputs y hace que el boton de editar aparezca
  //en el formulario
  onEdit(selectedPropietario: Propietario): void {
    this.propietario = selectedPropietario;
    this.isEditable = true;
  }

  //hace una peticion put con los datos del formulario y luego oculta el boton de editar
  editClick(): void {
    this.propietariosService.modifyPropietario(this.propietario)
    .subscribe(
      res => {
        console.log(res);
        this.propietarios.forEach((element, index) => {
          if(element.id === this.propietarios.id) {
              this.propietarios[index] = this.propietario;
          }
        });
        this.dataSource = new MatTableDataSource(this.propietarios); //reiniciamos la tabla
        this.propietario = new Propietario();
        this.isEditable = false;
        alert('Propietario editado con exito');
      },
      err => {
        console.log(err);
        alert('Error agregando propietario');
      }
    )    
  }

  onDelete(id: number): void {
    if(confirm('Estas seguro de que quieres eliminar este elemento?')) {
      //this.shinobiArray = this.shinobiArray.filter(x => x != this.selectedShinobi);
      //delete in database
      this.propietariosService.deletePropietario(id)
        .subscribe(
          res => {
            console.log(res);
            this.propietarios = this.propietarios.filter(x => x.id != id);
            this.dataSource = new MatTableDataSource(this.propietarios); //reiniciamos la tabla
            alert('Propietario eliminado con exito');
          },
          err => {
            console.log(err);
            alert('Error al eliminar propietario');
          }
        );
    }
  }

  submitForm(): void {
    this.propietariosService.savePropietario(this.propietario)
      .subscribe(res => {
        console.log(this.propietario);
        console.log(res);
        alert('Propietario agregado con exito');
        this.propietarios.push(this.propietario);
        this.dataSource = new MatTableDataSource(this.propietarios); //reiniciamos la tabla
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
