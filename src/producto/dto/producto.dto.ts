import { create } from "domain";

export class CreateProductoDTO {
    readonly nombre: string;
    readonly descripcion: string;
    readonly imageURL: string;
    readonly costo: number;
    readonly iva: number;
    readonly precio: number;
    readonly createdAT: Date;




}