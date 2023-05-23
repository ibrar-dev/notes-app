import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ type: 'string', example: 'string' })
  fullName: string;
  @ApiProperty({ type: 'string', example: 'string' })
  username: string;
  @ApiProperty({ type: 'string', example: 'string' })
  email: string;
  @ApiProperty({ type: 'string', example: 'string' })
  profilePicture: string|null;
  @ApiProperty({ type: 'string', example: 'string' })
  status: "pending" | "active" | "blocked";
  @ApiProperty({ type: 'string', example: 'string' })
  password: string;
  
  @ApiProperty({
    type: 'array',
    items: {
        type: 'string',
        example: [ "Employee", "Candidate"]
    },
})
roles: any;
}


export class SampleDto {
  name: string;
  id:string;
}
