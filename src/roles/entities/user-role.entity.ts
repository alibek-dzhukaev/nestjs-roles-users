import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript'
import { Role } from './role.entity'
import { User } from '../../users/entities/user.entity'

@Table({ tableName: 'user_role', createdAt: false, updatedAt: false })
export class UserRole extends Model<UserRole> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number

  @ForeignKey(() => Role)
  @Column({ type: DataType.STRING })
  roleId: Number

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number
}
