import { Module } from '@nestjs/common';
import { User, UserModule } from '@app/user';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRootAsync({
      useFactory() {
        return {
          type: 'mysql',
          host: 'localhost',
          port: 3800,
          username: 'public',
          password: 'qlalfqjsgh1!',
          database: 'test',
          entities: [User],
          synchronize: true,
        };
      },
    })],
})

export class AppModule {
}
