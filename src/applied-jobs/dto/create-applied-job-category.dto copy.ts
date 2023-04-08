import { ApiProperty } from "@nestjs/swagger";

export class CreateAppliedJobCategoryDto {
    @ApiProperty({ type: 'string', example: 'Blockchain' })
    title: string;
    @ApiProperty({ type: 'number', example: 1 })
    order: number;
}


