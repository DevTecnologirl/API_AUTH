import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService as NestJwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthService {
  constructor(private readonly jwtService: NestJwtService) {}

  login(email: string, password: string) {
    if (email !== 'camilly@email.com' || password !== '123456') {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const payload = {
      sub: 1,
      email,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  validateToken(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch {
      throw new UnauthorizedException('Token inválido ou expirado');
    }
  }
}