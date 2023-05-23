export declare class CreateUserDto {
    fullName: string;
    username: string;
    email: string;
    profilePicture: string | null;
    status: "pending" | "active" | "blocked";
    password: string;
    roles: any;
}
export declare class SampleDto {
    name: string;
    id: string;
}
