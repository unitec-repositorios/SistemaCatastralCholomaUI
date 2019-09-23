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
    this.ediEsp1.Nivel= 'Primera planta';
    this.ediEsp2.Nivel= 'Segunda planta';
    this.ediEsp3.Nivel= 'Tercera planta';
    this.ediEsp4.Nivel= 'Cuarta planta';
    this.ediEsp5.Nivel= 'Quinta planta';
    this.ediEsp6.Nivel= 'Planta Adicional';
    this.ediEsp7.Nivel= 'Sotano';

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
    //Agregamos el dato del formulario al array
    this.detallesAdicionalesDataTable.push(this.detallesAdicionales);
    //Reiniciamos la tabla
    this.dataSource = new MatTableDataSource(this.detallesAdicionalesDataTable);
    //reiniciamos el objeto que pertenece al formulario
    this.detallesAdicionales = new DetallesAdicionales();
  }
}