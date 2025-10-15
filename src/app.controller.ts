import { Controller, Get, Req } from '@nestjs/common';
import type { Request } from 'express'; // Assuming you are using Express as the HTTP adapter

@Controller()
export class AppController {
  @Get('origin')
  getOrigin(@Req() req: Request): string {
    const origin = req.get('Origin'); // Get the 'Origin' header

    console.log('Request Origin:', origin);
    return `The request origin is: ${origin || 'Not provided'}`;
  }
}
