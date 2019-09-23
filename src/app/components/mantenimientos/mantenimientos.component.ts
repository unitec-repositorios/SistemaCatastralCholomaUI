import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

//Step 1) Importar los modelos y servicios
import { Sexo } from '../../models/sexo'
import { SexoService } from '../../services/sexo.service'

import { Nacionalidad } from '../../models/nacionalidad'
import { NacionalidadService } from '../../services/nacionalidad.service'

import { TipoEmpresa } from '../../models/tipo-empresa';
import { TipoEmpresaService } from '../../services/tipo-empresa.service';
import { AceraSP } from '../../models/acera-sp';
import { AceraSPService } from '../../services/acera-sp.service';
import { AguaSP } from '../../models/agua-sp';
import { AguaSPService } from '../../services/agua-sp.service';
import { AlumPubSP } from '../../models/alum-pub-sp';
import { AlumPubSPService } from '../../services/alum-pub-sp.service';
import { CalleSP } from '../../models/calle-sp';
import { CalleSPService } from '../../services/calle-sp.service';
import { DrenajeSP } from '../../models/drenaje-sp';
import { DrenajeSPService } from '../../services/drenaje-sp.service';
import { ElectricidadSP } from '../../models/electricidad-sp';
import { ElectricidadSPService } from '../../services/electricidad-sp.service';
import { TelefonoSP } from '../../models/telefono-sp';
import { TelefonoSPService } from '../../services/telefono-sp.service';
import { TrenAsSP } from '../../models/tren-as-sp';
import { TrenAsSPService } from '../../services/tren-as-sp.service';

import { Registro } from '../../models/registro'
import { RegistroService } from '../../services/registro.service';
import { NaturalezaJuridica } from '../../models/naturaleza-juridica';
import { NaturalezaJuridicaService } from '../../services/naturaleza-juridica.service';
import { ClaseDominio } from '../../models/clase-dominio'
import { ClaseDominioService } from '../../services/clase-dominio.service';
import { TipoDocumento } from '../../models/tipo-documento'
import { TipoDocumentoService } from '../../services/tipo-documento.service'
import { UnidadArea } from '../../models/unidad-area'
import { UnidadAreaService } from '../../services/unidad-area.service'
import { TipoMedida } from '../../models/tipo-medida'
import { TipoMedidaService } from '../../services/tipo-medida.service'

@Component({
  selector: 'app-mantenimientos',
  templateUrl: './mantenimientos.component.html',
  styleUrls: ['./mantenimientos.component.css']
})
export class MantenimientosComponent implements OnInit {
  //Step 2-Crear un arreglo de las columnas de la tabla
  displayedColumnsSexo: string[] = ['tipo', 'actions'];
  displayedColumnsNacionalidad: string[] = ['pais', 'actions'];

  displayedColumnsEmpresa: string[] = ['empresa', 'actions'];

  displayedColumnsRegistro: string[] = ['registro', 'actions'];
  displayedColumnsNaturalezaJuridica: string[] = ['tipo', 'actions'];
  displayedColumnsClaseDominio: string[] = ['tipo', 'actions'];
  displayedColumnsTipoDocumento: string[] = ['tipoDoc', 'actions'];
  displayedColumnsUnidadArea: string[] = ['area', 'actions'];
  displayedColumnsTipoMedida: string[] = ['medida', 'actions'];

  displayedColumnsAceraSP: string[] = ['tipo', 'actions'];
  displayedColumnsAguaSP: string[] = ['tipo', 'actions'];
  displayedColumnsAlumPuBSP: string[] = ['tipo', 'actions'];
  displayedColumnsCalleSP: string[] = ['tipo', 'actions'];
  displayedColumnsDrenajeSP: string[] = ['tipo', 'actions'];
  displayedColumnsElectricidadSP: string[] = ['tipo', 'actions'];
  displayedColumnsTelefonoSP: string[] = ['tipo', 'actions'];
  displayedColumnsTrenAsSP: string[] = ['tipo', 'actions'];

  //Step 3-Crear datasource para la tabla del tipo del modelo
  dataSourceSexo: MatTableDataSource<Sexo>
  dataSourceNacionalidad: MatTableDataSource<Nacionalidad>

  dataSourceEmpresa: MatTableDataSource<TipoEmpresa>

  dataSourceRegistro: MatTableDataSource<Registro>
  dataSourceNaturalezaJuridica: MatTableDataSource<NaturalezaJuridica>
  dataSourceClaseDominio: MatTableDataSource<ClaseDominio>
  dataSourceTipoDocumento: MatTableDataSource<TipoDocumento>
  dataSourceUnidadArea: MatTableDataSource<UnidadArea>
  dataSourceTipoMedida: MatTableDataSource<TipoMedida>

  dataSourceAceraSP: MatTableDataSource<AceraSP>
  dataSourceAguaSP: MatTableDataSource<AguaSP>
  dataSourceAlumPubSP: MatTableDataSource<AlumPubSP>
  dataSourceCalleSP: MatTableDataSource<CalleSP>
  dataSourceDrenajeSP: MatTableDataSource<DrenajeSP>
  dataSourceElectricidadSP: MatTableDataSource<ElectricidadSP>
  dataSourceTelefonoSP: MatTableDataSource<TelefonoSP>
  dataSourceTrenAsSP: MatTableDataSource<TrenAsSP>
  //Step 4-Crear arreglo de tipo any para luego llenarlo y darselo al datasource
  sexos: any = [];
  nacionalidades: any = [];

  empresas: any = [];

  registros: any = [];
  naturalezas: any = [];
  dominios: any = [];
  documentos: any = [];
  areas: any = [];
  medidas: any = [];

  aceras: any = [];
  aguas: any = [];
  alumPubs: any = [];
  calles: any = [];
  drenajes: any = [];
  electricidads: any = [];
  telefonos: any = [];
  trenAss: any = [];
  //Step5-Crear objeto del dtipo del modelo, este se llenara para meterlo a la DB
  sexo: Sexo = new Sexo();
  nacionalidad: Nacionalidad = new Nacionalidad();

  empresa: TipoEmpresa = new TipoEmpresa();

  reg: Registro = new Registro();
  naturaleza: NaturalezaJuridica = new NaturalezaJuridica();
  dominio: ClaseDominio = new ClaseDominio();
  documento: TipoDocumento = new TipoDocumento();
  area: UnidadArea = new UnidadArea();
  medida: TipoMedida = new TipoMedida();


  // Variable que decide que se muestra en el mantenimiento de negocios
  negocioCampo: string = '0';

  serviciosPublicosCampo: string = '0';

  aceraSP: AceraSP = new AceraSP();
  aguaSP: AguaSP = new AguaSP();
  alumPubSP: AlumPubSP = new AlumPubSP();
  calleSP: CalleSP = new CalleSP();
  drenajeSP: DrenajeSP = new DrenajeSP();
  electricidadSP: ElectricidadSP = new ElectricidadSP();
  telefonoSP: TelefonoSP = new TelefonoSP();
  trenAsSP: TrenAsSP = new TrenAsSP();
  //Step 6- ingresar el service ne el constructor
  constructor(private sexoService: SexoService,
    private nacionalidadService: NacionalidadService,
    private empresaService: TipoEmpresaService,
    private registroService: RegistroService,
    private naturalezaService: NaturalezaJuridicaService,
    private dominioService: ClaseDominioService,
    private documentoService: TipoDocumentoService,
    private areaService: UnidadAreaService,
    private medidaService: TipoMedidaService,
    private aceraSPService: AceraSPService,
    private aguaSPService: AguaSPService,
    private alumPubSPService: AlumPubSPService,
    private calleSPService: CalleSPService,
    private drenajeSPService: DrenajeSPService,
    private electricidadSPService: ElectricidadSPService,
    private telefonoSPService: TelefonoSPService,
    private trenAsSPService: TrenAsSPService) { }

  ngOnInit() {
    /* Step 7-Tomar el objeto de service del constructor y llamar al get para llenar
    el arreglo */
    this.sexoService.getSexos()
      .subscribe(
        res => {
          console.log(res);
          this.sexos = res;
          // Assign the data to the data source for the table to render
          this.dataSourceSexo = new MatTableDataSource(this.sexos);

        },
        err => {
          console.log(err);
        }
      );
    this.nacionalidadService.getNacionalidad()
      .subscribe(
        res => {
          console.log(res);
          this.nacionalidades = res;
          // Assign the data to the data source for the table to render
          this.dataSourceNacionalidad = new MatTableDataSource(this.nacionalidades);
        },
        err => {
          console.log(err);
        }
      );
    this.empresaService.getTipoEmpresas()
      .subscribe(
        res => {
          console.log(res);
          this.empresas = res;
          // Assign the data to the data source for the table to render
          this.dataSourceEmpresa = new MatTableDataSource(this.empresas);
        },
        err => {
          console.log(err);
        }
      );
    this.registroService.getRegistros()
      .subscribe(
        res => {
          console.log(res);
          this.registros = res;
          // Assign the data to the data source for the table to render
          this.dataSourceRegistro = new MatTableDataSource(this.registros);
        },
        err => {
          console.log(err);
        }
      );
    this.naturalezaService.getNaturalezasJuridicas()
      .subscribe(
        res => {
          console.log(res);
          this.naturalezas = res;
          // Assign the data to the data source for the table to render
          this.dataSourceNaturalezaJuridica = new MatTableDataSource(this.naturalezas);
        },
        err => {
          console.log(err);
        }
      );
    this.dominioService.getClasesDominios()
      .subscribe(
        res => {
          console.log(res);
          this.dominios = res;
          // Assign the data to the data source for the table to render
          this.dataSourceClaseDominio = new MatTableDataSource(this.dominios);
        },
        err => {
          console.log(err);
        }
      );
    this.documentoService.getDocumentos()
      .subscribe(
        res => {
          console.log(res);
          this.documentos = res;
          // Assign the data to the data source for the table to render
          this.dataSourceTipoDocumento = new MatTableDataSource(this.documentos);
        },
        err => {
          console.log(err);
        }
      );
    this.areaService.getAreas()
      .subscribe(
        res => {
          console.log(res);
          this.areas = res;
          // Assign the data to the data source for the table to render
          this.dataSourceUnidadArea = new MatTableDataSource(this.areas);
        },
        err => {
          console.log(err);
        }
      );
    this.medidaService.getMedidas()
      .subscribe(
        res => {
          console.log(res);
          this.medidas = res;
          // Assign the data to the data source for the table to render
          this.dataSourceTipoMedida = new MatTableDataSource(this.medidas);
        },
        err => {
          console.log(err);
        }
      );
    this.medidaService.getMedidas()
      .subscribe(
        res => {
          console.log(res);
          this.medidas = res;
          // Assign the data to the data source for the table to render
          this.dataSourceTipoMedida = new MatTableDataSource(this.medidas);
        },
        err => {
          console.log(err);
        }
      );
    this.medidaService.getMedidas()
      .subscribe(
        res => {
          console.log(res);
          this.medidas = res;
          // Assign the data to the data source for the table to render
          this.dataSourceTipoMedida = new MatTableDataSource(this.medidas);
        },
        err => {
          console.log(err);
        }
      );
    this.medidaService.getMedidas()
      .subscribe(
        res => {
          console.log(res);
          this.medidas = res;
          // Assign the data to the data source for the table to render
          this.dataSourceTipoMedida = new MatTableDataSource(this.medidas);
        },
        err => {
          console.log(err);
        }
      );
    this.aceraSPService.getAceraSPs()
      .subscribe(
        res => {
          console.log(res);
          this.aceras = res;
          // Assign the data to the data source for the table to render
          this.dataSourceAceraSP = new MatTableDataSource(this.aceras);
        },
        err => {
          console.log(err);
        }
      );
    this.aguaSPService.getAguaSPs()
      .subscribe(
        res => {
          console.log(res);
          this.aguas = res;
          // Assign the data to the data source for the table to render
          this.dataSourceAguaSP = new MatTableDataSource(this.aguas);
        },
        err => {
          console.log(err);
        }
      );
    this.alumPubSPService.getAlumPubSPs()
      .subscribe(
        res => {
          console.log(res);
          this.alumPubs = res;
          // Assign the data to the data source for the table to render
          this.dataSourceAlumPubSP = new MatTableDataSource(this.alumPubs);
        },
        err => {
          console.log(err);
        }
      );
    this.calleSPService.getCalleSPs()
      .subscribe(
        res => {
          console.log(res);
          this.calles = res;
          // Assign the data to the data source for the table to render
          this.dataSourceCalleSP = new MatTableDataSource(this.calles);
        },
        err => {
          console.log(err);
        }
      );
    this.drenajeSPService.getDrenajeSPs()
      .subscribe(
        res => {
          console.log(res);
          this.drenajes = res;
          // Assign the data to the data source for the table to render
          this.dataSourceDrenajeSP = new MatTableDataSource(this.drenajes);
        },
        err => {
          console.log(err);
        }
      );
     this.electricidadSPService.getElectricidadSPs()
      .subscribe(
        res => {
          console.log(res);
          this.electricidads = res;
          // Assign the data to the data source for the table to render
          this.dataSourceElectricidadSP = new MatTableDataSource(this.electricidads);
        },
        err => {
          console.log(err);
        }
      );
    this.telefonoSPService.getTelefonoSPs()
      .subscribe(
        res => {
          console.log(res);
          this.telefonos = res;
          // Assign the data to the data source for the table to render
          this.dataSourceTelefonoSP = new MatTableDataSource(this.telefonos);
        },
        err => {
          console.log(err);
        }
      );
    this.trenAsSPService.getTrenAsSPs()
      .subscribe(
        res => {
          console.log(res);
          this.trenAss = res;
          // Assign the data to the data source for the table to render
          this.dataSourceTrenAsSP = new MatTableDataSource(this.trenAss);
        },
        err => {
          console.log(err);
        }
      );
  }
  //Step 8 crear las funciones add y delete

  //Sexo
  addSexo(): void {
    //si no esta vacio el objeto
    if (this.sexo.tipo != "") {
      this.sexoService.saveSexo(this.sexo)
        .subscribe(
          res => {
            console.log(this.sexo);
            console.log(res);
            alert('Tipo de Sexo agregado con exito');
            this.ngOnInit();
            this.sexo = new Sexo();
          },
          err => {
            console.log(err);
            alert('Error al agregar sexo');
          }
        );
    }
    else {
      //poner alert
    }
  }

  modifySexo(tipo: Sexo): void {
    this.sexoService.modifySexo(tipo)
      .subscribe(
        res => {
          console.log(tipo);
          console.log(res);
          this.ngOnInit();
          alert('Tipo de sexo editado con exito');
        },
        err => {
          console.log(err);
          alert('Error editando tipo de sexo');
        }
      );
  }

  deleteSexo(tipo: string): void {
    if (confirm('Estas seguro de que quieres eliminar este elemento?')) {
      this.sexoService.deleteSexo(tipo)
        .subscribe(
          res => {
            console.log(res);
            this.ngOnInit();
            alert('Tipo de sexo eliminado con exito');
          },
          err => {
            console.log(err);
            alert('Error al eliminar sexo');
          }
        );
    }
  }

  //Nacionalidad
  addNacionalidad(): void {
    //si no esta vacio el objeto
    if (this.nacionalidad.pais != "") {
      this.nacionalidadService.saveNacionalidad(this.nacionalidad)
        .subscribe(
          res => {
            console.log(this.sexo);
            console.log(res);
            alert('Pais agregado con exito');
            this.ngOnInit();
            this.nacionalidad = new Nacionalidad();
          },
          err => {
            console.log(err);
            alert('Error al agregar pais');
          }
        );
    }
    else {
      //poner alert
    }
  }

  modifyNacionalidad(pais: Nacionalidad): void {
    this.nacionalidadService.modifyNacionalidad(pais)
      .subscribe(
        res => {
          console.log(res);
          this.ngOnInit();
          alert('Tipo de sexo editado con exito');
        },
        err => {
          console.log(err);
          alert('Error editando tipo de sexo');
        }
      );
  }

  deleteNacionalidad(pais: string): void {
    if (confirm('Estas seguro de que quieres eliminar este elemento?')) {
      this.nacionalidadService.deleteNacionalidad(pais)
        .subscribe(
          res => {
            console.log(res);
            this.ngOnInit();
            alert('Pais de nacionalidad eliminado con exito');
          },
          err => {
            console.log(err);
            alert('Error al eliminar pais');
          }
        );
    }
  }
  //Empresa
  addTipoEmpresa(): void {
    //si no esta vacio el objeto
    if (this.empresa.empresa != "") {
      this.empresaService.saveTipoEmpresa(this.empresa)
        .subscribe(
          res => {
            console.log(this.empresa);
            console.log(res);
            alert('Tipo de empresa agregado con exito');
            this.ngOnInit();
            this.empresa = new TipoEmpresa();
          },
          err => {
            console.log(err);
            alert('Error al agregar empresa');
          }
        );
    }
    else {
      //poner alert
    }
  }
  modifyTipoEmpresa(empresa: TipoEmpresa): void {
    this.empresaService.modifyTipoEmpresa(empresa)
      .subscribe(
        res => {
          console.log(empresa);
          console.log(res);
          this.ngOnInit();
          alert('Tipo de empresa editado con exito');
        },
        err => {
          console.log(err);
          alert('Error editando tipo de empresa');
        }
      );
  }

  deleteTipoEmpresa(empresa: string): void {
    if (confirm('Estas seguro de que quieres eliminar este elemento?')) {
      this.empresaService.deleteTipoEmpresa(empresa)
        .subscribe(
          res => {
            console.log(res);
            this.ngOnInit();
            alert('Tipo de empresa eliminado con exito');
          },
          err => {
            console.log(err);
            alert('Error al eliminar tipo de empresa');
          }
        );
    }
  }
  //Registro
  addRegistro(): void {
    //si no esta vacio el objeto
    if (this.reg.tipo != "") {
      this.registroService.saveRegistro(this.reg)
        .subscribe(
          res => {
            console.log(this.reg);
            console.log(res);
            alert('Tipo de registro agregado con exito');
            this.ngOnInit();
            this.reg = new Registro();
          },
          err => {
            console.log(err);
            alert('Error al agregar registro');
          }
        );
    }
  }
  modifyRegistro(registro: Registro): void {
    this.registroService.modifyRegistro(registro)
      .subscribe(
        res => {
          console.log(registro);
          console.log(res);
          this.ngOnInit();
          alert('Tipo de registro editado con exito');
        },
        err => {
          console.log(err);
          alert('Error editando registro');
        }
      );
  }

  deleteRegistro(tipo: string): void {
    if (confirm('Estas seguro de que quieres eliminar este elemento?')) {
      this.registroService.deleteRegistro(tipo)
        .subscribe(
          res => {
            console.log(res);
            this.ngOnInit();
            alert('Registro eliminado con exito');
          },
          err => {
            console.log(err);
            alert('Error al eliminar Registro');
          }
        );
    }
  }
  //Naturaleza Juridica
  addNaturaleza(): void {
    //si no esta vacio el objeto
    if (this.naturaleza.tipoNaturaleza != "") {
      this.naturalezaService.saveNaturalezaJuridica(this.naturaleza)
        .subscribe(
          res => {
            console.log(this.naturaleza);
            console.log(res);
            alert('Naturaleza agregada con exito');
            this.ngOnInit();
            this.naturaleza = new NaturalezaJuridica();
          },
          err => {
            console.log(err);
            alert('Error al agregar Naturaleza');
          }
        );
    }
    else {
      //poner alert
    }
  }

  modifyNaturaleza(naturaleza: NaturalezaJuridica): void {
    this.naturalezaService.modifyNaturalezaJuridica(naturaleza)
      .subscribe(
        res => {
          console.log(naturaleza);
          console.log(res);
          this.ngOnInit();
          alert('Naturaleza editado con exito');
        },
        err => {
          console.log(err);
          alert('Error editando Naturaleza');
        }
      );
  }

  deleteNaturaleza(tipo: string): void {
    if (confirm('Estas seguro de que quieres eliminar este elemento?')) {
      this.naturalezaService.deleteNaturalezaJuridica(tipo)
        .subscribe(
          res => {
            console.log(res);
            this.ngOnInit();
            alert('Naturaleza eliminado con exito');
          },
          err => {
            console.log(err);
            alert('Error al eliminar Naturaleza');
          }
        );
    }
  }
  //Dominio
  addDominio(): void {
    //si no esta vacio el objeto
    if (this.dominio.tipoDominio != "") {
      this.dominioService.saveClaseDominio(this.dominio)
        .subscribe(
          res => {
            console.log(this.dominio);
            console.log(res);
            alert('Dominio agregada con exito');
            this.ngOnInit();
            this.dominio = new ClaseDominio();
          },
          err => {
            console.log(err);
            alert('Error al agregar dominio');
          }
        );
    }
    else {
      //poner alert
    }
  }

  modifyDominio(dominio: ClaseDominio): void {
    this.dominioService.modifyClaseDominio(dominio)
      .subscribe(
        res => {
          console.log(dominio);
          console.log(res);
          this.ngOnInit();
          alert('Dominio editado con exito');
        },
        err => {
          console.log(err);
          alert('Error editando dominio');
        }
      );
  }

  deleteDominio(tipo: string): void {
    if (confirm('Estas seguro de que quieres eliminar este elemento?')) {
      this.dominioService.deleteClaseDominio(tipo)
        .subscribe(
          res => {
            console.log(res);
            this.ngOnInit();
            alert('Dominio eliminado con exito');
          },
          err => {
            console.log(err);
            alert('Error al eliminar Dominio');
          }
        );
    }
  }
  //Documento
  addDocumento(): void {
    //si no esta vacio el objeto
    if (this.documento.tipoDoc != "") {
      this.documentoService.saveTipoDocumento(this.documento)
        .subscribe(
          res => {
            console.log(this.documento);
            console.log(res);
            alert('Documento agregada con exito');
            this.ngOnInit();
            this.documento = new TipoDocumento();
          },
          err => {
            console.log(err);
            alert('Error al agregar documento');
          }
        );
    }
    else {
      //poner alert
    }
  }

  modifyDocumento(documento: TipoDocumento): void {
    this.documentoService.modifyTipoDocumento(documento)
      .subscribe(
        res => {
          console.log(documento);
          console.log(res);
          this.ngOnInit();
          alert('Documento editado con exito');
        },
        err => {
          console.log(err);
          alert('Error editando Documento');
        }
      );
  }

  deleteDocumento(tipoDoc: string): void {
    if (confirm('Estas seguro de que quieres eliminar este elemento?')) {
      this.documentoService.deleteTipoDocumento(tipoDoc)
        .subscribe(
          res => {
            console.log(res);
            this.ngOnInit();
            alert('Documento eliminado con exito');
          },
          err => {
            console.log(err);
            alert('Error al eliminar Documento');
          }
        );
    }
  }
  //Area
  addArea(): void {
    //si no esta vacio el objeto
    if (this.area.area != "") {
      this.areaService.saveUnidadArea(this.area)
        .subscribe(
          res => {
            console.log(this.area);
            console.log(res);
            alert('Area agregada con exito');
            this.ngOnInit();
            this.area = new UnidadArea();
          },
          err => {
            console.log(err);
            alert('Error al agregar area');
          }
        );
    }
    else {
      //poner alert
    }
  }

  modifyArea(area: UnidadArea): void {
    this.areaService.modifyUnidadArea(area)
      .subscribe(
        res => {
          console.log(area);
          console.log(res);
          this.ngOnInit();
          alert('Area editado con exito');
        },
        err => {
          console.log(err);
          alert('Error editando area');
        }
      );
  }

  deleteArea(area: string): void {
    if (confirm('Estas seguro de que quieres eliminar este elemento?')) {
      this.areaService.deleteUnidadArea(area)
        .subscribe(
          res => {
            console.log(res);
            this.ngOnInit();
            alert('Area eliminada con exito');
          },
          err => {
            console.log(err);
            alert('Error al eliminar area');
          }
        );
    }
  }
  //Tipo de medidda
  addMedida(): void {
    //si no esta vacio el objeto
    if (this.medida.medida != "") {
      this.medidaService.saveTipoMedida(this.medida)
        .subscribe(
          res => {
            console.log(this.medida);
            console.log(res);
            alert('Medida agregada con exito');
            this.ngOnInit();
            this.medida = new TipoMedida();
          },
          err => {
            console.log(err);
            alert('Error al agregar Medida');
          }
        );
    }
    else {
      //poner alert
    }
  }

  modifyMedida(medida: TipoMedida): void {
    this.medidaService.modifyTipoMedida(medida)
      .subscribe(
        res => {
          console.log(medida);
          console.log(res);
          this.ngOnInit();
          alert('Medida editado con exito');
        },
        err => {
          console.log(err);
          alert('Error editando Medida');
        }
      );
  }

  deleteMedida(medida: string): void {
    if (confirm('Estas seguro de que quieres eliminar este elemento?')) {
      this.medidaService.deleteTipoMedida(medida)
        .subscribe(
          res => {
            console.log(res);
            this.ngOnInit();
            alert('Medida eliminado con exito');
          },
          err => {
            console.log(err);
            alert('Error al eliminar Medida');
          }
        );
    }
  }
  //Servicios publicos
  //Acera
  addAceraSP(): void {
    //si no esta vacio el objeto
    if (this.aceraSP.tipo != "") {
      this.aceraSPService.saveAceraSP(this.aceraSP)
        .subscribe(
          res => {
            console.log(this.aceraSP);
            console.log(res);
            alert('Acera agregada con exito');
            this.ngOnInit();
            this.aceraSP = new AceraSP();
          },
          err => {
            console.log(err);
            alert('Error al agregar empresa');
          }
        );
    }
    else {
      //poner alert
    }
  }
  modifyAceraSP(aceraSP: AceraSP): void {
    this.aceraSPService.modifyAceraSP(aceraSP)
      .subscribe(
        res => {
          console.log(aceraSP);
          console.log(res);
          this.ngOnInit();
          alert('Tipo de acera editado con exito');
        },
        err => {
          console.log(err);
          alert('Error editando tipo de acera');
        }
      );
  }

  deleteAcercaSP(tipo: string): void {
    if (confirm('Estas seguro de que quieres eliminar este elemento?')) {
      this.aceraSPService.deleteAceraSP(tipo)
        .subscribe(
          res => {
            console.log(res);
            this.ngOnInit();
            alert('Tipo de acera eliminado con exito');
          },
          err => {
            console.log(err);
            alert('Error al eliminar tipo de acera');
          }
        );
    }
  }

  //Agua
  addAguaSP(): void {
    //si no esta vacio el objeto
    if (this.aguaSP.tipo != "") {
      this.aguaSPService.saveAguaSP(this.aguaSP)
        .subscribe(
          res => {
            console.log(this.aguaSP);
            console.log(res);
            alert('Tipo de agua agregado con exito');
            this.ngOnInit();
            this.aguaSP = new AguaSP();
          },
          err => {
            console.log(err);
            alert('Error al agregar tipo de agua');
          }
        );
    }
    else {
      //poner alert
    }
  }
  modifyAguaSP(tipo: AguaSP): void {
    this.aguaSPService.modifyAguaSP(tipo)
      .subscribe(
        res => {
          console.log(tipo);
          console.log(res);
          this.ngOnInit();
          alert('Tipo de agua editado con exito');
        },
        err => {
          console.log(err);
          alert('Error editando tipo de agua');
        }
      );
  }

  deleteAguaSP(tipo: string): void {
    if (confirm('Estas seguro de que quieres eliminar este elemento?')) {
      this.aguaSPService.deleteAguaSP(tipo)
        .subscribe(
          res => {
            console.log(res);
            this.ngOnInit();
            alert('Tipo de agua eliminado con exito');
          },
          err => {
            console.log(err);
            alert('Error al eliminar tipo de agua');
          }
        );
    }
  }
  //Alumbrado público
  addAlumPubSP(): void {
    //si no esta vacio el objeto
    if (this.alumPubSP.tipo != "") {
      this.alumPubSPService.saveAlumPubSP(this.alumPubSP)
        .subscribe(
          res => {
            console.log(this.alumPubSP);
            console.log(res);
            alert('Tipo de empresa agregado con exito');
            this.ngOnInit();
            this.alumPubSP = new AlumPubSP();
          },
          err => {
            console.log(err);
            alert('Error al agregar alumbrado público');
          }
        );
    }
    else {
      //poner alert
    }
  }
  modifyAlumPubSP(tipo: AlumPubSP): void {
    this.alumPubSPService.modifyAlumPubSP(tipo)
      .subscribe(
        res => {
          console.log(tipo);
          console.log(res);
          this.ngOnInit();
          alert('Tipo de alumbrado público editado con exito');
        },
        err => {
          console.log(err);
          alert('Error editando tipo de alumbrado público');
        }
      );
  }

  deleteAlumPubSP(tipo: string): void {
    if (confirm('Estas seguro de que quieres eliminar este elemento?')) {
      this.alumPubSPService.deleteAlumPubSP(tipo)
        .subscribe(
          res => {
            console.log(res);
            this.ngOnInit();
            alert('Tipo de alumbrado público eliminado con exito');
          },
          err => {
            console.log(err);
            alert('Error al eliminar tipo de alumbrado público');
          }
        );
    }
  }
  //Calle
  addCalleSP(): void {
    //si no esta vacio el objeto
    if (this.calleSP.tipo != "") {
      this.calleSPService.saveCalleSP(this.calleSP)
        .subscribe(
          res => {
            console.log(this.calleSP);
            console.log(res);
            alert('Tipo de calle agregado con exito');
            this.ngOnInit();
            this.calleSP = new CalleSP();
          },
          err => {
            console.log(err);
            alert('Error al agregar calle');
          }
        );
    }
    else {
      //poner alert
    }
  }
  modifyCalleSP(tipo: CalleSP): void {
    this.calleSPService.modifyCalleSP(tipo)
      .subscribe(
        res => {
          console.log(tipo);
          console.log(res);
          this.ngOnInit();
          alert('Tipo de calle editado con exito');
        },
        err => {
          console.log(err);
          alert('Error editando tipo de calle');
        }
      );
  }

  deleteCalleSP(tipo: string): void {
    if (confirm('Estas seguro de que quieres eliminar este elemento?')) {
      this.calleSPService.deleteCalleSP(tipo)
        .subscribe(
          res => {
            console.log(res);
            this.ngOnInit();
            alert('Tipo de calle eliminado con exito');
          },
          err => {
            console.log(err);
            alert('Error al eliminar tipo de calle');
          }
        );
    }
  }
  //Drenaje
  addDrenajeSP(): void {
    //si no esta vacio el objeto
    if (this.drenajeSP.tipo != "") {
      this.drenajeSPService.saveDrenajeSP(this.drenajeSP)
        .subscribe(
          res => {
            console.log(this.drenajeSP);
            console.log(res);
            alert('Tipo de drenaje agregado con exito');
            this.ngOnInit();
            this.drenajeSP = new DrenajeSP();
          },
          err => {
            console.log(err);
            alert('Error al agregar drenaje');
          }
        );
    }
    else {
      //poner alert
    }
  }
  modifyDrenajeSP(tipo: DrenajeSP): void {
    this.drenajeSPService.modifyDrenajeSP(tipo)
      .subscribe(
        res => {
          console.log(tipo);
          console.log(res);
          this.ngOnInit();
          alert('Tipo de drenaje editado con exito');
        },
        err => {
          console.log(err);
          alert('Error editando tipo de drenaje');
        }
      );
  }

  deleteDrenajeSP(tipo: string): void {
    if (confirm('Estas seguro de que quieres eliminar este elemento?')) {
      this.drenajeSPService.deleteDrenajeSP(tipo)
        .subscribe(
          res => {
            console.log(res);
            this.ngOnInit();
            alert('Tipo de drenaje eliminado con exito');
          },
          err => {
            console.log(err);
            alert('Error al eliminar tipo de drenaje');
          }
        );
    }
  }
  //Electricidad
  addElectricidadSP(): void {
    //si no esta vacio el objeto
    if (this.electricidadSP.tipo != "") {
      this.electricidadSPService.saveElectricidadSP(this.electricidadSP)
        .subscribe(
          res => {
            console.log(this.electricidadSP);
            console.log(res);
            alert('Tipo de electricidad agregado con exito');
            this.ngOnInit();
            this.electricidadSP = new ElectricidadSP();
          },
          err => {
            console.log(err);
            alert('Error al agregar electricidad');
          }
        );
    }
    else {
      //poner alert
    }
  }
  modifyElectricidadSP(tipo: ElectricidadSP): void {
    this.electricidadSPService.modifyElectricidadSP(tipo)
      .subscribe(
        res => {
          console.log(tipo);
          console.log(res);
          this.ngOnInit();
          alert('Tipo de electricidad editado con exito');
        },
        err => {
          console.log(err);
          alert('Error editando tipo de electricidad');
        }
      );
  }

  deleteElectricidadSP(tipo: string): void {
    if (confirm('Estas seguro de que quieres eliminar este elemento?')) {
      this.electricidadSPService.deleteElectricidadSP(tipo)
        .subscribe(
          res => {
            console.log(res);
            this.ngOnInit();
            alert('Tipo de electricidad eliminado con exito');
          },
          err => {
            console.log(err);
            alert('Error al eliminar tipo de electricidad');
          }
        );
    }
  }
  //Telefono
  addTelefonoSP(): void {
    //si no esta vacio el objeto
    if (this.telefonoSP.tipo != "") {
      this.telefonoSPService.saveTelefonoSP(this.telefonoSP)
        .subscribe(
          res => {
            console.log(this.telefonoSP);
            console.log(res);
            alert('Tipo de telefono agregado con exito');
            this.ngOnInit();
            this.telefonoSP = new TelefonoSP();
          },
          err => {
            console.log(err);
            alert('Error al agregar telefono');
          }
        );
    }
    else {
      //poner alert
    }
  }
  modifyTelefonoSP(tipo: TelefonoSP): void {
    this.telefonoSPService.modifyTelefonoSP(tipo)
      .subscribe(
        res => {
          console.log(tipo);
          console.log(res);
          this.ngOnInit();
          alert('Tipo de telefono editado con exito');
        },
        err => {
          console.log(err);
          alert('Error editando tipo de telefono');
        }
      );
  }

  deleteTelefonoSP(tipo: string): void {
    if (confirm('Estas seguro de que quieres eliminar este elemento?')) {
      this.telefonoSPService.deleteTelefonoSP(tipo)
        .subscribe(
          res => {
            console.log(res);
            this.ngOnInit();
            alert('Tipo de telefono eliminado con exito');
          },
          err => {
            console.log(err);
            alert('Error al eliminar tipo de telefono');
          }
        );
    }
  }
  //Tren de aseo
  addTrenAsSP(): void {
    //si no esta vacio el objeto
    if (this.trenAsSP.tipo != "") {
      this.trenAsSPService.saveTrenAsSP(this.trenAsSP)
        .subscribe(
          res => {
            console.log(this.trenAsSP);
            console.log(res);
            alert('Tipo de tren de aseo agregado con exito');
            this.ngOnInit();
            this.trenAsSP = new TrenAsSP();
          },
          err => {
            console.log(err);
            alert('Error al agregar tren de aseo');
          }
        );
    }
    else {
      //poner alert
    }
  }
  modifyTrenAsSP(tipo: TrenAsSP): void {
    this.trenAsSPService.modifyTrenAsSP(tipo)
      .subscribe(
        res => {
          console.log(tipo);
          console.log(res);
          this.ngOnInit();
          alert('Tipo de tren de aseo editado con exito');
        },
        err => {
          console.log(err);
          alert('Error editando tipo de tren de aseo');
        }
      );
  }

  deleteTrenAsSP(tipo: string): void {
    if (confirm('Estas seguro de que quieres eliminar este elemento?')) {
      this.trenAsSPService.deleteTrenAsSP(tipo)
        .subscribe(
          res => {
            console.log(res);
            this.ngOnInit();
            alert('Tipo de tren de aseo eliminado con exito');
          },
          err => {
            console.log(err);
            alert('Error al eliminar tipo de tren de aseo');
          }
        );
    }
  }
}

