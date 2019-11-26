import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResolveEnd } from '@angular/router';
 

interface IAppConfig {
  ruta: string
}

@Injectable()
export class AppConfigService {
 
    static settings: IAppConfig;
 
    constructor(private http: HttpClient) {}
 
    load() {
 
        const jsonFile = `assets/conf.json`;
        
        let ruta ="error";

        return new Promise<string>((resolve, reject) => {
            this.http.get(jsonFile).toPromise().then((response : IAppConfig) => {
              let IAP = <IAppConfig>response;
            
              ruta = IAP.ruta;

              console.log('Config Loaded');
              console.log( ruta);
              
              resolve(ruta);
            }).catch((response: any) => {
               reject(`Could not load the config file`);
            });
        });
    }
}
