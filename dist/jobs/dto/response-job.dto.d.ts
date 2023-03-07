import { CreateJobDto } from './create-job.dto';
declare const JobsResponse_base: import("@nestjs/mapped-types").MappedType<Partial<CreateJobDto>>;
export declare class JobsResponse extends JobsResponse_base {
    "page": number;
    "limit": number;
    "total": number;
    "result": [];
}
export {};
