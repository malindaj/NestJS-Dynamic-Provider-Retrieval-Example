import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ProviderC } from './provider-c.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly providerC: ProviderC,
  ) {}

  @Get()
  async getHello() {
    return await this.providerC.useProviders();
  }
}
