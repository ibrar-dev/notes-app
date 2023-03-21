import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Experience } from './experience.entity';

@Entity('projects')
export class Projects {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({nullable:true})
    usedSkills: string;
    @Column({nullable:true})
    projectName: string;
    @Column({nullable:true})
    teamSize: string;
    @ManyToOne(() => Experience, (user) => user.projects)
    res: Experience;
}





