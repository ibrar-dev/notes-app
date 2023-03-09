import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Resume } from './resume.entity';

@Entity('skills')
export class Skills {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    type: string;
    @Column()
    skill: string;
    @Column()
    ontology: string;
    @Column()
    alias: string;
    @Column()
    formattedName: string;
    @Column()
    evidence: string;
    @Column()
    lastUsed: string;
    @Column()
    experienceInMonths: number;

    @ManyToOne(() => Resume, (user) => user.skills)
    res: Resume;
}






