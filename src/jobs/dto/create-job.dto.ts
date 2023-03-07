import { ApiProperty } from '@nestjs/swagger';

// export class CreateTourDto {
//     @ApiProperty()
//     title: string;
//     @ApiProperty()
//     slug: string;
//     @ApiProperty()
//     price: number;
//     @ApiProperty({ enum: ['ACTIVE', 'DISABLE'] })
//     status: 'ACTIVE' | 'DISABLE';
//     @ApiProperty()
//     overview: string;
//     @ApiProperty({
//         type: 'array',
//         items: {
//             type: 'object',
//             properties: {
//                 itemList:
//                     { type: 'string' },
//                 status:
//                     { type: 'boolean' },
//                 order:
//                     { type: 'number' },
//             }
//         },
//     })
//     overviewList?: [{ itemList: string; status: boolean, order: number }];
//     @ApiProperty()
//     description: string;
//     @ApiProperty({
//         type: 'array',
//         items: {
//             type: 'object',
//             properties: {
//                 title:
//                     { type: 'string' },
//                 status:
//                     { type: 'boolean' },
//                 order:
//                     { type: 'number' },
//             }
//         },
//     })
//     includedItems?: [{ title: string; status: boolean, order: number }];
//     @ApiProperty({
//         type: 'array',
//         items: {
//             type: 'object',
//             properties: {
//                 url:
//                     { type: 'string' },
//                 thumbnailUrl:
//                     { type: 'string' },
//                 status:
//                     { type: 'boolean' },
//                 order:
//                     { type: 'number' },
//             }
//         },
//     })
//     images?: [{ url: string; thumbnailUrl: string; status: boolean, order: number, type: 'IMAGE' | 'VIDEO' }];
//     @ApiProperty()
//     note: string;
//     @ApiProperty({
//         type: 'array',
//         items: {
//             type: 'object',
//             properties: {
//                 title:
//                     { type: 'string' },
//                 status:
//                     { type: 'boolean' },
//                 order:
//                     { type: 'number' },
//             }
//         },
//     })
//     noteItems?: [{ title: string; status: boolean, order: number }];
//     @ApiProperty()
//     reasonToChooseUs: string;
//     @ApiProperty({
//         type: 'array',
//         items: {
//             type: 'object',
//             properties: {
//                 title:
//                     { type: 'string' },
//                 status:
//                     { type: 'boolean' },
//                 address:
//                     { type: 'string' },
//                 googleCoords:
//                     { type: 'string' },
//                 note:
//                     { type: 'string' },
//                 time:
//                     { type: 'string' },
//             }
//         },
//     })
//     meeting?: [
//         {
//             title: string;
//             status: boolean;
//             address: string;
//             googleCoords: string;
//             note: string;
//             time: string;
//         },
//     ];
//     @ApiProperty()
//     shortDescription: string;
//     @ApiProperty()
//     thumbnailImage: string;
//     @ApiProperty()
//     createdAt: Date;
// }







export class CreateJobDto {
    @ApiProperty({type:'string'})
    title: string | any;
    @ApiProperty({type:'string'})
    companyName: string | any;
    @ApiProperty({type:'string'})
    location: string | any;
    @ApiProperty({type:'string'})
    via: string | any;
    @ApiProperty({type:'string'})
    description: string | any;
    @ApiProperty({type:'string'})
    thumbnail: string | any;
    @ApiProperty({type:'string'})
    applyLink: string | any;
    @ApiProperty({type:'string'})
    postedAt: string | any;
    @ApiProperty({type:'string'})
    scheduleType: string | any;
    @ApiProperty({
        type: 'array',
        items: {
            type: 'string',
            example: ["str1", "str2", "str3"]

        },
    })
    responsibilities: any;
    @ApiProperty({
        type: 'array',
        items: {
            type: 'string',
            example: ["str1", "str2", "str3"]
        },
    })
    qualifications: any;
    @ApiProperty({type:'string'})
    workFromHome: boolean;
    @ApiProperty({type:'string'})
    salary: string | any;
    @ApiProperty({type:'string'})
    applyLinkTitle: string | any;
    @ApiProperty({type:'string'})
    category:string;

}