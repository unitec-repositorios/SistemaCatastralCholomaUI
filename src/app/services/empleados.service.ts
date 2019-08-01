import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
