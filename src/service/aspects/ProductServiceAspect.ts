import { After, JoinPoint } from "venk";
import { ProductService } from "../ProductService";

export class ProductServiceAspect{
    
    @After(ProductService,"get*")
    public afterGetMethods(joinpoint:JoinPoint){
        console.log(joinpoint)
    }

}