import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { ProviderA } from './provider-a.service';
import { ProviderB } from './provider-b.service';

@Injectable()
export class ProviderC {
  constructor(private moduleRef: ModuleRef) {}

  async useProviders() {
    const providerA = this.moduleRef.get<ProviderA>(ProviderA, {
      strict: false,
    });
    const providerB = this.moduleRef.get<ProviderB>(ProviderB, {
      strict: false,
    });

    console.log(providerA?.sayHello());
    console.log(providerB?.sayHello());

    return {
      providerA: providerA?.sayHello(),
      providerB: providerB?.sayHello(),
    };
  }
}
