import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/auth/auth.controller';
import { AuthService } from 'src/auth/auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UsersService } from 'src/services/users/users.service';
import config from 'src/config';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: config.jwt.secretOrKey,
            signOptions: { expiresIn: config.jwt.expiresIn },
        }),
    ],
    providers: [AuthService, JwtStrategy, UsersService],
    controllers: [AuthController],
    exports: [PassportModule, AuthService, JwtModule]
})
export class AuthModule {}
