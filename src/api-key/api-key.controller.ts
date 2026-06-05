import {
  Controller,
  Get,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';

@ApiTags('API Key')
@Controller('api-key')
export class ApiKeyController {
  private readonly validApiKey = 'minha-chave-secreta';

  @Get('private')
  @ApiSecurity('api-key')
  getPrivateData(@Headers('x-api-key') apiKey: string) {
    if (apiKey !== this.validApiKey) {
      throw new UnauthorizedException('API Key inválida');
    }

    return {
      message: 'Acesso permitido com API Key',
      data: {
        plan: 'premium',
        limit: 1000,
      },
    };
  }

  @Get('public')
  getPublicData() {
    return {
      message: 'Rota pública sem autenticação',
    };
  }
}