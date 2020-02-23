export class FichaCatastral {
    cocata: string;
    depto: string;
    municipio: string;
    aldea: string;
    mapa: string;
    bolque: string;
    predio: string;
    num: string;
    maq: string;
    st: string;
    codProp: string;
    codHab: string;
    noLinea: string;
    noFoto: string;
    poblacion: string;
    identidadPropietario: string;
    tomo: string;
    asiento: string;
    tipo: number;

    toJSON() {
        let myJSON = {
            "cocata":this.cocata,
            "depto": this.depto,
            "municipio": this.municipio,
            "aldea": this.aldea,
            "mapa": this.mapa,
            "bloque": this.bolque,
            "predio": this.predio,
            "num": this.num,
            "maq": this.maq,
            "st": this.st,
            "codProp": this.codProp,
            "noLinea": this.noLinea,
            "noFoto": this.noFoto,
            "poblacion": this.poblacion,
            "identidadPropietario": this.identidadPropietario,
            "tomo": this.tomo,
            "asiento": this.asiento,
            "tipo":this.tipo,
        }
        return myJSON;
    }
}