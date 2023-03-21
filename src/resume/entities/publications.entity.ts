import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Resume } from './resume.entity';

@Entity('publication')
export class Publication {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({nullable:true})
    publicationTitle: string;
    @Column({nullable:true})
    publisher: string;
    @Column({nullable:true})
    publicationNumber: string;
    @Column({nullable:true})
    publicationUrl: string;
    @Column({nullable:true})
    authors: string;
    @Column({nullable:true})
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




