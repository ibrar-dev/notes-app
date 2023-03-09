import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Language } from "../../languages/entities/language.entity";
import { Address } from './address.entity';
import { Certification } from './certifications.entity';
import { Email } from './email.entity';
import { Experience } from './experience.entity';
import { Phone } from './phone.entity';
import { Publication } from './publications.entity';
import { ResumeQualification } from './resumeQualification.entity';
import { Salary } from './salary.entity';
import { Skills } from './skills.entity';
import { Website } from './website.entity';
import { Location } from './location.entity';
import { Achievement } from './achievement.entity';

@Entity('resumes')
export class Resume {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    resumeFileName: string;
    @Column()
    resumeLanguage: string;
    @Column()
    resumeLanguageCode: string;
    @Column()
    parsingDate: string;
    @Column()
    fullName: string;
    @Column()
    titleName: string;
    @Column()
    firstName: string;
    @Column()
    middleName: string;
    @Column()
    lastName: string;
    @Column()
    formattedName: string;
    @Column()
    nameScore: number;
    @Column()
    dateOfBirth: string;
    @Column()
    gender: string;
    @Column()
    fatherName: string;
    @Column()
    motherName: string;
    @Column()
    maritalStatus: string;
    @Column()
    nationality: string;
    @Column()
    uniqueId: string;
    @Column()
    licenseNo: string;
    @Column()
    passportNumber: string;
    @Column()
    dateOfExpiry: string;
    @Column()
    dateOfIssue: string;
    @Column()
    placeOfIssue: string;
    @Column()
    panNo: string;
    @Column()
    visaStatus: string;
    @Column()
    category: string;
    @Column()
    subCategory: string;
    @Column()
    qualification: string;
    @Column()
    certificationText: string;
    @Column()
    skillBlock: string;
    @Column()
    skillKeywords: string;
    @Column()
    experienceText: string;
    @Column()
    currentEmployer: string;
    @Column()
    jobProfile: string;
    @Column()
    workedPeriodTotalExperienceInMonths: string;
    @Column()
    workedPeriodTotalExperienceInYear: string;
    @Column()
    workedPeriodTotalExperienceRange: string;
    @Column()
    gapPeriod: string;
    @Column()
    averageStay: string;
    @Column()
    longestStay: string;
    @Column()
    summary: string;
    @Column()
    executiveSummary: string;
    @Column()
    managementSummary: string;
    @Column()
    coverLetter: string;
    @Column()
    publication: string;
    @Column()
    availability: string;
    @Column()
    hobbies: string;
    @Column()
    objectives: string;
    @Column()
    achievement: string;
    @Column()
    references: string;
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

    @OneToMany(() => ResumeQualification, (ph) => ph.res, { eager: true, cascade: true })
    qualifications: ResumeQualification[]

    @OneToMany(() => Certification, (ph) => ph.res, { eager: true, cascade: true })
    certification: Certification[]


    @OneToMany(() => Skills, (ph) => ph.res, { eager: true, cascade: true })
    skills: Skills[]

    @OneToMany(() => Experience, (ph) => ph.res, { eager: true, cascade: true })
    experience: Experience[]

    @OneToMany(() => Publication, (ph) => ph.res, { eager: true, cascade: true })
    publications: Publication[]

    @OneToMany(() => Location, (ph) => ph.res1, { eager: true, cascade: true })
    currentLocation: Location[]

    @OneToMany(() => Location, (ph) => ph.res, { eager: true, cascade: true })
    preferredLocation: Location[]


    @OneToMany(() => Achievement, (ph) => ph.res, { eager: true, cascade: true })
    achievements: Achievement[]



}