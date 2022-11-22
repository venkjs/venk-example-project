import { Column, Double, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"products"})
export class Product{
    @PrimaryGeneratedColumn()
    product_id: number

    @Column()
    product_name: string

    @Column()
    unit_price:number
    
}