import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Resume } from './resume.entity';

@Entity('phone')
export class Phone {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({nullable:true})
    phoneNumber: string;
    @Column({nullable:true})
    ISDCode: string;
    @Column({nullable:true})
    originalNumber: string;
    @Column({nullable:true})
    formattedNumber: string;
    @Column({nullable:true})
    type: string;
    @Column({nullable:true})
    confidenceScore: number;

    // @ManyToOne(() => Resume, (user) => user.phone)
    // res: Resume;
}