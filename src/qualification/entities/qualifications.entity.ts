
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Qualifications {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

}



