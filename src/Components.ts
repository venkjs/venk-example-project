import { ProductServiceAspect } from './service/aspects/ProductServiceAspect';
import { ProductService } from './service/ProductService';
import { ProductApi } from './api/ProductApi';
export const Components={
    api:{
        ProductApi
    },  
    service:{
        ProductService
    },
    aspect:{
        ProductServiceAspect
    }

}