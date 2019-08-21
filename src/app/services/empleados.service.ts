import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Empleado} from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  API_URL = '//catastrocholomaapi.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getEmpleados() {
    return this.http.get(`${this.API_URL}/Empleado`);
  }

  getEmpleado(id: string) {
    return this.http.get(`${this.API_URL}/Empleado?id=${id}`);
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
