import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(createProductDto: CreateProductDto): Promise<{
        message: string;
        data: any;
    }>;
    getByUUID(uuid: string): Promise<{
        message: string;
        data: any;
    }>;
    updateByUUID(uuid: string, updateProductDto: UpdateProductDto): Promise<{
        message: string;
        data: any;
    }>;
    deleteByUUID(uuid: string): Promise<{
        message: string;
        data: any;
    }>;
}
