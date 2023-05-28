import { Module } from '@nestjs/common'
import { RolesService } from './roles.service'
import { RolesController } from './roles.controller'
import { SequelizeModule } from '@nestjs/sequelize'
import { Role } from './entities/role.entity'
import { User } from '../users/entities/user.entity'
import { UserRole } from './entities/user-role.entity'

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [SequelizeModule.forFeature([Role, User, UserRole])],
  exports: [RolesService],
})
export class RolesModule {}
