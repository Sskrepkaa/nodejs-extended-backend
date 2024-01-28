import { ApiProperty } from "@nestjs/swagger";
import {Column, DataType, Model, Table} from "sequelize-typescript"

interface UserCreatingAttr {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreatingAttr> {

    @ApiProperty({example: '1', description: 'id'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'user@mail.com', description: 'email'})
    @Column({type: DataType.STRING, unique: true, allowNull:false})
    email: string;

    @ApiProperty({example: '12345678', description: 'password'})
    @Column({type: DataType.STRING, allowNull:false})
    password: string;

    @ApiProperty({example: 'false', description: 'banned or not'})
    @Column({type: DataType.BOOLEAN, defaultValue:false})
    banned: boolean;

    @ApiProperty({example: 'string', description: 'banned for'})
    @Column({type: DataType.STRING, allowNull:true})
    banReason: string;

}