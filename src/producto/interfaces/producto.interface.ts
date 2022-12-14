import { Document } from 'mongoose'

export interface Producto extends Document {
    readonly nombre: string;
    readonly descripcion: string;
    readonly imageURL: string;
    readonly costo: number;
    readonly iva: number;
    readonly precio: number;
    readonly  createdAt: Date;
 
}