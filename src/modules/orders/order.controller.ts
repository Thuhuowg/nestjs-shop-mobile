import { BadRequestException, Body, Controller, Get, HttpCode, HttpException, HttpStatus, Param, Post, UploadedFile, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { OrderService } from "./order.service";
import { CreateOrderByGuest } from "src/dto/CreateOrderByGuest";

@Controller('orders')
export class OrderController {
  constructor(
    private readonly orderService: OrderService
  ) { }

  

  @HttpCode(HttpStatus.OK)
  @Post('create')
  async createProduct(@Body() createOrder: CreateOrderByGuest) {

    try {

      if (createOrder === null) {
        return 'loi r'
      } else {
        console.log('------productData-----', createOrder)
        const data = await this.orderService.createOrder(createOrder);
        console.log('------data-----', data)
        return {

          message: 'Order created successfully',
          data
        };
      }

    } catch (error) {
      console.error('Error creating order:', error);
      throw new HttpException('Không thể tạo order', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  @HttpCode(HttpStatus.OK)
  @Get(':order_code')
  async getOrder(@Param('order_code') order_code: string) {

    try {

     return this.orderService.getOrder(order_code)

    } catch (error) {
      console.error('Error get order:', error);
      throw new HttpException('Không thể lấy order', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  

}
