// custom-decorator.ts
import { SetMetadata } from '@nestjs/common';

export const CustomDecorator = (token: string) =>
  SetMetadata('customToken', token);
