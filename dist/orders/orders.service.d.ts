import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/prisma.service';
import { CreateOrderDto } from './dto/create-order.dto';
export declare class OrdersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createOrder(createOrderDto: CreateOrderDto): Promise<{
        message: string;
        data: any;
    }>;
    numberOfProduct(createOrderDto: CreateOrderDto): Promise<void>;
    createBelong(createOrderDto: CreateOrderDto): Promise<{
        message: string;
        data: any;
    }>;
    getByOrderNumber(order_number: number): Promise<{
        message: string;
        data: any;
    }>;
    updateByOrderNumber(order_number: number, updateOrdertDto: UpdateOrderDto): Promise<{
        message: string;
        data: any;
    }>;
    removeByOrderNumber(order_number: number): Promise<{
        message: string;
        data: any;
    }>;
}
