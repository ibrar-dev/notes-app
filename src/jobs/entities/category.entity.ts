import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Job } from './jobs.entity';

@Entity('job_category')
export class JobCategory {
    @PrimaryGeneratedColumn('increment')
    id: string;
    @Column({ nullable: false, unique: true })
    title: string;
    @Column({ nullable: false, unique: true })
    order: number;

    @OneToMany(() => Job, (ph) => ph.job_category, { cascade: true })
    jobs: Job[]
}