import { Controller, InternalServerErrorException, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
  }

  @Post()
  private async signUp() {
    try {
      await this.userService.signUp();
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }
}
