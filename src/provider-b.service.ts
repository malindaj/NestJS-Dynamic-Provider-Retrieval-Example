// provider-b.service.ts
import { Injectable } from '@nestjs/common';
import { CustomDecorator } from './custom-decorator';

@Injectable()
@CustomDecorator('ProviderB')
export class ProviderB {
  sayHello(): string {
    return 'Hello from ProviderB';
  }
}
