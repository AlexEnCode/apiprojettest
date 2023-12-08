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
exports.CreateOrderDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateOrderDto {
}
exports.CreateOrderDto = CreateOrderDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'This field represents order number',
        minLength: 1,
        maxLength: 50,
    }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "order_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'This field represents order total cost ht',
        minLength: 1,
        maxLength: 50,
    }),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "order_total_cost_ht", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'This field represents order total quantity',
        minLength: 1,
        maxLength: 50,
    }),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateOrderDto.prototype, "order_total_quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'This field represents order created at',
        minLength: 1,
        maxLength: 20,
    }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateOrderDto.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'This field represents deliver at',
        minLength: 1,
        maxLength: 20,
    }),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateOrderDto.prototype, "deliver_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'This field represents User UUID',
    }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.Length)(36, 36),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "user_UUID", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'This field represents products',
        minLength: 1,
        maxLength: 50,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 50),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "Products", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'This field represents the product UUID',
    }),
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.Length)(36, 36),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "product_UUID", void 0);
//# sourceMappingURL=create-order.dto.js.map