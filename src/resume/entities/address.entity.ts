import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Resume } from './resume.entity';

@Entity('address')
export class Address {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({nullable:true})
    street: string;
    @Column({nullable:true})
    city: string;
    @Column({nullable:true})
    state: string;
    @Column({nullable:true})
    stateIsoCode: string;
    @Column({nullable:true})
    country: string;
    @Column({nullable:true})
    zipCode: string;
    @Column({nullable:true})
    formattedAddress:string;
    @Column({nullable:true})
    type:string;
    @Column({nullable:true})
    isoAlpha2:string;
    @Column({nullable:true})
    isoAlpha3:string;
    @Column({nullable:true})
    uNCode:string;
    @Column({nullable:true})
    confidenceScore: number;

    @ManyToOne(() => Resume, (user) => user.address)
    res: Resume;

}
