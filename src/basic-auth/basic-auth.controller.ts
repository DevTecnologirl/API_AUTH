import {
  Controller,
  Get,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiBasicAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Basic Auth')
@Controller('basic-auth')
export class BasicAuthController {
  @Get('profile')
  @ApiBasicAuth()
  getProfile(@Headers('authorization') authorization: string) {
    if (!authorization) {
      throw new UnauthorizedException('Authorization header não enviado');
    }

    const [type, token] = authorization.split(' ');

    if (type !== 'Basic') {
      throw new UnauthorizedException('Tipo de autenticação inválido');
    }

    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const [username, password] = decoded.split(':');

    if (username !== 'admin' || password !== '123456') {
      throw new UnauthorizedException('Usuário ou senha inválidos');
    }

    return {
      message: 'Acesso permitido com Basic Auth',
      user: {
        username,
      },
    };
  }
}