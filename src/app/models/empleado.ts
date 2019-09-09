export enum Roles {
    Jefatura, //Complete crud
    Secretaria, //read only
    SupervisorAtencionContribuyente, //read only
    SupervisorArchivo, //read only
    SupervisorMantenimiento, //complete crud
    SupervisorDigitacion, //complete crud
    SupervisorControlCalidad, //read only
}

export class Empleado {
    nombre: string;
    password: string;
    tipo: number;
}
