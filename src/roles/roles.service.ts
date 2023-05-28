import { Injectable } from '@nestjs/common'
import { CreateRoleDto } from './dto/create-role.dto'
import { InjectModel } from '@nestjs/sequelize'
import { Role } from './entities/role.entity'

@Injectable()
export class RolesService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}
  async createRole(createRoleDto: CreateRoleDto) {
    return await this.roleRepository.create(createRoleDto)
  }
  async getRoleByValue(value: string) {
    return await this.roleRepository.findOne({ where: { value } })
  }
}
