import { Module } from '@nestjs/common';
import { BasicAuthController } from './basic-auth.controller';
import { BasicAuthService } from './basic-auth.service';

@Module({
  controllers: [BasicAuthController],
  providers: [BasicAuthService]
})
export class BasicAuthModule {}
