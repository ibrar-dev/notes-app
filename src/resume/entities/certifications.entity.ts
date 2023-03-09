import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Resume } from './resume.entity';

@Entity('certification')
export class Certification {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    title: string;
    @Column()
    authority: string;
    @Column()
    certificationCode: string;
    @Column()
    isExpiry: string;
    @Column()
    startDate: string;
    @Column()
    endDate: string;
    @Column()
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




