import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Resume } from './resume.entity';

@Entity('address')
export class Address {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    street: string;
    @Column()
    city: string;
    @Column()
    state: string;
    @Column()
    stateIsoCode: string;
    @Column()
    country: string;
    @Column()
    zipCode: string;
    @Column()
    formattedAddress:string;
    @Column()
    type:string;
    @Column()
    isoAlpha2:string;
    @Column()
    isoAlpha3:string;
    @Column()
    uNCode:string;
    @Column()
    confidenceScore: number;

    @ManyToOne(() => Resume, (user) => user.address)
    res: Resume;

}
