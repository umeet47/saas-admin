import { Controller, Get, Req } from '@nestjs/common';
import type { Request } from 'express'; // Assuming you are using Express as the HTTP adapter

@Controller()
export class AppController {
  @Get('origin')
  getOrigin(@Req() req: Request): string {
    console.info(req.headers.host);
    const origin = req.headers.host;
    console.log('Request Origin:', origin);
    return `The request origin is: ${origin || 'Not provided'}`;
  }
}
