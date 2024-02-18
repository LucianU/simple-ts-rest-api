import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  companies(): string {
      return "/companies not implemented";
  }

  stations(): string {
      return "/stations not implemented";
  }

}
