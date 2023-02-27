import { PartialType } from '@nestjs/mapped-types';
import { CreateJobDto } from './create-job.dto';
import { ApiProperty } from '@nestjs/swagger';

export class JobsResponse extends PartialType(CreateJobDto) {
    @ApiProperty({ type: 'number',example:'number' })
    "page": number;
    @ApiProperty({ type: 'number' ,example:'number'})
    "limit": number;
    @ApiProperty({ type: 'number',example:'number' })
    "total": number;
    @ApiProperty({
        type: 'array',
        items: {
            type:'array',
            example:{
                _id:"id",
                title: "string",
                companyName: "string",
                location: "string" ,
                via: "string" ,
                description: "string" ,
                thumbnail: "string" ,
                applyLink: "string" ,
                postedAt: "string" ,
                scheduleType: "string" ,
                responsibilities: ["str1","str2"],
                qualifications:  ["str1","str2"],
                workFromHome: true,
                salary: "string" ,
                applyLinkTitle: "string" ,
            }

        },
    })
    "result": []
}
