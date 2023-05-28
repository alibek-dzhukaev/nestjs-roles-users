import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript'
import { ApiProperty } from '@nestjs/swagger'
import { User } from '../../users/entities/user.entity'
import { UserRole } from './user-role.entity'

interface RoleCreationAttrs {
  value: string
  description: string
}

@Table({ tableName: 'roles' })
export class Role extends Model<Role, RoleCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @ApiProperty({ example: 'ADMIN', description: 'Unique role identity' })
  @Column({ type: DataType.STRING, unique: true, allowNull: null })
  value: string

  @ApiProperty({ example: 'Admin', description: 'Description of the role' })
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  description: string

  @BelongsToMany(() => User, () => UserRole)
  users: User[]
}
