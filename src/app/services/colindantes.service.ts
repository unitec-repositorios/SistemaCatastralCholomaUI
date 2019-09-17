import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Colindantes} from '../models/colindantes';

@Injectable({
  providedIn: 'root'
})
export class ColindantesService {

  API_URL = '//catastrocholoma.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getColindantes() {
    return this.http.get(`${this.API_URL}/Colindantes`);
  }

  saveColindantes(Colindantes: Colindantes){
    return this.http.post(`${this.API_URL}/Colindantes`, Colindantes);
  }

  getColindante(id: string) {
    return this.http.get(`${this.API_URL}/Colindantes/${id}`)
  }

  modifyColindantes(Colindantes: Colindantes) {
    return this.http.put(`${this.API_URL}/Colindantes/${Colindantes.idcolindantes}`, Colindantes);
  }

  deleteColindantes(id: string) {
    return this.http.delete(`${this.API_URL}/Colindantes/${id}`);
  }
}
