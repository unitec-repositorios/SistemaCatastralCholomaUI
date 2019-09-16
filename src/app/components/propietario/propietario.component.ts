import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Propietario } from '../../models/propietario';
import { PropietarioService } from '../../services/propietario.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Roles } from '../../models/empleado';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.component.html',
  styleUrls: ['./propietario.component.css']
})
export class PropietarioComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombres', 'apellidos', 'identidad', 'telefono', 'rtn', 'sexo', 'nacionalidad', 'actions'];
  dataSource: MatTableDataSource<Propietario>;

  //for permissions
  role: number;
  allPrivileges: boolean;
  roleEnum: Roles

  propietarios: any = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  propietario: Propietario = new Propietario();

  constructor(private propietariosService: PropietarioService, public dialog: MatDialog,
    private cookieService: CookieService) { }

  ngOnInit() {
    //get role from cookie
    this.role = +this.cookieService.get('type');
    //verify role and assign all privileges to true or false
    if(this.role === Roles.Jefatura || this.role === Roles.SupervisorMantenimiento
    || this.role === Roles.SupervisorDigitacion) 
      this.allPrivileges = true;
    else
      this.allPrivileges = false;
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

  //hace una peticion put con los datos del formulario y luego oculta el boton de editar
  onEdit(selectedPropietario: Propietario): void {
    this.propietariosService.modifyPropietario(selectedPropietario)
    .subscribe(
      res => {
        console.log(res);
        this.ngOnInit();
        alert('Propietario editado con exito');
      },
      err => {
        console.log(err);
        alert('Error editando propietario');
      }
    );
  }

  onDelete(id: number): void {
    if(confirm('Estas seguro de que quieres eliminar este elemento?')) {
      //this.shinobiArray = this.shinobiArray.filter(x => x != this.selectedShinobi);
      //delete in database
      this.propietariosService.deletePropietario(id)
        .subscribe(
          res => {
            console.log(res);
            this.ngOnInit();
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
        //this.propietarios.push(this.propietario);
        //this.dataSource = new MatTableDataSource(this.propietarios); //reiniciamos la tabla
        this.ngOnInit(); //reiniciamos la tabla
        this.propietario = new Propietario();
      },
      err => {
        console.log(err);
        alert('Error al agregar propietario');
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialogEditPropietario(selectedPropietario: Propietario): void {
    const dialogRef = this.dialog.open(AddPropietarioDialog, {
      width: '80%',
      data: selectedPropietario
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.onEdit(result);
    });
  }

  //esta funcion abre el dialogo para crear un propietario
  openDialogAddPropietario(): void {
    this.propietario.id = 0;
    this.propietarios.nombres = "";
    this.propietarios.apellidos = "";
    this.propietario.identidad = "";
    this.propietario.telefono = "";
    this.propietario.rtn = "";
    this.propietario.sexo = "";
    this.propietario.nacionalidad = "";
    console.log(this.propietario);
    const dialogRef = this.dialog.open(AddPropietarioDialog, {
      width: '80%',
      data: this.propietario
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      /*
      Este if de aca tiene un proposito, es el siguiente:
      Cuando se abre el dialogo para agregar un propietario y el usuario hace click en cancelar,
      se hace el request de todas formas, entonces para evitar que eso pase esto es lo unico 
      que se me ocurrio hacer - Julio Gomez
      */
      //con un campo que este vacio, no mandamos nada
      if(result.nombres == "" || result.apellidos == "" || result.identidad == "" || 
      result.telefono == "" || result.rtn == "" || result.sexo == "" ||
      result.nacionalidad == "") {
        console.log(result);
      }
      //de lo contrario, vamos a mandar un request
      else {
        //asigno uno por uno para que no se pierda el orden al crearse el JSON
        this.propietario.id = 0;
        this.propietarios.nombres = result.nombres;
        this.propietarios.apellidos = result.apellidos;
        this.propietario.identidad = result.identidad;
        this.propietario.telefono = result.telefono;
        this.propietario.rtn = result.rtn;
        this.propietario.sexo = result.sexo;
        this.propietario.nacionalidad = result.nacionalidad;
        console.log(this.propietario);
        this.submitForm();
        this.propietario = new Propietario();
      }
      
      //this.animal = result;
      //this.Negocios.push(result);
      //this.negocio = new DetallesNegocioData();
    });
  }

}

@Component({
  selector: 'app-propietario/AddPropietario',
  templateUrl: './popups/AddPropietario/AddPropietarioDialog.html',
  styleUrls: ['./propietario.component.css']
})
export class AddPropietarioDialog {
  constructor(
    public dialogRef: MatDialogRef<AddPropietarioDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Propietario
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
