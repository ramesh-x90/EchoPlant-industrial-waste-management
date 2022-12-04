import { Injectable , Get} from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  readonly prismaService : PrismaService;
  constructor(prisma : PrismaService){
    this.prismaService = prisma;

  }

  async getHello(): Promise<any> {
    const user = await this.prismaService.user.findFirst();
    return user;
  }
}
