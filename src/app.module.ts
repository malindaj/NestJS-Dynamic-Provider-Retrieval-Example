import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProviderA } from './provider-a.service';
import { ProviderB } from './provider-b.service';
import { ProviderC } from './provider-c.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ProviderA, ProviderB, ProviderC],
  exports: [ProviderA, ProviderB, ProviderC],
})
export class AppModule {}
