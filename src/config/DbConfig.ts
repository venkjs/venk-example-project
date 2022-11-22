import { Product } from './../model/entity/Product';
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type:"postgres",
    host:"localhost",
    port:5432,
    database:"Northwind",
    entities:[Product],
    username:"postgres",
    password:"root"
})