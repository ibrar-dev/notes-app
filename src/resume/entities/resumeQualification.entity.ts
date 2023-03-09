import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Resume } from './resume.entity';

@Entity('resumequalification')
export class ResumeQualification {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    institutionName: string;
    @Column()
    institutionConfidenceScore: number;
    @Column()
    institutionType: string;
    @Column()
    institutionCity: string;
    @Column()
    institutionState: string;
    @Column()
    institutionStateIsoCode: string;
    @Column()
    institutionCountry: string;
    @Column()
    institutionIsoAlpha2: string;
    @Column()
    institutionIsoAlpha3: string;
    @Column()
    institutionUNCode: string;
    @Column()
    subInstitutionName: string;
    @Column()
    subInstitutionConfidenceScore: number;
    @Column()
    subInstitutionType: string;
    @Column()
    subInstitutionCity: string;
    @Column()
    subInstitutionState: string;
    @Column()
    subInstitutionStateIsoCode: string;
    @Column()
    subInstitutionCountry: string;
    @Column()
    subInstitutionIsoAlpha2: string;
    @Column()
    subInstitutionIsoAlpha3: string;
    @Column()
    subInstitutionUNCode: string;
    @Column()
    degreeName: string;
    @Column()
    normalizeDegree: string;
    @Column()
    degreeScore: number;
    @Column("text", { array: true })
    specialization: string[];
    @Column()
    formattedDegreePeriod: string;
    @Column()
    startDate: string;
    @Column()
    endDate: string;
    @Column()
    aggregateValue: string;
    @Column()
    aggregateMeasureType: string;

    @ManyToOne(() => Resume, (user) => user.qualification)
    res: Resume;
}





 