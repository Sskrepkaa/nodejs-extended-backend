import { ApiProperty } from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'user@mail.com', description: 'email'})
    @IsString({message: 'Must be string'})
    @IsEmail({}, {message: "Invalid email"})
    readonly email: string;
    @ApiProperty({example: '123', description: 'password'})
    @IsString({message: 'Must be string'})
    @Length(4, 16, {message: 'Min 4 and max 16'})
    readonly password: string;
}