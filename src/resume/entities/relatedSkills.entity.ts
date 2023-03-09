import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Experience } from './experience.entity';
import { Resume } from './resume.entity';

@Entity('relatedskills')
export class RelatedSkills {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    skill: string;
    @Column()
    proficiencyLevel: string;
    @ManyToOne(() => Experience, (user) => user.relatedSkills)
    res: Experience;
}





