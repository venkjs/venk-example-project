import {Component, Workable} from "venk"
import { AppDataSource } from "../config/DbConfig";
import { Product } from "../model/entity/Product";
@Component()
@Workable()
export class ProductService{
    public async  getProducts():Promise<Array<Product>>{
        const roomRepository = AppDataSource.getRepository(Product);
        return await roomRepository.find({
            
        })
    }

    public async saveRoom(product:Product){
        const roomRepository = AppDataSource.getRepository(Product);
        return await roomRepository.save(product)
    }

}