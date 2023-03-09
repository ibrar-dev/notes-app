import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Resume } from './resume.entity';

@Entity('location')
export class Location {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    city: string;
    @Column()
    state: string;
    @Column()
    stateIsoCode: string;
    @Column()
    country: string;
    @Column()
    IsoAlpha2: string;
    @Column()
    IsoAlpha3: string;
    @Column()
    UNCode: string;
    @ManyToOne(() => Resume, (user) => user.currentLocation)
    res1: Resume;
    @ManyToOne(() => Resume, (user) => user.preferredLocation)
    res: Resume;
}




// {
//     "City": "Detroit",
//     "State": "MI",
//     "StateIsoCode": "US-MI",
//     "Country": "USA",
//     "CountryCode": {
//       "IsoAlpha2": "US",
//       "IsoAlpha3": "USA",
//       "UNCode": "840"
//     }
//   }

