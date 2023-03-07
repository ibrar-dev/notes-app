export declare class User {
    id: string;
    fullName: string;
    username: string;
    email: string;
    profilePicture: string | null;
    kycVerified: boolean;
    dob: Date;
    status: "pending" | "active" | "blocked";
    password: string;
}
