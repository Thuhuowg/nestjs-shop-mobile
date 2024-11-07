import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor() {
    this.stripe = new Stripe('sk_test_51QI49MB4kZXP77p9zDQDaJI5bR2aZtjUWQgPmFUXqodl5TEv2rVoJYQDGckQWtLZhTo4rAeHaPF5gRrBzKApBPDR00rUSPcv0i', { apiVersion: '2024-10-28.acacia' });  // Thay thế với khóa bí mật của bạn
  }

  // Hàm tạo PaymentIntent
  
      async createPaymentIntent(amount: number) {
        try {
          // Tạo PaymentIntent mà không cần payment_method ban đầu
          const paymentIntent = await this.stripe.paymentIntents.create({
            amount: amount,  // Số tiền (đã nhân với 100 nếu là VND)
            currency: 'vnd', // Hoặc sử dụng 'usd' nếu cần
            automatic_payment_methods: { enabled: true },  // Bật chế độ tự động cho các phương thức thanh toán
          });
    
          return { clientSecret: paymentIntent.client_secret };  // Trả về client secret cho frontend
        } catch (error) {
          console.error('Error creating PaymentIntent:', error);
          throw new Error('PaymentIntent creation failed');
        }
      
  }
}
