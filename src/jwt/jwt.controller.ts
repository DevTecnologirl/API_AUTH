import {
  Body,
  Controller,
  Get,
  Headers,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { JwtAuthService } from './jwt.service';

@ApiTags('JWT')
@Controller('jwt')
export class JwtController {
  constructor(private readonly jwtAuthService: JwtAuthService) {}

  @Post('login')
  login(@Body() body: LoginDto) {
    return this.jwtAuthService.login(body.email, body.password);
  }

  @Get('profile')
  @ApiBearerAuth()
  getProfile(@Headers('authorization') authorization: string) {
    if (!authorization) {
      throw new UnauthorizedException('Token não enviado');
    }

    const [type, token] = authorization.split(' ');

    if (type !== 'Bearer') {
      throw new UnauthorizedException('Formato inválido');
    }

    const user = this.jwtAuthService.validateToken(token);

    return {
      message: 'Acesso permitido com JWT',
      user,
    };
  }
}