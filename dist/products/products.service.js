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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const normalized_response_1 = require("../utils/normalized.response");
let ProductsService = class ProductsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createProductDto) {
        return new normalized_response_1.default(`Product ${createProductDto.name} has been registered`, await this.prisma.products.create({
            data: {
                product_UUID: createProductDto.uuid,
                product_name: createProductDto.name,
                product_description: createProductDto.description,
                product_price: createProductDto.price,
                product_quantity: createProductDto.quantity,
                created_at: createProductDto.created_at,
                updated_at: createProductDto.updated_at,
            },
        })).toJSON();
    }
    async getByUUID(uuid) {
        return new normalized_response_1.default(`Product for '${uuid}' uuid has been found`, await this.prisma.products.findUnique({
            where: {
                product_UUID: uuid,
            },
        })).toJSON();
    }
    async updateByUUID(uuid, updateProductDto) {
        return new normalized_response_1.default(`Product for '${uuid}' uuid has been updated`, await this.prisma.products.update({
            where: {
                product_UUID: uuid,
            },
            data: {
                product_name: updateProductDto.name,
                product_description: updateProductDto.description,
                product_price: updateProductDto.price,
            },
        })).toJSON();
    }
    async deleteByUUID(uuid) {
        return new normalized_response_1.default(`Product for '${uuid} has been deleted'`, await this.prisma.products.delete({ where: { product_UUID: uuid } })).toJSON();
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsService);
//# sourceMappingURL=products.service.js.map