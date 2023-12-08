export declare class CreateOrderDto {
    order_number: number;
    order_total_cost_ht: number;
    order_total_quantity: number;
    created_at: Date;
    deliver_at: Date;
    user_UUID: string;
    Products: string;
    product_UUID: string;
}
