import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Resume } from './resume.entity';

@Entity('achievement')
export class Achievement {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    awardTitle: string;
    @Column()
    issuer: string;
    @Column()
    associatedWith: string;
    @Column()
    issuingDate: string;
    @Column()
    description: string;
    @ManyToOne(() => Resume, (user) => user.achievements)
    res: Resume;
}




