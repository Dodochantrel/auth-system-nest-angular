import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { JwtStrategy } from './guards/jwt.strategy';

@Module({
  imports: [AuthModule, DatabaseModule, UserModule, ConfigModule.forRoot({ isGlobal: true }), AdminModule],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
