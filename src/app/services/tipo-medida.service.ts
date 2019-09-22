import { Injectable } from '@angular/core';
import{TipoMedida} from'../models/tipo-medida'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TipoMedidaService {

  API_URL = '//catastrocholoma.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getMedidas() {
    return this.http.get(`${this.API_URL}/tipoMedida`);
  }

  saveTipoMedida(tipoMedida: TipoMedida) {
    return this.http.post(`${this.API_URL}/tipoMedida`, tipoMedida);
  }

  getTipoMedida(medida: string) {
    return this.http.get(`${this.API_URL}/tipoMedida?medida=${medida}`)
  }

  modifyTipoMedida(tipoMedida: TipoMedida) {
    return this.http.put(`${this.API_URL}/tipoMedida?old=${tipoMedida.medida}`, TipoMedida);
  }

  deleteTipoMedida(medida: string) {
    return this.http.delete(`${this.API_URL}/tipoMedida?old=${medida}`);
  }
}
