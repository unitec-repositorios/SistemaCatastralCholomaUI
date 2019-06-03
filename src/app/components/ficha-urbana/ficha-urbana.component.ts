import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { FichaUrbana } from '../../models/ficha-urbana';
import { FichaUrbanaService } from 'src/app/services/ficha-urbana.service';

//datos legales predio
export interface DialogData {
  animal: string;
  name: string;
}

//datos complementarios
export interface DialogData3 {
  
}

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-ficha-urbana',
  templateUrl: './ficha-urbana.component.html',
  styleUrls: ['./ficha-urbana.component.css']
})

export class FichaUrbanaComponent implements OnInit {

  ficha: FichaUrbana = new FichaUrbana();

  animal: string;
  name: string;

  tipoPropiedades: string;
  Propiedades: string[] = ['Propiedad Normal', 'Condominio (P.H.)'];

  mapa: string;
  bloque: string;
  predio: string;

  Negocios: {nombre: string, direccion: string}[] = [
    {"nombre": "Carlos Moncada", "direccion": "5 calle, 14 avenida"},
    {"nombre": "Ignacio Salazar", "direccion": "14 calle, 10 avenida"}
  ];

  sexo: string;
  clickedButton1(){
    document.getElementById("prop-N").className = "selected-button";
    document.getElementById("prop-C").className = "toggle-buttons";
  }

  clickedButton2(){
    document.getElementById("prop-C").className = "selected-button";
    document.getElementById("prop-N").className = "toggle-buttons";
  }

  //constructor() { }

  constructor(private fichasService: FichaUrbanaService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  submitForm(): void {

    this.ficha.claveCatastral = this.mapa + this.bloque + this.predio;
    
    this.fichasService.saveFicha(this.ficha)
      .subscribe(res => {
        console.log(this.ficha);
        console.log(res);
        alert('Ficha Urbana agregada con exito')
      },
      err => {
        console.log(err);
        alert('Error al agregar ficha');
      }
    )
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DatosLegalesPredioDialog, {
      width: '80%',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  openDialog3(): void {
    const dialogRef = this.dialog.open(DatosComplementariosDialog, {
      width: '80%',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
  selector: 'app-ficha-urbana/DatosLegalesPredioDialog',
  templateUrl: './popups/DatosLegalesPredio/DatosLegalesPredioDialog.html',
  styleUrls: ['./ficha-urbana.component.css']
})
export class DatosLegalesPredioDialog {

  constructor(
    public dialogRef: MatDialogRef<DatosLegalesPredioDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

/*
export class CaracteristicasPredioDialog {
  constructor(
    public dialogRef: MatDialogRef<CaracteristicasPredioDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
*/

//datos que van en la tabla que aparece en el dialogo de datos complementarios
export interface DatosComplementarios {
  codigo: number;
  area: number;
  detalleAdicional: string;
  porcentaje: number;
  precioUnitario: number;
  total: number;
  codEdif: number;
}

//array que se va a mostrar en el matdialog del dialogo
let DATOS_COMPLEMENTARIOS_DATA: DatosComplementarios[] = [];

@Component({
  selector: 'app-ficha-urbana/DatosComplementariosDialog',
  templateUrl: './popups/DatosComplementarios/DatosComplementariosDialog.html',
  styleUrls: ['./ficha-urbana.component.css']
})
export class DatosComplementariosDialog {
  displayedColumns: string[] = ['codigo', 'area', 'detalleAdicional', 'porcentaje', 
  'precioUnitario', 'total', 'codEdif'];
  dataSource = DATOS_COMPLEMENTARIOS_DATA;
  constructor(
    public dialogRef: MatDialogRef<DatosComplementariosDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}