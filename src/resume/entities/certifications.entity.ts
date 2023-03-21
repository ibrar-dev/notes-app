import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Resume } from './resume.entity';

@Entity('certification')
export class Certification {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({nullable:true})
    title: string;
    @Column({nullable:true})
    authority: string;
    @Column({nullable:true})
    certificationCode: string;
    @Column({nullable:true})
    isExpiry: string;
    @Column({nullable:true})
    startDate: string;
    @Column({nullable:true})
    endDate: string;
    @Column({nullable:true})
    certificationUrl: string;

    @ManyToOne(() => Resume, (user) => user.certification)
    res: Resume;
}


// {
//     "CertificationTitle": "National Board Certification",
//     "Authority": "",
//     "CertificationCode": "",
//     "IsExpiry": "",
//     "StartDate": "01/10/2016",
//     "EndDate": "31/10/2016",
//     "CertificationUrl": ""
//   }

//  "certification":[{ "title": "National Board Certification",
//   "authority": "",
//   "certificationCode": "",
//   "isExpiry": "",
//   "startDate":  "01/10/2016",
//   "endDate":  "21/10/2016",
//   "certificationUrl": ""}]




