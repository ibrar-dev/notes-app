import { Resume } from "src/resume/entities/resume.entity";
import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, ManyToMany, JoinTable } from "typeorm";

@Entity('languages')
export class Language {
    constructor(title, code) {
        this.title = title;
        this.code = code;
    }

    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    code: string;
    // @ManyToOne(() => Resume, (user) => user.languages)
    // res: Resume;
 


}
