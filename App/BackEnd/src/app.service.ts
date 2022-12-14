import { Injectable, Get } from '@nestjs/common';
import { PrismaService } from './common/prisma-module/prisma.service';

@Injectable()
export class AppService {
  readonly prismaService: PrismaService;
  constructor(prisma: PrismaService) {
    this.prismaService = prisma;

  }
}
