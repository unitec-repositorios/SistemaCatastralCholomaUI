import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Predio } from '../../models/predio';
import { stringify } from '@angular/core/src/render3/util';
import { Propiedad } from '../../models/propiedad';
import { Negocios } from '../../models/negocios';
import { DatosComplementarios } from '../../models/datos-complementarios';
import { DatosLegales } from '../../models/datos-legales';
import { ServiciosPublicos } from '../../models/servicios-publicos';  
import { EdificacionesEspeciales } from '../../models/edificaciones-especiales';
import { Colindantes } from '../../models/colindantes';    
import { CaracteristicasVecindad } from '../../models/caracteristicas-vecindad';
import { CaracteristicasPropiedad } from '../../models/caracteristicas-propiedad';
import { RecursosHidricos } from '../../models/recursos-hidricos';
import { UsoTierra } from '../../models/uso-tierra';

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
  datosComplementariosFormGroup: FormGroup; 
  avaluoTerrenosFormGroup: FormGroup;
  avaluoEdificacionesFormGroup: FormGroup; //Hace falta hacer la tabla
  detallesAdicionalesFormGroup: FormGroup;
  ultimosDatosFormGroup: FormGroup;

  cVecindad: CaracteristicasVecindad = new CaracteristicasVecindad();
  cPropiedad: CaracteristicasPropiedad = new CaracteristicasPropiedad();
  rHidricos: RecursosHidricos = new RecursosHidricos();
  usoTierra: UsoTierra = new UsoTierra();

  //Objeto propiedad
  propiedad: Propiedad = new Propiedad();

  negocios: Negocios = new Negocios(); 
  
  //Objeto de datos complementarios
  datosComp: DatosComplementarios = new DatosComplementarios();
  
  //Objeto de servicios públicos
  serviciosPub: ServiciosPublicos = new ServiciosPublicos();
  
  //Objetos de EdificacionesEspeciales
  ediEsp1: EdificacionesEspeciales= new EdificacionesEspeciales();
  ediEsp2: EdificacionesEspeciales= new EdificacionesEspeciales();
  ediEsp3: EdificacionesEspeciales= new EdificacionesEspeciales();
  ediEsp4: EdificacionesEspeciales= new EdificacionesEspeciales();
  ediEsp5: EdificacionesEspeciales= new EdificacionesEspeciales();
  ediEsp6: EdificacionesEspeciales= new EdificacionesEspeciales();
  ediEsp7: EdificacionesEspeciales= new EdificacionesEspeciales();
  
  //Objetos colindantes
  cold1: Colindantes= new Colindantes();
  cold2: Colindantes= new Colindantes();
  cold3: Colindantes= new Colindantes();
  cold4: Colindantes= new Colindantes();
  cold5: Colindantes= new Colindantes();

   //Objeto del stepper 4 -Datos legales
   datosLegales: DatosLegales=new DatosLegales();
   
  //Objeto que pertenece al formulario de detalles adicionales
  detallesAdicionales: DetallesAdicionales = new DetallesAdicionales();
  infoPredio: Predio = new Predio();
  detallesAdicionalesDataTable: any = []; //Datos que estaran en la tabla de detalles adicionales

  //estos dos atributos de aqui abajo pertenecen a la tabla que aparece en el step "detalles adicionales"
  displayedColumns: string[] = ['codigo', 'area', 'detalleAdicional', 'porcentaje', 
  'precioUnitario', 'total', 'codEdif'];
  dataSource: MatTableDataSource<DetallesAdicionales>;

  constructor(private _formBuilder: FormBuilder) {
    this.dataSource = new MatTableDataSource(this.detallesAdicionalesDataTable);
    
    //asignaciones plantas (Edificaciones Especiales)
    this.ediEsp1.Nivel= 'Primera planta';
    this.ediEsp2.Nivel= 'Segunda planta';
    this.ediEsp3.Nivel= 'Tercera planta';
    this.ediEsp4.Nivel= 'Cuarta planta';
    this.ediEsp5.Nivel= 'Quinta planta';
    this.ediEsp6.Nivel= 'Planta Adicional';
    this.ediEsp7.Nivel= 'Sotano';

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
    this.ultimosDatosFormGroup = this._formBuilder.group({
      ultimosDatosCtrl: ['', Validators.required]
    });
  }

  addDetalleAdicional() {
    //Agregamos el dato del formulario al array
    this.detallesAdicionalesDataTable.push(this.detallesAdicionales);
    //Reiniciamos la tabla
    this.dataSource = new MatTableDataSource(this.detallesAdicionalesDataTable);
    //reiniciamos el objeto que pertenece al formulario
    this.detallesAdicionales = new DetallesAdicionales();
  }
}