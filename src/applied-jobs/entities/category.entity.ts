import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AppliedJob } from './applied-job.entity';

@Entity('appliedjobcategory')
export class AppliedJobCategory {
    @PrimaryGeneratedColumn('increment')
    id: string;
    @Column({ nullable: false, unique: true })
    title: string;
    @Column({ nullable: false, unique: true })
    order: number;

    @OneToMany(() => AppliedJob, (ph) => ph.category, { cascade: true })
    jobs: AppliedJob[]
}