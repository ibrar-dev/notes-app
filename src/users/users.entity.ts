import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullName: string;

  @Column({unique: true})
  username: string;

  @Column({unique: true})
  email: string;

  @Column({nullable:true})
  profilePicture: string |null;

  @Column({default: false})
  kycVerified: boolean;

  @Column()
  dob: Date;

  @Column({
    type: "enum",
    enum: ["pending", "active", "blocked"],
    default: 'pending',
  })
  status: "pending"| "active"| "blocked";

  @Column({select: false})
  password: string;


}