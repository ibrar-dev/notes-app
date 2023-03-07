import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Resume } from './resume.entity';

@Entity('email')
export class Email {
    @PrimaryGeneratedColumn('increment')
    id: string;
    @Column()
    email: string;
    @Column()
    confidenceScore: number;

    @ManyToOne(() => Resume, (user) => user.email)
    res: Resume;
}