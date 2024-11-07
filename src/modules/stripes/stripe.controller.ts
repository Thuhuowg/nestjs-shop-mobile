import { Controller, Post, Body } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller('api/stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post('create-payment-intent')
  async createPaymentIntent(@Body() body: { amount: number; currency: string }) {
    const { amount, currency } = body;
    try {
      const paymentIntent = await this.stripeService.createPaymentIntent(amount);
      return { clientSecret: paymentIntent.clientSecret };
    } catch (error) {
      return { error: 'PaymentIntent creation failed' };
    }
    return await this.stripeService.createPaymentIntent(amount);
  }
}
