export declare class User {
    id: string;
    fullName: string;
    username: string;
    email: string;
    profilePicture: string | null;
    status: "pending" | "active" | "blocked";
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
