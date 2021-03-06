import { ApiProperty } from '@nestjs/swagger'
import { UserRole } from '@prisma/client'
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  MinLength,
} from 'class-validator'

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  firstName!: string

  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  lastName!: string

  @ApiProperty()
  @IsEmail()
  email!: string

  @IsEnum(UserRole)
  @IsOptional()
  @ApiProperty({ required: false, default: UserRole.TECHNICIAN })
  role?: UserRole
}
