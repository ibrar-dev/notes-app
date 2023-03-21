import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Experience } from './experience.entity';
import { Resume } from './resume.entity';

@Entity('relatedskills')
export class RelatedSkills {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({nullable:true})
    skill: string;
    @Column({nullable:true})
    proficiencyLevel: string;
    @ManyToOne(() => Experience, (user) => user.relatedSkills)
    res: Experience;
}





