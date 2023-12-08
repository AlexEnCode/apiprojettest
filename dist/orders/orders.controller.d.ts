import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(createOrderDto: CreateOrderDto): Promise<{
        message: string;
        data: any;
    }>;
    findOne(order_number: number): Promise<{
        message: string;
        data: any;
    }>;
    update(order_number: number, updateOrderDto: UpdateOrderDto): Promise<{
        message: string;
        data: any;
    }>;
    remove(order_number: number): Promise<{
        message: string;
        data: any;
    }>;
}
