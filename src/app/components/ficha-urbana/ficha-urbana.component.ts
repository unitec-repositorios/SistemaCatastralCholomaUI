import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { FichaUrbana } from '../../models/ficha-urbana';
import { FichaUrbanaService } from 'src/app/services/ficha-urbana.service';
import { TypeofExpr } from '@angular/compiler';

//datos legales predio
export interface DialogData {
  animal: string;
  name: string;
}

//datos complementarios
export interface DialogData3 {
  
}

export interface DetallesNegocioData {
  name: string;
  direccion: string;
  tipo: string;
  deuda: number;
  cofundadores: string;
  fecha: string;
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

  Negocios: {nombre: string, direccion: string, tipo: string, deuda: number, cofundadores: string, fechaFundacion: string}[] = [
    {"nombre": "Yuba", "direccion": "5 calle, 14 avenida", "tipo": "S. de R.L.", "deuda": 1234, "cofundadores": "Mario Flores", "fechaFundacion": "23 Mar 2011"},
    {"nombre": "Office Depot", "direccion": "14 calle, 10 avenida", "tipo": "S. de R.L.", "deuda": 1234, "cofundadores": "Mario Flores", "fechaFundacion": "23 Mar 2011"}
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

  openDialog4(): void {
    const dialogRef = this.dialog.open(AvaluoTerrenoUrbanoDialog, {
      width: '80%',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  openDialog5(): void {
    const dialogRef = this.dialog.open(AvaluoEdificacionesDialog, {
      width: '80%',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ActiveNegocio;
  openDialog6(Negocio): void {
    this.ActiveNegocio = Negocio;
    const dialogRef = this.dialog.open(DetallesNegocioDialog, {
      width: '80%',
      data: {name: this.ActiveNegocio.nombre, direccion: this.ActiveNegocio.direccion, tipo: this.ActiveNegocio.tipo, deuda: this.ActiveNegocio.deuda, cofundadores: this.ActiveNegocio.cofundadores, fecha: this.ActiveNegocio.fechaFundacion}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  openDialog7(): void {
    const dialogRef = this.dialog.open(CaracteristicasRuralesDialog, {
      width: '80%',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  openDialog8(): void {
    const dialogRef = this.dialog.open(AvaluoCultivoPermanenteDialog, {
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

@Component({
  selector: 'app-ficha-urbana/AvaluoTerrenoUrbano',
  templateUrl: './popups/AvaluoTerrenoUrbano/AvaluoTerrenoUrbanoDialog.html',
  styleUrls: ['./ficha-urbana.component.css']
})
export class AvaluoTerrenoUrbanoDialog {
  constructor(
    public dialogRef: MatDialogRef<AvaluoTerrenoUrbanoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-ficha-urbana/AvaluoEdificaciones',
  templateUrl: './popups/AvaluoEdificaciones/AvaluoEdificacionesDialog.html',
  styleUrls: ['./ficha-urbana.component.css']
})
export class AvaluoEdificacionesDialog {
  constructor(
    public dialogRef: MatDialogRef<AvaluoEdificacionesDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-ficha-urbana/DetallesNegocio',
  templateUrl: './popups/DetallesNegocio/DetallesNegocioDialog.html',
  styleUrls: ['./ficha-urbana.component.css']
})
export class DetallesNegocioDialog {
  constructor(
    public dialogRef: MatDialogRef<DetallesNegocioDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DetallesNegocioData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface DatosRecursosHidricos {
  Fuente: string;
  Riego: number;
  DistKm: number;
  SisIrrig: string;
  Area: number;
}

let RECURSOS_HIDRICOS_DATA: DatosRecursosHidricos[] = [];

@Component({
  selector: 'app-ficha-urbana/CaracteristicasRurales',
  templateUrl: './popups/CaracteristicasRurales/CaracteristicasRuralesDialog.html',
  styleUrls: ['./ficha-urbana.component.css']
})
export class CaracteristicasRuralesDialog {
  displayedColumns: string[] = ['Fuente', 'Riego', 'DistKm', 'SisIrrig', 
  'Area'];
  dataSource = RECURSOS_HIDRICOS_DATA;
  constructor(
    public dialogRef: MatDialogRef<CaracteristicasRuralesDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface AvaluoCultivoPermanenteDatos1 {
  ClaseCultivoVariedad: string; 
  Arboles: number;
  EstadoSanitario: string;
  Edad: number;
  FactorModificacion: number;
  ValorPorCultivo: number;
}

let DatosCultivosPermanentes: AvaluoCultivoPermanenteDatos1[] = [];

@Component({
  selector: 'app-ficha-urbana/AvaluoCultivoPermanente',
  templateUrl: './popups/AvaluoCultivoPermanente/AvaluoCultivoPermanenteDialog.html',
  styleUrls: ['./ficha-urbana.component.css']
})
export class AvaluoCultivoPermanenteDialog {
  DatosCultivos = DatosCultivosPermanentes;
  constructor(
    public dialogRef: MatDialogRef<AvaluoCultivoPermanenteDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    if (!this.DatosCultivos.length) this.addElement();
  }

  numElements: number;  
  arrayElement: AvaluoCultivoPermanenteDatos1;
  
  addElement(): void {
    this.numElements = this.DatosCultivos.push(this.arrayElement);
  }

  deleteElement(element: AvaluoCultivoPermanenteDatos1) {
    this.DatosCultivos.splice(this.DatosCultivos.indexOf(element));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}