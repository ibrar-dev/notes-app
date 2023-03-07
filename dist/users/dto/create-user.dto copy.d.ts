export declare class CreateUserDto {
    fullName: string;
    username: string;
    email: string;
    profilePicture: string | null;
    kycVerified: boolean;
    dob: Date;
    status: "pending" | "active" | "blocked";
    password: string;
}
export declare class SampleDto {
    name: string;
}
