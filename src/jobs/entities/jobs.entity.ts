
import { Qualifications } from 'src/qualification/entities/qualifications.entity';
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CreateDateColumn, UpdateDateColumn } from "typeorm";
import {JobCategory} from "./category.entity"
@Entity()
export class Job {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    companyName: string;

    @Column({ nullable: true })
    location: string;

    @Column({ nullable: true })
    via: string;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: true })
    thumbnail: string;

    @Column({ unique: true })
    applyLink: string;

    @Column({ nullable: true })
    postedAt: string;

    @Column({ nullable: true })
    scheduleType: string;

    @Column({ nullable: true })
    applyLinkTitle: string;

    @Column({ nullable: true })
    salary: string;

    @Column({ default: false })
    workFromHome: boolean;

    @Column("text", { array: true })
    responsibilities: string[];

    @Column("text", { array: true })
    qualifications: string[];

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
     created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
     updated_at: Date;
    // @OneToMany(() => Qualifications, (post) => post.id,{cascade:true})
    // qualifications: Qualifications[]

    @Column({ nullable: true })
    category: string;

    @ManyToOne(() => JobCategory, (apJob) => apJob.jobs)
    job_category: JobCategory;

    }








// {
//     "title": "Senior Software Engineer",
//     "companyName": "Lowes",
//     "location": "Charlotte, NC",
//     "via": "via Lowe's Careers",
//     "description": "JOB DESCRIPTION: Position is based in Charlotte, NC, some teleworking may be permitted. Travel to Lowe’s offices may be required.\n\nTranslate complex cross-functional business requirements and functional specifications into logical program designs, code modules, stable application systems, and software solutions; partner with Product Team to understand business needs and functional specifications... Collaborate with cross-functional teams to ensure specifications are converted into flexible, scalable, and maintainable solution designs; evaluate project deliverables to ensure they meet specifications and architectural standards. Guide application and software development teams in the design and build of complex solutions and ensures that teams are in alignment with the architecture blueprint, standards, target state architecture, and strategies. Support Systems Integration Testing (SIT) and User Acceptance Testing (UAT), provides insight into defining test plans, and ensures quality software deployment. Participate in the end-to-end product lifecycle by applying and sharing an in depth understanding of company and industry methodologies, policies, standards, and controls. Grasp software design patterns and approaches; understand application-level software architecture; make technical trade-off decisions at application level. Automate and simplify team development, test, and operations processes; develop conceptual, logical, and physical architectures consisting of one or more viewpoints (business, application, data, and infrastructure) required for business solution delivery. Solve complex architecture/design and business problems; solutions are extensible; work to simplify, optimize, remove bottlenecks, etc. Provide mentoring and guidance to more junior level engineers; provide feedback and direction on specific engineering tasks.\n\nJOB REQUIREMENTS: Job requires a Bachelor’s degree* in Computer Science, CIS, Engineering or related field and 5 years of experience in Software Engineering. *Employer will accept single degree or combination of degrees, diplomas and/or professional experience equivalent to a Bachelor’s degree.\n\nMust have prior experience in:\n\n• 5 years of experience in:\n• Java, J2EE technologies;\n• Spring and Spring Boot, with REST Services/ Microservices; and\n• Working with no-sql databases including Couchbase.\n• 4 years of experience in:\n• Working on retail industry with e-commerce experience;\n• Working on tools including Apache Maven or Apache JMeter; and\n• Working on GIT as version control tool.\n• 3 years of experience in:\n• Working with relational databases including Oracle or DB2;\n• Micro services architecture; and\n• Working with messaging platforms.\n\nQualified applicants should email cvr ltr & resume to: lowescareer@lowes.com. REQ# 3363478\n\nEEO Statement\nLowe’s is an equal opportunity employer and administers all personnel practices without regard to race, color, religious creed, sex, gender, age, ancestry, national origin, mental or physical disability or medical condition, sexual orientation, gender identity or expression, marital status, military or veteran status, genetic information, or any other category protected under federal, state, or local law",
//     "jobHighlights": [
//       {
//         "title": "Qualifications",
//         "items": [
//           "JOB REQUIREMENTS: Job requires a Bachelor’s degree* in Computer Science, CIS, Engineering or related field and 5 years of experience in Software Engineering",
//           "*Employer will accept single degree or combination of degrees, diplomas and/or professional experience equivalent to a Bachelor’s degree",
//           "Java, J2EE technologies;",
//           "Spring and Spring Boot, with REST Services/ Microservices; and",
//           "Working with no-sql databases including Couchbase",
//           "4 years of experience in:",
//           "Working on retail industry with e-commerce experience;",
//           "Working on tools including Apache Maven or Apache JMeter; and",
//           "Working on GIT as version control tool",
//           "3 years of experience in:",
//           "Working with relational databases including Oracle or DB2;",
//           "Micro services architecture; and",
//           "Working with messaging platforms"
//         ]
//       },
//       {
//         "title": "Responsibilities",
//         "items": [
//           "Translate complex cross-functional business requirements and functional specifications into logical program designs, code modules, stable application systems, and software solutions; partner with Product Team to understand business needs and functional specifications",
//           "Collaborate with cross-functional teams to ensure specifications are converted into flexible, scalable, and maintainable solution designs; evaluate project deliverables to ensure they meet specifications and architectural standards",
//           "Guide application and software development teams in the design and build of complex solutions and ensures that teams are in alignment with the architecture blueprint, standards, target state architecture, and strategies",
//           "Support Systems Integration Testing (SIT) and User Acceptance Testing (UAT), provides insight into defining test plans, and ensures quality software deployment",
//           "Participate in the end-to-end product lifecycle by applying and sharing an in depth understanding of company and industry methodologies, policies, standards, and controls",
//           "Grasp software design patterns and approaches; understand application-level software architecture; make technical trade-off decisions at application level",
//           "Solve complex architecture/design and business problems; solutions are extensible; work to simplify, optimize, remove bottlenecks, etc",
//           "Provide mentoring and guidance to more junior level engineers; provide feedback and direction on specific engineering tasks"
//         ]
//       }
//     ],
//     "relatedLinks": [
//       {
//         "link": "http://www.lowes.com/",
//         "text": "lowes.com"
//       },
//       {
//         "link": "https://www.google.com/search?q=Lowes&sa=X&ved=0ahUKEwi56rLF_qr9AhVwnGoFHZ9nA4wQmJACCNAJ",
//         "text": "See web results for Lowes"
//       }
//     ],
//     "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkzuN7M0pPUxDG0B6_5Ym5GJF-cIHJz2Hch0er&s=0",
//     "extras": [
//       "3 days ago",
//       "Full-time"
//     ],
//     "metadata": {
//       "postedAt": "3 days ago",
//       "scheduleType": "Full-time"
//     },
//     "applyLink": {
//       "title": ".nFg2eb{font-weight:500}.Bi6Ddc{font-weight:500}Apply directly on Lowe's Careers",
//       "link": "https://talent.lowes.com/us/en/job/2535289BR/Senior-Software-Engineer?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
//     }
//   }




