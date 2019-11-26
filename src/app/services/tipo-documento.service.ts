import { Injectable } from '@angular/core';
import{TipoDocumento}from'../models/tipo-documento'
import { HttpClient } from '@angular/common/http';

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {

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
