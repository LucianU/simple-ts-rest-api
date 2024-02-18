import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/companies")
  companies(): string {
    return this.appService.companies();
  }

  @Get("/stations")
  stations(): string {
    return this.appService.stations();
  }
}
