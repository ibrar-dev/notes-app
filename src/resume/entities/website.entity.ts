import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Resume } from './resume.entity';

@Entity('website')
export class Website {
    @PrimaryGeneratedColumn('increment')
    id: string;
    @Column()
    url: string;
    @Column()
    type: string;

    @ManyToOne(() => Resume, (res) => res.website)
    res: Resume;
}