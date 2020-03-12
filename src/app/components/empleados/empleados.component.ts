import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Empleado, Roles } from 'src/app/models/empleado';
import { EmpleadosService } from '../../services/empleados.service';
import { MatTableDataSource, MatDialog, MatPaginator, MatSort, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'password','UserType', 'actions'];
  dataSource: MatTableDataSource<Empleado>;
  //for permissions
  role: number;
  allPrivileges: boolean;
  roleEnum: Roles

  empleados: any = [];
  newUser: Empleado = new Empleado();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private empleadosService: EmpleadosService, public dialog: MatDialog,
    private cookieService: CookieService) { }

  ngOnInit() {
    //get role from cookie
    this.role = +this.cookieService.get('type');
    //verify role and assign all privileges to true or false
    if (this.role === Roles.Jefatura || this.role === Roles.SupervisorMantenimiento
      || this.role === Roles.SupervisorDigitacion)
      this.allPrivileges = true;
    else
      this.allPrivileges = false;
    this.empleadosService.getEmpleados()
      .subscribe(
        res => {
          console.log(res);
          this.empleados = res;
          // Assign the data to the data source for the table to render
          this.dataSource = new MatTableDataSource(this.empleados);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        err => {
          console.log(err);
        }
      );
  }

  sendUser(): void {
    if (this.newUser.tipo == 0){
      this.newUser.UserType = 'Jefatura';
  }
  else if (this.newUser.tipo == 1) 
  {
      this.newUser.UserType = 'Secretaria';
  }
  else if (this.newUser.tipo ==2)
  {
      this.newUser.UserType = 'Supervisor de Atencion al Contribuyente';
  }
  else if (this.newUser.tipo == 3)
  {
      this.newUser.UserType = 'Supervisor de Archivo';
  }
  else if (this.newUser.tipo == 4)
  {
      this.newUser.UserType = 'Supervisor de Mantenimiento';
  }
  else if (this.newUser.tipo == 5)
  {
      this.newUser.UserType = 'Supervisor de Digitacion';
  }
  else if (this.newUser.tipo == 6)
  {
      this.newUser.UserType = 'Supervisor de Control de Calidad';
  }
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

  openDialogEditEmpleado(selectedEmpleado: Empleado): void {
    const dialogRef = this.dialog.open(AddEmpleadoDialog, {
      width: '80%',
      data: selectedEmpleado
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.onEdit(result);
    });
  }



  onEdit(selectedEmpleado: Empleado): void {
    this.empleadosService.modifyEmpleado(selectedEmpleado)
      .subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
          alert('Usuario editado con exito');
        },
        err => {
          console.log(err);
          alert('Error editando el usuario');
        }
      );
  }


  onDelete(nombre: string): void {
    if (confirm('Estas seguro que quieres eliminar este elemento?')) {
      //this.shinobiArray = this.shinobiArray.filter(x => x != this.selectedShinobi);
      //delete in database
      this.empleadosService.deleteEmpleado(nombre)
        .subscribe(
          res => {
            console.log(res);
            this.ngOnInit();
            alert('Empleado eliminado con exito');
          },
          err => {
            console.log(err);
            alert('Error al eliminar Empleado');
          }
        );
    }
  }
}


export class AddEmpleadoDialog implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddEmpleadoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Empleado
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}