import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { CreateUserDto } from '../users/dto/create-user.dto'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'
import { User } from '../users/entities/user.entity'
import argon2 from 'argon2'

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(createUserDto: CreateUserDto) {}

  async registration(createUserDto: CreateUserDto) {
    const candidate = await this.userService.getUserByEmail(createUserDto.email)
    console.log(candidate)
    if (candidate) {
      throw new HttpException('Email is already used', HttpStatus.BAD_REQUEST)
    }
    const hashPassword = await argon2.hash(createUserDto.password)
    const user = await this.userService.create({
      ...createUserDto,
      password: hashPassword,
    })
    return this.generateToken(user)
  }

  async generateToken(user: User) {
    const payload = { email: user.email, id: user.id, roles: user.roles }
    return { token: this.jwtService.sign(payload) }
  }
}
