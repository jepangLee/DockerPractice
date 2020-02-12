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
          port: 3307,
          username: 'root',
          password: 'test',
          database: 'test',
          entities: [User],
          synchronize: true,
        };
      },
    })],
})

export class AppModule {
}
