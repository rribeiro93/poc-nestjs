import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
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

  @Post('aporte')
  async insertDocument(@Body() body: { tipo: string, valor: number, data: string }) {
    return await this.appService.insertDocument(body);
  }

  @Get('aportes')
  async findDocuments() {
    return await this.appService.findAllDocuments();
  }

  @Delete('aporte')
  async removeDocument(@Body() body: { id: string }) {
    return await this.appService.removeDocument(body.id);
  }
}
