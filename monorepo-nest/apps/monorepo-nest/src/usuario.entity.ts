import { Entity,Column, PrimaryGeneratedColumn, Unique } from "typeorm";
/*import { IsEmail, IsInt, IsNotEmpty, IsString,NotEquals,IsAlphanumeric, IsAlpha } from 'class-validator';*/
@Entity()
export class Usuario{
    @PrimaryGeneratedColumn()
    
    id: number;
    
    @Column({ length: 20})
    nombre: string;
    
    @Column({ length: 100})
    correo: string;
}