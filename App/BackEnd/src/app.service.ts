import { Injectable, Get } from '@nestjs/common';
import { PrismaService } from './common/prisma-module/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {

  }
}
