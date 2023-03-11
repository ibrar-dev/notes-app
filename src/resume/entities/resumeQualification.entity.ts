import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Resume } from './resume.entity';

@Entity('resumequalification')
export class ResumeQualification {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({nullable:true})
    institutionName: string;
    @Column({nullable:true})
    institutionConfidenceScore: number;
    @Column({nullable:true})
    institutionType: string;
    @Column({nullable:true})
    institutionCity: string;
    @Column({nullable:true})
    institutionState: string;
    @Column({nullable:true})
    institutionStateIsoCode: string;
    @Column({nullable:true})
    institutionCountry: string;
    @Column({nullable:true})
    institutionIsoAlpha2: string;
    @Column({nullable:true})
    institutionIsoAlpha3: string;
    @Column({nullable:true})
    institutionUNCode: string;
    @Column({nullable:true})
    subInstitutionName: string;
    @Column({nullable:true})
    subInstitutionConfidenceScore: number;
    @Column({nullable:true})
    subInstitutionType: string;
    @Column({nullable:true})
    subInstitutionCity: string;
    @Column({nullable:true})
    subInstitutionState: string;
    @Column({nullable:true})
    subInstitutionStateIsoCode: string;
    @Column({nullable:true})
    subInstitutionCountry: string;
    @Column({nullable:true})
    subInstitutionIsoAlpha2: string;
    @Column({nullable:true})
    subInstitutionIsoAlpha3: string;
    @Column({nullable:true})
    subInstitutionUNCode: string;
    @Column({nullable:true})
    degreeName: string;
    @Column({nullable:true})
    normalizeDegree: string;
    @Column({nullable:true})
    degreeScore: number;
    @Column("text", { array: true })
    specialization: string[];
    @Column({nullable:true})
    formattedDegreePeriod: string;
    @Column({nullable:true})
    startDate: string;
    @Column({nullable:true})
    endDate: string;
    @Column({nullable:true})
    aggregateValue: string;
    @Column({nullable:true})
    aggregateMeasureType: string;

    @ManyToOne(() => Resume, (user) => user.qualification)
    res: Resume;
}





 