import { Module } from '@nestjs/common'
import { UserModule } from './users'
import { PrismaModule } from '../prisma/prisma.module'

@Module({
  imports: [PrismaModule, UserModule],
})
export class AppModule {}
