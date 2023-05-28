import { PartialType } from '@nestjs/mapped-types'
import { CreateUserDto } from './create-user.dto'
import { ApiProperty } from '@nestjs/swagger'

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ example: 'user@gmail.com', description: 'Email address' })
  readonly email: string
  @ApiProperty({ example: '12345678', description: 'Password' })
  readonly password: string
}
