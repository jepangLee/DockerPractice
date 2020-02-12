import { Module } from '@nestjs/common';
import { UserModule } from '@app/user';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot()],
})

export class AppModule {
}
