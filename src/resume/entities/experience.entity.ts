import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Projects } from './projects.entity';
import { RelatedSkills } from './relatedSkills.entity';
import { Resume } from './resume.entity';

@Entity('experience')
export class Experience {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({nullable:true})
    employerName: string;
    @Column({nullable:true})
    employerFormattedName: string;
    @Column({nullable:true})
    employerConfidenceScore: number;
    @Column({nullable:true})
    title: string;
    @Column({nullable:true})
    jobFormattedName: string;
    @Column({nullable:true})
    jobAlias: string;
    @Column({nullable:true})
    jobConfidenceScore: number;
    @Column({nullable:true})
    jobPeriod: string;
    @Column({nullable:true})
    formattedJobPeriod: string;
    @Column({nullable:true})
    startDate: string;
    @Column({nullable:true})
    endDate: string;
    @Column({nullable:true})
    isCurrentEmployer: string;
    @Column({nullable:true})
    jobDescription: string;

    @OneToMany(() => RelatedSkills, (ph) => ph.res, { cascade: true })
    relatedSkills: RelatedSkills[]
    @OneToMany(() => Projects, (ph) => ph.res, { cascade: true })
    projects: Projects[]
    // @OneToMany(() => Experience, (ph) => ph.res, { cascade: true })
    // experience: Experience[]
    @ManyToOne(() => Resume, (user) => user.experience)
    res: Resume;
}



// "experience": {
//     "relatedSkills": [
//         {
//             "skill": "Communication",
//             "proficiencyLevel": "Proficient"
//         },
//         {
//             "skill": "Student Engagement",
//             "proficiencyLevel": "Moderate"
//         },
//         {
//             "skill": "Student Counseling",
//             "proficiencyLevel": "Moderate"
//         }
//     ],
//     "projects": [
//         {
//             "usedSkills": "React.js, Node",
//             "projectName": "Omid",
//             "teamSize": "5"
//         }
//     ],
//     "employerName": "Estelle Finkel Associates",
//     "employerFormattedName": "",
//     "employerConfidenceScore": 10,
//     "title": "Tutor",
//     "jobFormattedName": "Tutor",
//     "jobAlias": "Classroom Tutor, Home Tutor, Private Tutor, Student Tutor, Students Assistant",
//     "jobConfidenceScore": 10,
//     "jobPeriod": "2003 - 2005",
//     "formattedJobPeriod": "2003 to 2005",
//     "startDate": "01/01/2003",
//     "endDate": "12/31/2005",
//     "isCurrentEmployer": "false",
//     "jobDescription": ""
// }