// provider-a.service.ts
import { Injectable } from '@nestjs/common';
import { CustomDecorator } from './custom-decorator';

@Injectable()
@CustomDecorator('ProviderA')
export class ProviderA {
  sayHello(): string {
    return 'Hello from ProviderA';
  }
}
