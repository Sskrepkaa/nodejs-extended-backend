import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData() {
    return [{id:2, name:"max"}];
  }
}
