export class CreateUserDto {
  fullName: string;
  username: string;
  email: string;
  profilePicture: string|null;
  kycVerified: boolean;
  dob: Date;
  status: "pending" | "active" | "blocked";
  password: string;

}


export class SampleDto {
  name: string;
  id:string;
}
