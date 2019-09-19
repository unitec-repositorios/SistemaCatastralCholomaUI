import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

//Step 1) Importar los modelos y servicios
import {Sexo} from '../../models/sexo'
import{SexoService}from '../../services/sexo.service'
import {Nacionalidad}from '../../models/nacionalidad'
import {NacionalidadService}from '../../services/nacionalidad.service'
import { TipoEmpresa } from '../../models/tipo-empresa';
import { TipoEmpresaService } from '../../services/tipo-empresa.service';

@Component({
  selector: 'app-mantenimientos',
  templateUrl: './mantenimientos.component.html',
  styleUrls: ['./mantenimientos.component.css']
})
export class MantenimientosComponent implements OnInit {
  //Step 2-Crear un arreglo de las columnas de la tabla
  displayedColumnsSexo: string[] = ['tipo', 'actions'];
  displayedColumnsNacionalidad: string[]=['pais','actions'];
  displayedColumnsEmpresa: string[]=['empresa','actions'];
  //Step 3-Crear datasource para la tabla del tipo del modelo
  dataSourceSexo:MatTableDataSource<Sexo>
  dataSourceNacionalidad:MatTableDataSource<Nacionalidad>
  dataSourceEmpresa:MatTableDataSource<TipoEmpresa>
  //Step 4-Crear arreglo de tipo any para luego llenarlo y darselo al datasource
  sexos: any=[];
  nacionalidades: any=[];
  empresas: any=[];
  //Step5-Crear objeto del dtipo del modelo, este se llenara para meterlo a la DB
  sexo: Sexo=new Sexo();
  nacionalidad: Nacionalidad=new Nacionalidad();
  empresa: TipoEmpresa=new TipoEmpresa();
  //Step 6- ingresar el service ne el constructor
  constructor(private sexoService:SexoService,private nacionalidadService:NacionalidadService,private empresaService:TipoEmpresaService) { }

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
  }
  //Step 8 crear las funciones add y delete

  //Sexo
  addSexo(): void {
    //si no esta vacio el objeto
    if(this.sexo.tipo!=""){
      this.sexoService.saveSexo(this.sexo)
      .subscribe(
        res=>{
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
    else{
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
    if(confirm('Estas seguro de que quieres eliminar este elemento?')) {
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
      if(this.nacionalidad.pais!=""){
        this.nacionalidadService.saveNacionalidad(this.nacionalidad)
        .subscribe(
          res=>{
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
      else{
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
      if(confirm('Estas seguro de que quieres eliminar este elemento?')) {
        this.nacionalidadService.deleteNacionalidad(pais)
          .subscribe(
            res => {
              console.log(res);
              this.ngOnInit();
              alert('Pais de nacionalidad eliminado con exito');
            },
            err => {
              console.log(err);
              alert('Error al eliminar sexo');
            }
          );
      }
    }
//Empresa
      addTipoEmpresa(): void {
        //si no esta vacio el objeto
        if(this.empresa.empresa!=""){
          this.empresaService.saveTipoEmpresa(this.empresa)
          .subscribe(
            res=>{
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
        else{
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
        if(confirm('Estas seguro de que quieres eliminar este elemento?')) {
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
    
    }

    