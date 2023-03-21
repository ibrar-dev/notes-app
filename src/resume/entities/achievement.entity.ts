import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Resume } from './resume.entity';

@Entity('achievement')
export class Achievement {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({nullable:true})
    awardTitle: string;
    @Column({nullable:true})
    issuer: string;
    @Column({nullable:true})
    associatedWith: string;
    @Column({nullable:true})
    issuingDate: string;
    @Column({nullable:true})
    description: string;
    @ManyToOne(() => Resume, (user) => user.achievements)
    res: Resume;
}




