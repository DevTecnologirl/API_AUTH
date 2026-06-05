import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('OAuth 2.0')
@Controller('oauth')
export class OauthController {
  @Get('authorize')
  authorize() {
    return {
      message: 'Simulação da tela de autorização OAuth 2.0',
      nextStep: '/oauth/callback?code=abc123',
    };
  }

  @Get('callback')
  callback(@Query('code') code: string) {
    return {
      message: 'Authorization code recebido',
      code,
      accessToken: 'oauth-access-token-fake',
      refreshToken: 'oauth-refresh-token-fake',
    };
  }

  @Get('resource')
  getResource() {
    return {
      message: 'Recurso acessado usando access token OAuth 2.0',
    };
  }
}