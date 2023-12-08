"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const normalized_response_1 = require("../utils/normalized.response");
const order_entity_1 = require("./entities/order.entity");
let OrdersService = class OrdersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createOrder(createOrderDto) {
        const createOrders = new normalized_response_1.default('A new order has been created', await this.prisma.order.create({
            data: {
                order_total_cost_ht: createOrderDto.order_total_cost_ht,
                order_total_quantity: createOrderDto.order_total_quantity,
                created_at: createOrderDto.created_at,
                deliver_at: createOrderDto.deliver_at,
                User: {
                    connect: {
                        user_UUID: createOrderDto.user_UUID,
                    },
                },
            },
        }));
        return createOrders.toJSON();
    }
    async numberOfProduct(createOrderDto) {
        const numberOfProducts = [createOrderDto.Products].map(Product => {
            return this.prisma.belong.create({
                data: {
                    order_number: order_entity_1.Order.order_number, product_UUID: Product
                }
            });
        });
    }
    async createBelong(createOrderDto) {
        const createUser = new normalized_response_1.default('Order ${createOrderDto.order_number} has been created', await this.prisma.belong.create({
            data: {
                Products: {
                    connect: {
                        product_UUID: createOrderDto.Products
                    },
                },
                Order: {
                    connect: {
                        order_number: (await this.createOrder(createOrderDto)).data.order_number,
                    },
                },
            },
        }));
        return createUser.toJSON();
    }
    async getByOrderNumber(order_number) {
        return new normalized_response_1.default(`Product for '${order_number}' uuid has been found`, await this.prisma.order.findUnique({
            where: {
                order_number: order_number,
            },
        })).toJSON();
    }
    async updateByOrderNumber(order_number, updateOrdertDto) {
        return new normalized_response_1.default(`Order for '${order_number}' uuid has been updated`, await this.prisma.order.update({
            where: {
                order_number: order_number,
            },
            data: {
                order_number: updateOrdertDto.order_number,
                order_total_cost_ht: updateOrdertDto.order_total_cost_ht,
                order_total_quantity: updateOrdertDto.order_total_quantity,
                created_at: updateOrdertDto.created_at,
                deliver_at: updateOrdertDto.deliver_at,
            },
        })).toJSON();
    }
    async removeByOrderNumber(order_number) {
        return new normalized_response_1.default(`Product for '${order_number} has been deleted'`, await this.prisma.order.delete({
            where: {
                order_number: order_number
            }
        })).toJSON();
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map