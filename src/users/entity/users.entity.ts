import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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

  @Column({
    type: "enum",
    enum: ["pending", "active", "blocked"],
    default: 'pending',
  })
  status: "pending"| "active"| "blocked";

  @Column({select: false})
  password: string;
  
  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updatedAt: Date;


}