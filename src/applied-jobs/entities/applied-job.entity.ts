import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CreateDateColumn, UpdateDateColumn } from "typeorm";
import { AppliedJobCategory } from './category.entity';


@Entity('appliedjob')
export class AppliedJob {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({ nullable: true })
    title: string;

    @ManyToOne(() => AppliedJobCategory, (apJob) => apJob.jobs)
    category: AppliedJobCategory;
}



  