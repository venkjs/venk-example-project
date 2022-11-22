import { ProductService } from './../service/ProductService';
import { Component, ResponseEntity } from 'venk';
import { Autowired, Controller, GetMapping } from "venk";
import { HttpStatus } from 'venk/lib/http/constants/HttpConstants';

@Controller("/api/products")
@Component()
export class ProductApi {

    @Autowired()
    private productService:ProductService

    @GetMapping("/getAll")
    public async getAll():Promise<ResponseEntity<Array<any>>> {
        let products =await  this.productService.getProducts()
        return ResponseEntity.status(HttpStatus.OK).body(products)
    }

}