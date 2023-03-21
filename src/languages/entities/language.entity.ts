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
    @Column({nullable:true})
    title: string;
    @Column({nullable:true})
    code: string;
    // @ManyToOne(() => Resume, (user) => user.languages)
    // res: Resume;
 


}
