import { Injectable } from '@angular/core';
import{TipoMedida} from'../models/tipo-medida';
import { HttpClient } from '@angular/common/http';

import { AppConfigService } from '../services/app-config.service'

@Injectable({
  providedIn: 'root'
})
export class TipoMedidaService {

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
