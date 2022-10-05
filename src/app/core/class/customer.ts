export class Customer {
    nombre:string;
    apellido:string;
    email:string;
    dni:number;
    fechaNac:Date;
    telefono:string;
    direccion:string;

    constructor(nombre:string='',apellido:string='',email:string='',dni:number=0,fechaNac:Date=new Date(),telefono:string='',direccion:string=''){
        this.nombre=nombre;
        this.apellido=apellido;
        this.email=email;
        this.dni=dni;
        this.fechaNac=fechaNac;
        this.telefono=telefono;
        this.direccion=direccion;
    }
}

