import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AvaluoRural} from "../models/avaluo-rural";

@Injectable({
  providedIn: 'root'
})
export class AvaluoRuralService {

  API_URL = '//catastrocholomaapi.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getAvaluoRurales() {
    return this.http.get(`${this.API_URL}/AvaluoRural`);
  }

  saveAvaluoRural(avaR: AvaluoRural){
    return this.http.post(`${this.API_URL}/AvaluoRural`, avaR);
  }

  getAvaluoRural(id: string) {
    return this.http.get(`${this.API_URL}/AvaluoRural/${id}`)
  }

  modifyAvaluoRural(avaR: AvaluoRural) {
    return this.http.put(`${this.API_URL}/AvaluoRural/${avaR.idavaluorural}`, avaR);
  }

  deleteAvaluoRural(id: string) {
    return this.http.delete(`${this.API_URL}/AvaluoRural/${id}`);
  }
}
