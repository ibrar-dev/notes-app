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
    @Column({ nullable: true })
    resumeFileName: string;
    @Column({ nullable: true })
    resumeLanguage: string;
    @Column({ nullable: true })
    resumeLanguageCode: string;
    @Column({ nullable: true })
    parsingDate: string;
    @Column({ nullable: true })
    fullName: string;
    @Column({ nullable: true })
    titleName: string;
    @Column({ nullable: true })
    firstName: string;
    @Column({ nullable: true })
    middleName: string;
    @Column({ nullable: true })
    lastName: string;
    @Column({ nullable: true })
    formattedName: string;
    @Column({ nullable: true })
    nameScore: number;
    @Column({ nullable: true })
    dateOfBirth: string;
    @Column({ nullable: true })
    gender: string;
    @Column({ nullable: true })
    fatherName: string;
    @Column({ nullable: true })
    motherName: string;
    @Column({ nullable: true })
    maritalStatus: string;
    @Column({ nullable: true })
    nationality: string;
    @Column({ nullable: true })
    uniqueId: string;
    @Column({ nullable: true })
    licenseNo: string;
    @Column({ nullable: true })
    passportNumber: string;
    @Column({ nullable: true })
    dateOfExpiry: string;
    @Column({ nullable: true })
    dateOfIssue: string;
    @Column({ nullable: true })
    placeOfIssue: string;
    @Column({ nullable: true })
    panNo: string;
    @Column({ nullable: true })
    visaStatus: string;
    @Column({ nullable: true })
    category: string;
    @Column({ nullable: true })
    subCategory: string;
    @Column({ nullable: true })
    qualification: string;
    @Column({ nullable: true })
    certificationText: string;
    @Column({ nullable: true })
    skillBlock: string;
    @Column({ nullable: true })
    skillKeywords: string;
    @Column({ nullable: true })
    experienceText: string;
    @Column({ nullable: true })
    currentEmployer: string;
    @Column({ nullable: true })
    jobProfile: string;
    @Column({ nullable: true })
    workedPeriodTotalExperienceInMonths: string;
    @Column({ nullable: true })
    workedPeriodTotalExperienceInYear: string;
    @Column({ nullable: true })
    workedPeriodTotalExperienceRange: string;
    @Column({ nullable: true })
    gapPeriod: string;
    @Column({ nullable: true })
    averageStay: string;
    @Column({ nullable: true })
    longestStay: string;
    @Column({ nullable: true })
    summary: string;
    @Column({ nullable: true })
    executiveSummary: string;
    @Column({ nullable: true })
    managementSummary: string;
    @Column({ nullable: true })
    coverLetter: string;
    @Column({ nullable: true })
    publication: string;
    @Column({ nullable: true })
    availability: string;
    @Column({ nullable: true })
    hobbies: string;
    @Column({ nullable: true })
    objectives: string;
    @Column({ nullable: true })
    achievement: string;
    @Column({ nullable: true })
    references: string;
    @Column({ nullable: true })
    userId: string;
    @ManyToMany(() => Language, (category) => category.title, {
        cascade: true,
    })
    @JoinTable()
    languages: Language[];

    @OneToMany(() => Phone, (ph) => ph.res, { cascade: true })
    phone: Phone[]

    @OneToMany(() => Email, (ph) => ph.res, { cascade: true })
    email: Email[]

    @OneToMany(() => Website, (ph) => ph.res, { cascade: true })
    website: Website[]

    @OneToOne(() => Salary, { cascade: true })
    @JoinColumn()
    currentSalary: Salary[]

    @OneToOne(() => Salary, { nullable: true, cascade: true })
    @JoinColumn()
    expectedSalary: Salary[]

    @OneToMany(() => Address, (ph) => ph.res, { cascade: true })
    address: Address[]

    @OneToMany(() => ResumeQualification, (ph) => ph.res, { cascade: true })
    qualifications: ResumeQualification[]

    @OneToMany(() => Certification, (ph) => ph.res, { cascade: true })
    certification: Certification[]

    @OneToMany(() => Skills, (ph) => ph.res, { cascade: true })
    skills: Skills[]

    @OneToMany(() => Experience, (ph) => ph.res, { cascade: true })
    experience: Experience[]

    @OneToMany(() => Publication, (ph) => ph.res, { cascade: true })
    publications: Publication[]

    @OneToMany(() => Location, (ph) => ph.res1, { cascade: true })
    currentLocation: Location[]

    @OneToMany(() => Location, (ph) => ph.res, { cascade: true })
    preferredLocation: Location[]

    @OneToMany(() => Achievement, (ph) => ph.res, { cascade: true })
    achievements: Achievement[]
}