import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Resume } from './resume.entity';

@Entity('location')
export class Location {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({nullable:true})
    city: string;
    @Column({nullable:true})
    state: string;
    @Column({nullable:true})
    stateIsoCode: string;
    @Column({nullable:true})
    country: string;
    @Column({nullable:true})
    IsoAlpha2: string;
    @Column({nullable:true})
    IsoAlpha3: string;
    @Column({nullable:true})
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

