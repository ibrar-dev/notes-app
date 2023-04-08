import { ApiProperty } from "@nestjs/swagger";

export class CreateAppliedJobDto {
    @ApiProperty({ type: 'string', example: 'Blockchain' })
    title: string;
    @ApiProperty({

        "type": "object",
        "properties": {
            "title": {
                "type": "string"
            },
            "order": {
                "type": "integer",
                "format": "int32"
            }
        }

    })
    category: { title: string, order: number };
}


