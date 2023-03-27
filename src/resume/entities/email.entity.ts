import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Resume } from './resume.entity';

@Entity('email')
export class Email {
    @PrimaryGeneratedColumn('increment')
    id: string;
    @Column({nullable:true})
    email: string;
    @Column({nullable:true})
    confidenceScore: number;

    // @ManyToOne(() => Resume, (user) => user.email)
    // res: Resume;
}