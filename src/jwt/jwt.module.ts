import { Module } from '@nestjs/common';
import { JwtModule as NestJwtModule } from '@nestjs/jwt';
import { JwtController } from './jwt.controller';
import { JwtAuthService } from './jwt.service';

@Module({
  imports: [
    NestJwtModule.register({
      secret: 'jwt-secret-dev',
      signOptions: {
        expiresIn: '15m',
      },
    }),
  ],
  controllers: [JwtController],
  providers: [JwtAuthService],
})
export class JwtModule {}