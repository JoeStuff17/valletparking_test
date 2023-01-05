
import { Controller, Request, Get } from '@nestjs/common';


@Controller()
export class AppController {
  constructor() {}


  @Get()
  login(@Request() req): any {
    return 'Hello';
  }
}
