import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('salary')
export class Salary {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({nullable:true})
    amount: string;
    @Column({nullable:true})
    symbol: string
    @Column({nullable:true})
    currency: string;
    @Column({nullable:true})
    unit: string;
    @Column({nullable:true})
    text: string;
}
