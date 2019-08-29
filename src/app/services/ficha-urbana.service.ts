import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FichaUrbana } from '../models/ficha-urbana';

@Injectable({
  providedIn: 'root'
})
export class FichaUrbanaService {

  API_URL = '//catastrocholomaapi.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getFichaUrbanas() {
    return this.http.get(`${this.API_URL}/FichaUrbana`);
  }

  saveFichaUrbana(FichaUrbana: FichaUrbana){
    return this.http.post(`${this.API_URL}/FichaUrbana`, FichaUrbana);
  }

  getFichaUrbana(id: number) {
    return this.http.get(`${this.API_URL}/FichaUrbana/${id}`)
  }

  modifyFichaUrbana(FichaUrbana: FichaUrbana) {
    return this.http.put(`${this.API_URL}/FichaUrbana/${FichaUrbana.id}`, FichaUrbana);
  }

  deleteFichaUrbana(id: number) {
    return this.http.delete(`${this.API_URL}/FichaUrbana/${id}`);
  }
}
