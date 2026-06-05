import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasicAuthModule } from './basic-auth/basic-auth.module';
import { OidcModule } from './oidc/oidc.module';
import { OauthModule } from './oauth/oauth.module';
import { JwtModule } from './jwt/jwt.module';
import { ApiKeyModule } from './api-key/api-key.module';

@Module({
  imports: [BasicAuthModule, ApiKeyModule, JwtModule, OauthModule, OidcModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
