import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('salary')
export class Salary {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    amount: string;
    @Column()
    symbol: string
    @Column()
    currency: string;
    @Column()
    unit: string;
    @Column()
    text: string;
}
