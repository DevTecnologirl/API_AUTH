import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('OpenID Connect')
@Controller('oidc')
export class OidcController {
  @Get('login')
  login() {
    return {
      message: 'Simulação de login com OpenID Connect',
      nextStep: '/oidc/callback?code=xyz789',
    };
  }

  @Get('callback')
  callback(@Query('code') code: string) {
    return {
      message: 'Código recebido do provedor OIDC',
      code,
      idToken: {
        sub: 'user-123',
        email: 'camilly@email.com',
        name: 'Camilly',
      },
      accessToken: 'oidc-access-token-fake',
    };
  }

  @Get('me')
  me() {
    return {
      sub: 'user-123',
      email: 'camilly@email.com',
      name: 'Camilly',
    };
  }
}