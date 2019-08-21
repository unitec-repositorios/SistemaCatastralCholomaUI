import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatTableDataSource} from '@angular/material/table';

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

//datos que van en la tabla que aparece en el dialogo de datos complementarios, PASAR ESTO A UN MODEL DESPUES
export class DetallesAdicionales {
  codigo: number;
  area: number;
  detalleAdicional: string;
  porcentaje: number;
  precioUnitario: number;
  total: number;
  codEdif: number;

  DetallesAdicionales() {}
}

@Component({
  selector: 'app-ficha-urbana',
  templateUrl: './ficha-urbana.component.html',
  styleUrls: ['./ficha-urbana.component.css']
})
export class FichaUrbanaComponent implements OnInit {
  //datos que pertenecen al stepper
  isLinear = false;
  propiedadFormGroup: FormGroup;
  negociosFormGroup: FormGroup;
  infoPredioFormGroup: FormGroup;
  infoLegalPredioFormGroup: FormGroup;
  caracteristicasPredioFormGroup: FormGroup;
  datosComplementariosFormGroup: FormGroup; //No hay nada
  avaluoTerrenosFormGroup: FormGroup;
  avaluoEdificacionesFormGroup: FormGroup; //Hace falta hacer la tabla
  detallesAdicionalesFormGroup: FormGroup;
  cultivosPermanentesFormGroup: FormGroup; //no hay nada
  ultimosDatosFormGroup: FormGroup;
  
  //Objeto que pertenece al formulario de detalles adicionales
  detallesAdicionales: DetallesAdicionales = new DetallesAdicionales();
  detallesAdicionalesDataTable: any = []; //Datos que estaran en la tabla de detalles adicionales

  //estos dos atributos de aqui abajo pertenecen a la tabla que aparece en el step "detalles adicionales"
  displayedColumns: string[] = ['codigo', 'area', 'detalleAdicional', 'porcentaje', 
  'precioUnitario', 'total', 'codEdif'];
  dataSource: MatTableDataSource<DetallesAdicionales>;

  constructor(private _formBuilder: FormBuilder) {
    this.dataSource = new MatTableDataSource(this.detallesAdicionalesDataTable);
  }

  ngOnInit() {
    this.propiedadFormGroup = this._formBuilder.group({
      propiedadCtrl: ['', Validators.required]
    });
    this.negociosFormGroup = this._formBuilder.group({
      negociosCtrl: ['', Validators.required]
    });
    this.infoPredioFormGroup = this._formBuilder.group({
      infoPredioCtrl: ['', Validators.required]
    });
    this.infoLegalPredioFormGroup = this._formBuilder.group({
      infoLegalPredioCtrl: ['', Validators.required]
    });
    this.caracteristicasPredioFormGroup = this._formBuilder.group({
      caracteristicasPredioCtrl: ['', Validators.required]
    });
    this.datosComplementariosFormGroup = this._formBuilder.group({
      datosComplementariosCtrl: ['', Validators.required]
    });
    this.avaluoTerrenosFormGroup = this._formBuilder.group({
      avaluoTerrenosCtrl: ['', Validators.required]
    });
    this.avaluoEdificacionesFormGroup = this._formBuilder.group({
      avaluoEdificacionesCtrl: ['', Validators.required]
    });
    this.detallesAdicionalesFormGroup = this._formBuilder.group({
      detallesAdicionalesCtrl: ['', Validators.required]
    });
    this.cultivosPermanentesFormGroup = this._formBuilder.group({
      cultivosPermanentesCtrl: ['', Validators.required]
    });
    this.ultimosDatosFormGroup = this._formBuilder.group({
      ultimosDatosCtrl: ['', Validators.required]
    });

    if (!this.DatosCultivos.length) this.addElement();
    if (!this.DatosCultivos2.length) this.addCultivo();
  }

  addDetalleAdicional() {
    //Agregamos el dato del formulario al array
    this.detallesAdicionalesDataTable.push(this.detallesAdicionales);
    //Reiniciamos la tabla
    this.dataSource = new MatTableDataSource(this.detallesAdicionalesDataTable);
    //reiniciamos el objeto que pertenece al formulario
    this.detallesAdicionales = new DetallesAdicionales();
  }

  // Avaluo de Cultivo Permanente

    DatosCultivos = DatosCultivosPermanentes;
    DatosCultivos2 = DatosCultivosPermanentes2;

    numElements: number;  
    arrayElement: AvaluoCultivoPermanenteDatos1;
    
    addElement(): void {
      this.numElements = this.DatosCultivos.push(this.arrayElement);
    };

    deleteElement() {
    if (this.numElements > 1) {
      this.DatosCultivos.pop()
      this.numElements--;
    };
    //this.DatosCultivos.splice(this.DatosCultivos.indexOf(element), 1);
    };

    numCultivos: number;
    cultivoItem: AvaluoCultivoPermanenteDatos2;
  
    numManzanas!: number;
    valorXManzana!: number;
    totalManzanas: number;
  
    addCultivo(): void {
      let newItem: AvaluoCultivoPermanenteDatos2 = {} as AvaluoCultivoPermanenteDatos2;
      
      (this.DatosCultivos2 && this.DatosCultivos2.length) ? newItem.id = (this.DatosCultivos2[this.DatosCultivos2.length - 1].id) + 1 : newItem.id = 0;
      this.numCultivos = this.DatosCultivos2.push(newItem);
    };
  
    deleteCultivo () {
      if (this.numCultivos > 1) {
        this.DatosCultivos2.pop();
        this.numCultivos--;
      }
    };

    numCultivosTotal1: number;
    numCultivosTotal2: number;
    costoCultivosTotal1: number;
    costoCultivosTotal2: number;
    totalFinal: number;

    updateTotal(item: AvaluoCultivoPermanenteDatos2) {
      item.numTotalDeManzanas = item.numDeManzanas * item.valorPorManz;
      this.costoCultivosTotal2 = 0;
      /* this.DatosCultivos.forEach(element => {
        this.costoCultivosTotal1 += element.ValorPorCultivo;
      }); */
      this.DatosCultivos2.forEach(element => {
        this.costoCultivosTotal2 += element.numTotalDeManzanas;
        /* console.log(element.numTotalDeManzanas);
        console.log("costoCultivos2: " + this.costoCultivosTotal2); */
      });
      this.totalFinal = /* this.costoCultivosTotal1 +  */this.costoCultivosTotal2;
      // console.log("Total: " + this.totalFinal);
    }

}

let DatosCultivosPermanentes: AvaluoCultivoPermanenteDatos1[] = [];
let DatosCultivosPermanentes2: AvaluoCultivoPermanenteDatos2[] = [];


export interface AvaluoCultivoPermanenteDatos1 {
  ClaseCultivoVariedad: string; 
  Arboles: number;
  EstadoSanitario: string;
  Edad: number;
  FactorModificacion: number;
  ValorPorCultivo: number;
}

export interface AvaluoCultivoPermanenteDatos2 {
  id: number;
  ClaseCultivoVariedad: string;
  numDeManzanas: number;
  valorPorManz: number;
  numTotalDeManzanas: number;
}