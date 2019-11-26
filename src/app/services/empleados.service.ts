import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado';

import { AppConfigService } from '../services/app-config.service'

 

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  API_URL = "Err";

  constructor(private http: HttpClient) { 
    let app = new AppConfigService(http);
    app.load().then((resolve: string) => {
      this.API_URL = resolve;
      //console.log(this.API_URL)
    }).catch(()=>{
      console.log("error...");
    })
  }

  getEmpleados() {
    return this.http.get(`${this.API_URL}/Empleado`);
  }

  getEmpleado(id: string) {
    return this.http.get(`${this.API_URL}/Empleado/${id}`);
  }

  saveEmpleado(empleado: Empleado){
    return this.http.post(`${this.API_URL}/Empleado`, empleado);
  }

  modifyEmpleado(empleado: Empleado) {
    return this.http.put(`${this.API_URL}/Empleado/${empleado.nombre}`, empleado);
  }

  deleteEmpleado(username: string) {
    return this.http.delete(`${this.API_URL}/Empleado/${username}`);
  }

  saveEmpleados(Empleado: Empleado){
    return this.http.post(`${this.API_URL}/Empleados`, Empleado);
  }

  modifyEmpleados(Empleado: Empleado) {
    return this.http.put(`${this.API_URL}/Empleados/${Empleado.nombre}`, Empleado);
  }

  deleteEmpleados(id: string) {
    return this.http.delete(`${this.API_URL}/Empleados/${id}`);
  }

}
