import { Injectable } from '@angular/core';
import{TipoDocumento}from'../models/tipo-documento'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

  API_URL = '//catastrocholoma.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getDocumentos() {
    return this.http.get(`${this.API_URL}/tipoDocumento`);
  }

  saveTipoDocumento(documento: TipoDocumento) {
    return this.http.post(`${this.API_URL}/tipoDocumento`, documento);
  }

  getTipoDocumento(tipoDoc: string) {
    return this.http.get(`${this.API_URL}/tipoDocumento?tipoDoc=${tipoDoc}`)
  }

  modifyTipoDocumento(documento: TipoDocumento) {
    return this.http.put(`${this.API_URL}/tipoDocumento?old=${documento.tipoDoc}`, documento);
  }

  deleteTipoDocumento(tipoDoc: string) {
    return this.http.delete(`${this.API_URL}/tipoDocumento?old=${tipoDoc}`);
  }
}
