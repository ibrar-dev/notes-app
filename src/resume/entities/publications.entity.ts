import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Resume } from './resume.entity';

@Entity('publication')
export class Publication {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    publicationTitle: string;
    @Column()
    publisher: string;
    @Column()
    publicationNumber: string;
    @Column()
    publicationUrl: string;
    @Column()
    authors: string;
    @Column()
    description: string;

    @ManyToOne(() => Resume, (user) => user.publications)
    res: Resume;
}


// "SegregatedPublication": [
//     {
//       "publicationTitle": "",
//       "publisher": "",
//       "publicationNumber": "",
//       "publicationUrl": "",
//       "authors": "",
//       "description": ""
//     }
//   ],




