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

//modelos para los comboboxes
import { TipoEmpresa } from 'src/app/models/tipo-empresa';
import { Registro } from '../../models/registro';
import { TipoDocumento } from '../../models/tipo-documento';
import { UnidadArea } from '../../models/unidad-area';
import { TipoMedida } from '../../models/tipo-medida';
import { NaturalezaJuridica } from '../../models/naturaleza-juridica';
import { ClaseDominio } from '../../models/clase-dominio';
import { AguaSP } from '../../models/agua-sp';
import { TelefonoSP } from '../../models/telefono-sp';
import { DrenajeSP } from '../../models/drenaje-sp';
import { AlumPubSP } from '../../models/alum-pub-sp';
import { AceraSP } from '../../models/acera-sp';
import { ElectricidadSP } from '../../models/electricidad-sp';
import { TrenAsSP } from '../../models/tren-as-sp';
import { CalleSP } from '../../models/calle-sp';

//servicios para los comboboxes
import { TipoEmpresaService } from '../../services/tipo-empresa.service';
import { RegistroService } from '../../services/registro.service';
import { TipoDocumentoService } from '../../services/tipo-documento.service';
import { UnidadAreaService } from '../../services/unidad-area.service';
import { TipoMedidaService } from '../../services/tipo-medida.service';
import { NaturalezaJuridicaService } from '../../services/naturaleza-juridica.service';
import { ClaseDominioService } from '../../services/clase-dominio.service';
import { AguaSPService } from '../../services/agua-sp.service';
import { TelefonoSPService } from '../../services/telefono-sp.service';
import { DrenajeSPService } from '../../services/drenaje-sp.service';
import { AlumPubSPService } from '../../services/alum-pub-sp.service';
import { AceraSPService } from '../../services/acera-sp.service';
import { ElectricidadSPService } from '../../services/electricidad-sp.service';
import { TrenAsSPService } from '../../services/tren-as-sp.service';
import { CalleSPService } from '../../services/calle-sp.service';
import { AvaluoUrbano } from 'src/app/models/avaluo-urbano';

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
  selector: 'app-ficha-rural',
  templateUrl: './ficha-rural.component.html',
  styleUrls: ['./ficha-rural.component.css']
})
export class FichasRuralComponent implements OnInit {
  cantidadEdificaciones = 0;
  totalEdificaciones:Number = 0;

  valorCatastral: Number = 0;
  impuesto: Number = 0;

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

  //Objeto de Avaluo Urbano
  avaluoUrbano: AvaluoUrbano = new AvaluoUrbano();
  
  
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

  //datasources para las lista de los comboboxes
  datasourceTipoEmpresas: MatTableDataSource<TipoEmpresa>;
  datasourceRegistroPropiedad: MatTableDataSource<Registro>;
  datasourceTipoDocumento: MatTableDataSource<TipoDocumento>;
  datasourceUnidadArea: MatTableDataSource<UnidadArea>;
  datasourceTipoMedida: MatTableDataSource<TipoMedida>;
  datasourceNaturaleza: MatTableDataSource<NaturalezaJuridica>;
  datasourceClaseDominio: MatTableDataSource<ClaseDominio>;
  datasourceAgua: MatTableDataSource<AguaSP>;
  datasourceTelefono: MatTableDataSource<TelefonoSP>;
  datasourceDrenaje: MatTableDataSource<DrenajeSP>;
  datasourceCalle: MatTableDataSource<CalleSP>;
  datasourceElectricidad: MatTableDataSource<ElectricidadSP>;
  datasourceAcera: MatTableDataSource<AceraSP>;
  datasourceAlumbrado: MatTableDataSource<AlumPubSP>;
  datasourceTrenAseo: MatTableDataSource<TrenAsSP>;

  //arreglos usados para los comboboxes 
  empresasCbox: any=[];
  registroCbox: any=[];
  documentCbox: any=[];
  unidadAreaCbox: any=[];
  medidaCbox: any=[];
  naturalezaCbox: any=[];
  claseCbox: any=[];
  aguaCbox: any=[];
  telefonoCbox: any=[];
  drenajeCbox: any=[];
  calleCbox: any=[];
  electricidadCbox: any=[];
  alumbradoCbox: any=[];
  trenCbox: any=[];
  aceraCbox: any=[];
  constructor(private _formBuilder: FormBuilder, 
    private empresaService: TipoEmpresaService,
    private registro: RegistroService,
    private tipoDocumento: TipoDocumentoService,
    private unidadArea: UnidadAreaService,
    private tipoMedida: TipoMedidaService,
    private naturaleza: NaturalezaJuridicaService,
    private claseDominio: ClaseDominioService,
    private agua: AguaSPService,
    private telefono: TelefonoSPService,
    private drenanje: DrenajeSPService,
    private calle: CalleSPService,
    private electricidad: ElectricidadSPService,
    private acera: AceraSPService,
    private alumbrado: AlumPubSPService,
    private trenAseo: TrenAsSPService) {
    this.dataSource = new MatTableDataSource(this.detallesAdicionalesDataTable);
    
    //asignaciones plantas (Edificaciones Especiales)
    this.ediEsp1.nivel= 'Primera planta';
    this.ediEsp2.nivel= 'Segunda planta';
    this.ediEsp3.nivel= 'Tercera planta';
    this.ediEsp4.nivel= 'Cuarta planta';
    this.ediEsp5.nivel= 'Quinta planta';
    this.ediEsp6.nivel= 'Planta Adicional';
    this.ediEsp7.nivel= 'Sotano';

    //inicialización de los valores de cada planta
    this.ediEsp1.calculoPiso = 0;
    this.ediEsp2.calculoPiso = 0;
    this.ediEsp3.calculoPiso = 0;
    this.ediEsp4.calculoPiso = 0;
    this.ediEsp5.calculoPiso = 0;
    this.ediEsp6.calculoPiso = 0;
    this.ediEsp7.calculoPiso = 0;
    
    //Seteamos calculoFraccion1 de avaluoUrbano porque Rural no lo necesita
    this.avaluoUrbano.calculoFraccion1 = 0;

  }
  
  ngOnInit() {
    //step 2
    //lista de tipo empresas
    this.empresaService.getTipoEmpresas()
    .subscribe(
      res => {
        //console.log(res);
        this.empresasCbox = res;
        // Assign the data to the data source for the table to render
        this.datasourceTipoEmpresas = new MatTableDataSource(this.empresasCbox);
      },
      err => {
        console.log(err);
      }
    );
    //step 4
    //lista de registro/propiedad
    this.registro.getRegistros()
    .subscribe(
      res => {
        //console.log(res);
        this.registroCbox = res;
        // Assign the data to the data source for the table to render
        this.datasourceRegistroPropiedad = new MatTableDataSource(this.registroCbox);
      },
      err => {
        console.log(err); 
      }
    );

    //lista de tipo documento
    this.tipoDocumento.getDocumentos()
    .subscribe(
      res => {
        //console.log(res);
        this.documentCbox = res;
        // Assign the data to the data source for the table to render
        this.datasourceTipoDocumento = new MatTableDataSource(this.documentCbox);
      },
      err => {
        console.log(err);
      }
    );

    //lista de unidad area
    this.unidadArea.getAreas()
    .subscribe(
      res => {
        //console.log(res);
        this.unidadAreaCbox = res;
        // Assign the data to the data source for the table to render
        this.datasourceUnidadArea = new MatTableDataSource(this.unidadAreaCbox);
      },
      err => {
        console.log(err);
      }
    );

    //lista de tipo medida
    this.tipoMedida.getMedidas()
    .subscribe(
      res => {
        //console.log(res);
        this.medidaCbox = res;
        // Assign the data to the data source for the table to render
        this.datasourceTipoMedida = new MatTableDataSource(this.medidaCbox);
      },
      err => {
        console.log(err);
      }
    );

    //lista de naturaleza juridica
    this.naturaleza.getNaturalezasJuridicas()
    .subscribe(
      res => {
        //console.log(res);
        this.naturalezaCbox = res;
        // Assign the data to the data source for the table to render
        this.datasourceNaturaleza = new MatTableDataSource(this.naturalezaCbox);
      },
      err => {
        console.log(err);
      }
    );

    //lista de clase dominio
    this.claseDominio.getClasesDominios()
    .subscribe(
      res => {
        //console.log(res);
        this.claseCbox = res;
        // Assign the data to the data source for the table to render
        this.datasourceClaseDominio = new MatTableDataSource(this.claseCbox);
      },
      err => {
        console.log(err);
      }
    );

    //step 6
    //lista de aguas
    this.agua.getAguaSPs()
    .subscribe(
      res => {
        //console.log(res);
        this.aguaCbox = res;
        // Assign the data to the data source for the table to render
        this.datasourceAgua = new MatTableDataSource(this.aguaCbox);
      },
      err => {
        console.log(err);
      }
    );

    //lsita de telefono
    this.telefono.getTelefonoSPs()
    .subscribe(
      res => {
        //console.log(res);
        this.telefonoCbox = res;
        // Assign the data to the data source for the table to render
        this.datasourceTelefono = new MatTableDataSource(this.telefonoCbox);
      },
      err => {
        console.log(err);
      }
    );

    //lsita de drenaje
    this.drenanje.getDrenajeSPs()
    .subscribe(
      res => {
        //console.log(res);
        this.drenajeCbox = res;
        // Assign the data to the data source for the table to render
        this.datasourceDrenaje = new MatTableDataSource(this.drenajeCbox);
      },
      err => {
        console.log(err);
      }
    );

    //lista de calles
    this.calle.getCalleSPs()
    .subscribe(
      res => {
        //console.log(res);
        this.calleCbox = res;
        // Assign the data to the data source for the table to render
        this.datasourceCalle = new MatTableDataSource(this.calleCbox);
      },
      err => {
        console.log(err);
      }
    );

    //lista de electricidad
    this.electricidad.getElectricidadSPs()
    .subscribe(
      res => {
        //console.log(res);
        this.electricidadCbox = res;
        // Assign the data to the data source for the table to render
        this.datasourceElectricidad = new MatTableDataSource(this.electricidadCbox);
      },
      err => {
        console.log(err);
      }
    );
    
    //lista de acera
    this.acera.getAceraSPs()
    .subscribe(
      res => {
        //console.log(res);
        this.aceraCbox = res;
        // Assign the data to the data source for the table to render
        this.datasourceAcera = new MatTableDataSource(this.aceraCbox);
      },
      err => {
        console.log(err);
      }
    );

    //lista de alumbrado
    this.alumbrado.getAlumPubSPs()
    .subscribe(
      res => {
        //console.log(res);
        this.alumbradoCbox = res;
        // Assign the data to the data source for the table to render
        this.datasourceAlumbrado = new MatTableDataSource(this.alumbradoCbox);
      },
      err => {
        console.log(err);
      }
    );



    //lista de tren aseo
    this.trenAseo.getTrenAsSPs()
    .subscribe(
      res => {
        //console.log(res);
        this.trenCbox = res;
        // Assign the data to the data source for the table to render
        this.datasourceTrenAseo = new MatTableDataSource(this.trenCbox);
      },
      err => {
        console.log(err);
      }
    );

    
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

    this.calcularDA();

    //Agregamos el dato del formulario al array
    this.detallesAdicionalesDataTable.push(this.detallesAdicionales);
    //Reiniciamos la tabla
    this.dataSource = new MatTableDataSource(this.detallesAdicionalesDataTable);
    //reiniciamos el objeto que pertenece al formulario
    this.detallesAdicionales = new DetallesAdicionales();
  }

  //FORMULAS
  calcularVE(piso){
    console.log(typeof piso, piso);
    switch(Number(piso)){
      case 1:{
        console.log(typeof this.ediEsp1.area, this.ediEsp1.area);
        console.log(typeof this.ediEsp1.costoPorMetro, this.ediEsp1.costoPorMetro);
        console.log(typeof this.ediEsp1.porcentajeBueno, this.ediEsp1.porcentajeBueno);

        if(this.ediEsp1.calculoPiso != 0){
          this.totalEdificaciones = Number(this.totalEdificaciones) - this.ediEsp1.calculoPiso;
          this.cantidadEdificaciones = Number(this.cantidadEdificaciones) - 1;
        }

        this.ediEsp1.calculoPiso = this.ediEsp1.area * this.ediEsp1.costoPorMetro * (this.ediEsp1.porcentajeBueno/100);
        this.totalEdificaciones = Number(this.totalEdificaciones) + Number(this.ediEsp1.calculoPiso);
        console.log("Calculo piso 1: ", this.ediEsp1.calculoPiso);
        console.log("Total Edificaciones: ", this.totalEdificaciones);
        break;
      }
      case 2:{
        console.log(typeof this.ediEsp2.area, this.ediEsp2.area);
        console.log(typeof this.ediEsp2.costoPorMetro, this.ediEsp2.costoPorMetro);
        console.log(typeof this.ediEsp2.porcentajeBueno, this.ediEsp2.porcentajeBueno);

        if(this.ediEsp2.calculoPiso != 0){
          alert("entro al if");
          this.totalEdificaciones = Number(this.totalEdificaciones) - this.ediEsp2.calculoPiso;
          this.cantidadEdificaciones = Number(this.cantidadEdificaciones) - 1;
          alert(this.totalEdificaciones);
        }

        this.ediEsp2.calculoPiso = this.ediEsp2.area * this.ediEsp2.costoPorMetro * (this.ediEsp2.porcentajeBueno/100);
        this.totalEdificaciones = Number(this.totalEdificaciones) + Number(this.ediEsp2.calculoPiso);
        console.log("Calculo piso 2: ", this.ediEsp2.calculoPiso);
        console.log("Total Edificaciones: ", this.totalEdificaciones);
        break;
      }
      case 3:{
        console.log(typeof this.ediEsp3.area, this.ediEsp3.area);
        console.log(typeof this.ediEsp3.costoPorMetro, this.ediEsp3.costoPorMetro);
        console.log(typeof this.ediEsp3.porcentajeBueno, this.ediEsp3.porcentajeBueno);

        if(this.ediEsp3.calculoPiso != 0){
          this.totalEdificaciones = Number(this.totalEdificaciones) - this.ediEsp3.calculoPiso;
          this.cantidadEdificaciones = Number(this.cantidadEdificaciones) - 1;
        }

        this.ediEsp3.calculoPiso = this.ediEsp3.area * this.ediEsp3.costoPorMetro * (this.ediEsp3.porcentajeBueno/100);
        this.totalEdificaciones = Number(this.totalEdificaciones) + Number(this.ediEsp3.calculoPiso);
        console.log("Calculo piso 3: ", this.ediEsp3.calculoPiso);
        console.log("Total Edificaciones: ", this.totalEdificaciones);
        break;
      }
      case 4:{
        console.log(typeof this.ediEsp4.area, this.ediEsp4.area);
        console.log(typeof this.ediEsp4.costoPorMetro, this.ediEsp4.costoPorMetro);
        console.log(typeof this.ediEsp4.porcentajeBueno, this.ediEsp4.porcentajeBueno);

        if(this.ediEsp4.calculoPiso != 0){
          this.totalEdificaciones = Number(this.totalEdificaciones) - this.ediEsp4.calculoPiso;
          this.cantidadEdificaciones = Number(this.cantidadEdificaciones) - 1; 
        }

        this.ediEsp4.calculoPiso = this.ediEsp4.area * this.ediEsp4.costoPorMetro * (this.ediEsp4.porcentajeBueno/100);
        this.totalEdificaciones = Number(this.totalEdificaciones) + Number(this.ediEsp4.calculoPiso);
        console.log("Calculo piso 4: ", this.ediEsp4.calculoPiso);
        console.log("Total Edificaciones: ", this.totalEdificaciones);
        break;
      }
      case 5:{
        console.log(typeof this.ediEsp5.area, this.ediEsp5.area);
        console.log(typeof this.ediEsp5.costoPorMetro, this.ediEsp5.costoPorMetro);
        console.log(typeof this.ediEsp5.porcentajeBueno, this.ediEsp5.porcentajeBueno);

        if(this.ediEsp5.calculoPiso != 0){
          this.totalEdificaciones = Number(this.totalEdificaciones) - this.ediEsp5.calculoPiso;
          this.cantidadEdificaciones = Number(this.cantidadEdificaciones) - 1; 
        }

        this.ediEsp5.calculoPiso = this.ediEsp5.area * this.ediEsp5.costoPorMetro * (this.ediEsp5.porcentajeBueno/100);
        this.totalEdificaciones = Number(this.totalEdificaciones) + Number(this.ediEsp5.calculoPiso);
        console.log("Calculo piso 5: ", this.ediEsp5.calculoPiso);
        console.log("Total Edificaciones: ", this.totalEdificaciones);
        break;
      }
      default:{
        console.log("No se recibió un piso correcto.");
      }
    }
    this.calcularValorCatastral();
    this.cantidadEdificaciones = Number(this.cantidadEdificaciones) + 1;
  }

  calcularVT(){
    this.avaluoUrbano.factorModFraccion1 = (this.avaluoUrbano.parcelaTipicaFraccion1/this.avaluoUrbano.areaFraccion1)*0.3+0.7;
    //console.log(typeof this.avaluoUrbano.valorBasicoFraccion1, this.avaluoUrbano.valorBasicoFraccion1);
    //console.log(typeof this.avaluoUrbano.areaFraccion1, this.avaluoUrbano.areaFraccion1);
    //console.log(typeof this.avaluoUrbano.parcelaTipicaFraccion1, this.avaluoUrbano.parcelaTipicaFraccion1);
    this.avaluoUrbano.esquinaFraccion1 = Number(this.avaluoUrbano.esquinaFraccion1);
    //console.log(typeof this.avaluoUrbano.esquinaFraccion1, this.avaluoUrbano.esquinaFraccion1);
    switch(this.avaluoUrbano.esquinaFraccion1){
      //0 significa que no es de esquina
      case 0:{
        this.avaluoUrbano.calculoFraccion1 = this.avaluoUrbano.valorBasicoFraccion1*this.avaluoUrbano.areaFraccion1*this.avaluoUrbano.factorModFraccion1;
        //console.log("Calculo VT: ", this.avaluoUrbano.calculoFraccion1);
        break;
      }
      //1 significa que si es de esquina
      case 1:{
        this.avaluoUrbano.factorModFraccion1 = this.avaluoUrbano.factorModFraccion1 * 1.15;
        this.avaluoUrbano.calculoFraccion1 = this.avaluoUrbano.valorBasicoFraccion1*this.avaluoUrbano.areaFraccion1*this.avaluoUrbano.factorModFraccion1;
        //console.log("Calculo VT: ", this.avaluoUrbano.calculoFraccion1);
        break;
      }
      default:{
        alert("Se recibio algo diferente a [0/1] en esquina");
        console.log("Se recibio algo diferente a [0/1] en esquina");

      }
    }
    this.calcularValorCatastral();

  }

  calcularDA(){
    this.detallesAdicionales.total = this.detallesAdicionales.area * this.detallesAdicionales.precioUnitario * (this.detallesAdicionales.porcentaje/100);
  }

  calcularValorCatastral(){
    this.valorCatastral = Number(this.totalEdificaciones) + this.avaluoUrbano.calculoFraccion1;
    this.impuesto = Number(this.valorCatastral) * 0.0035;
  }
}