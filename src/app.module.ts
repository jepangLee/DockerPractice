import { Module } from '@nestjs/common';
import { User, UserModule } from '@app/user';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRootAsync({
      useFactory() {
        return {
          type: 'mariadb',
          host: 'localhost',
          port: 3306,
          username: 'user',
          password: 'password',
          database: 'test',
          entities: [User],
          synchronize: true,
        };
      },
    })],
})

export class AppModule {
}
