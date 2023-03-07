import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Language } from "../../languages/entities/language.entity";
import { Address } from './address.entity';
import { Email } from './email.entity';
import { Phone } from './phone.entity';
import { Salary } from './salary.entity';
import { Website } from './website.entity';

@Entity('resumes')
export class Resume {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    resumeFileName: string;

    // @OneToMany(() => Language, (photo) => photo.res, { eager: true, cascade: true })
    // languages: Language[]
    @ManyToMany(() => Language, (category) => category.title, {
        cascade: true,
    })
    @JoinTable()
    languages: Language[];

    @OneToMany(() => Phone, (ph) => ph.res, { eager: true, cascade: true })
    phone: Phone[]

    @OneToMany(() => Email, (ph) => ph.res, { eager: true, cascade: true })
    email: Email[]

    @OneToMany(() => Website, (ph) => ph.res, { eager: true, cascade: true })
    website: Website[]

    @OneToOne(() => Salary, { eager: true, cascade: true })
    @JoinColumn()
    currentSalary: Salary[]

    @OneToOne(() => Salary, { eager: true, cascade: true })
    @JoinColumn()
    expectedSalary: Salary[]


    @OneToMany(() => Address, (ph) => ph.res, { eager: true, cascade: true })
    address: Address[]
    



}