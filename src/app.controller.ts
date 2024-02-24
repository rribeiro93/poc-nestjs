import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('withBody')
  endpointWhthBody(@Body() body: any): string {
    return `body: ${JSON.stringify(body)}`
  }

  @Post('withParam')
  endpointWhthParam(@Param() id: number): string {
    return `param: ${id}`
  }

}
