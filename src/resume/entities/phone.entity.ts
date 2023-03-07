import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Resume } from './resume.entity';

@Entity('phone')
export class Phone {
    @PrimaryGeneratedColumn('increment')
    id: string;
    @Column()
    phoneNumber: string;
    @Column()
    ISDCode: string;
    @Column()
    originalNumber: string;
    @Column()
    formattedNumber: string;
    @Column()
    type: string;
    @Column()
    confidenceScore: number;

    @ManyToOne(() => Resume, (user) => user.phone)
    res: Resume;
}