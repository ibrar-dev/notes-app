import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Language } from "../../languages/entities/language.entity";

@Entity('resumes')
export class Resume {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column()
    resumeFileName: string;

    @OneToMany(() => Language, (lang) => lang.id, { cascade: true })
    @JoinColumn({ name: 'languages', referencedColumnName: 'id' })
    languages: Language[];

    // @OneToMany(() => Language, (post) => post.id, { cascade: true })
    // languages: Language[]
    // @Column()
    // ResumeLanguage: string;
    // @Column()
    // ResumeLanguageCode: string;
    // @Column()
    // parsingDate: string;
    // @Column()
    // FullName: string;
    // @Column()
    // TitleName: string;
    // @Column()
    // FirstName: string;
    // @Column()
    // MiddleName: string;
    // @Column()
    // LastName: string;
    // @Column()
    // FormattedName: string;
    // @Column()
    // nameScore: number;
    // @Column()
    // dateOfBirth: Date;
    // @Column()
    // gender:string;
    // @Column()
    // fatherName:string;
    // @Column()
    // motherName:string;
    // @Column()
    // maritalStatus:string;
    // @Column()
    // nationality:string;
    // @Column()
    // uniqueId:string;
    // @Column()
    // licenseNo:string;
    // @Column()
    // passportNumber:string;
    // @Column()
    // dateOfExpiry:Date;
    // @Column()
    // dateOfIssue:Date;
    // @Column()
    // placeOfIssue:string;
    // @Column()
    // panNo:string;
    // @Column()
    // visaStatus:string;
    // @Column()
    // category:string;
    // @Column()
    // subCategory:string;
    // @Column()
    // "certificationText": string;
    // @Column()
    // skillBlock: string;
    // @Column()
    // skillKeywords: string;
    // @Column()
    // experienceText:string;
    // @Column()
    // currentEmployer:string;
    // @Column()
    //  jobProfile:string;
    // @Column()
    //  workedPeriodTotalExperienceInMonths:string;
    // @Column()
    //  workedPeriodTotalExperienceInYear:string;
    // @Column()
    //  workedPeriodTotalExperienceRange:string;
    // @Column()
    //  gapPeriod:string;
    // @Column()
    //  averageStay:string;
    // @Column()
    //  longestStay:string;
    // @Column()
    //  summary:string;
    // @Column()
    //  executiveSummary:string;
    // @Column()
    //  managementSummary:string;
    // @Column()
    //  coverLetter:string;
    // @Column()
    //  publication:string;
    // @Column()
    // availability: string;
    // @Column()
    // hobbies: string;
    // @Column()
    // objectives: string;
    // @Column()
    // achievements: string;
    // @Column()
    // references: string;


}


// "currentEmployer": "Henry Ford Hospital",
// "jobProfile": "Cardiologist",
// "workedPeriodTotalExperienceInMonths": "138",
// "workedPeriodTotalExperienceInYear": "11.6",
// "workedPeriodTotalExperienceRange": "GREATER THAN 10 YEAR"
// "gapPeriod": "1/2006 To 12/2012",
// "averageStay": "27",
// "longestStay": "48",
// "summary": "",
// "executiveSummary": "John has an experience in the domain of Health Care and Social Assistance, particularly in Cardiovascular Technologists and Technicians. and is currently working as Cardiologist at Henry Ford Hospital since 1.6 Years. ",
// "managementSummary": "",
// "coverLetter": "",
// "publication": "",
// "availability": "1 Month",
// "hobbies": "Travel, Soccer / Tennis / Basketball, Opera, Cooking, Winemaking",
// "objectives": "Motivated Board-Certified Hospitalist seeking gainful employment \r within an outpatient adult medical practice. Experienced in working in diverse \r healthcare settings. Able to work on own initiative and as part of a team. Dedicated to \r maintaining quality medical practice standards.",
// "achievements": "Associated with Medical- Resident of the Year Award - NYU Department of Medicine 2013 \r Volunteer Service Award - NYU Department of Medicine 2012 \r Intern of the Year Award - NYU Department of Medicine 2011",
// references



//         "SegregatedExperience": [
//             {
//                 "Employer": {
//                     "EmployerName": "Henry Ford Hospital",
//                     "FormattedName": "",
//                     "ConfidenceScore": 10
//                 },
//                 "JobProfile": {
//                     "Title": "Cardiologist",
//                     "FormattedName": "Cardiologist",
//                     "Alias": "",
//                     "RelatedSkills": [
//                         {
//                             "Skill": "Therapy",
//                             "ProficiencyLevel": "Proficient"
//                         },
//                         {
//                             "Skill": "Health Advocacy",
//                             "ProficiencyLevel": "Native"
//                         },
//                         {
//                             "Skill": "Patient Administration",
//                             "ProficiencyLevel": "Moderate"
//                         },
//                         {
//                             "Skill": "Health Assessment",
//                             "ProficiencyLevel": "Moderate"
//                         },
//                         {
//                             "Skill": "Cardiology",
//                             "ProficiencyLevel": "Moderate"
//                         },
//                         {
//                             "Skill": "Cardiac Monitoring",
//                             "ProficiencyLevel": "Proficient"
//                         }
//                     ],
//                     "ConfidenceScore": 10
//                 },
//                 "Location": {
//                     "City": "Detroit",
//                     "State": "MI",
//                     "StateIsoCode": "US-MI",
//                     "Country": "USA",
//                     "CountryCode": {
//                         "IsoAlpha2": "US",
//                         "IsoAlpha3": "USA",
//                         "UNCode": "840"
//                     }
//                 },
//                 "JobPeriod": "7/2016 - 12/2017",
//                 "FormattedJobPeriod": "07/2016 to 12/2017",
//                 "StartDate": "07/01/2016",
//                 "EndDate": "12/31/2017",
//                 "IsCurrentEmployer": "true",
//                 "JobDescription": "Examine patients and assess their condition. \n Give health advice to patients.",
//                 "Projects": [
//                     {
//                         "UsedSkills": "",
//                         "ProjectName": "",
//                         "TeamSize": ""
//                     }
//                 ]
//             },
//             {
//                 "Employer": {
//                     "EmployerName": "Allegiance Health",
//                     "FormattedName": "",
//                     "ConfidenceScore": 10
//                 },
//                 "JobProfile": {
//                     "Title": "Hospitalist, Clinical Decision Unit Physician",
//                     "FormattedName": "",
//                     "Alias": "",
//                     "RelatedSkills": [],
//                     "ConfidenceScore": 8
//                 },
//                 "Location": {
//                     "City": "Detroit",
//                     "State": "MI",
//                     "StateIsoCode": "US-MI",
//                     "Country": "USA",
//                     "CountryCode": {
//                         "IsoAlpha2": "US",
//                         "IsoAlpha3": "USA",
//                         "UNCode": "840"
//                     }
//                 },
//                 "JobPeriod": "2013 - 2016",
//                 "FormattedJobPeriod": "2013 to 2016",
//                 "StartDate": "01/01/2013",
//                 "EndDate": "12/31/2016",
//                 "IsCurrentEmployer": "false",
//                 "JobDescription": "Methodology, Clinical Research, Medical Research, Interpreting Medical Research",
//                 "Projects": [
//                     {
//                         "UsedSkills": "",
//                         "ProjectName": "",
//                         "TeamSize": ""
//                     }
//                 ]
//             },
//

//             {
//                 "Employer": {
//                     "EmployerName": "Market Measures",
//                     "FormattedName": "",
//                     "ConfidenceScore": 10
//                 },
//                 "JobProfile": {
//                     "Title": "Intern",
//                     "FormattedName": "",
//                     "Alias": "",
//                     "RelatedSkills": [],
//                     "ConfidenceScore": 10
//                 },
//                 "Location": {
//                     "City": "Livingston",
//                     "State": "NJ",
//                     "StateIsoCode": "US-NJ",
//                     "Country": "USA",
//                     "CountryCode": {
//                         "IsoAlpha2": "US",
//                         "IsoAlpha3": "USA",
//                         "UNCode": "840"
//                     }
//                 },
//                 "JobPeriod": "2000-2003",
//                 "FormattedJobPeriod": "2000 to 2003",
//                 "StartDate": "01/01/2000",
//                 "EndDate": "12/31/2003",
//                 "IsCurrentEmployer": "false",
//                 "JobDescription": "Created PowerPoint presentations for this market research and analysis firm",
//                 "Projects": [
//                     {
//                         "UsedSkills": "",
//                         "ProjectName": "",
//                         "TeamSize": ""
//                     }
//                 ]
//             },
//             {
//                 "Employer": {
//                     "EmployerName": "Yale University",
//                     "FormattedName": "",
//                     "ConfidenceScore": 10
//                 },
//                 "JobProfile": {
//                     "Title": "Tutor",
//                     "FormattedName": "Tutor",
//                     "Alias": "Classroom Tutor, Home Tutor, Private Tutor, Student Tutor, Students Assistant",
//                     "RelatedSkills": [
//                         {
//                             "Skill": "Communication",
//                             "ProficiencyLevel": "Proficient"
//                         },
//                         {
//                             "Skill": "Student Engagement",
//                             "ProficiencyLevel": "Moderate"
//                         },
//                         {
//                             "Skill": "Student Counseling",
//                             "ProficiencyLevel": "Moderate"
//                         },
//                         {
//                             "Skill": "Teaching",
//                             "ProficiencyLevel": "Proficient"
//                         },
//                         {
//                             "Skill": "Collaborative Learning",
//                             "ProficiencyLevel": "Proficient"
//                         },
//                         {
//                             "Skill": "Coaching Process",
//                             "ProficiencyLevel": "Proficient"
//                         },
//                         {
//                             "Skill": "Tutor Students",
//                             "ProficiencyLevel": "Moderate"
//                         },
//                         {
//                             "Skill": "Escort Students On a Field Trip",
//                             "ProficiencyLevel": "Moderate"
//                         }
//                     ],
//                     "ConfidenceScore": 10
//                 },
//                 "Location": {
//                     "City": "New Haven",
//                     "State": "CT",
//                     "StateIsoCode": "US-CT",
//                     "Country": "USA",
//                     "CountryCode": {
//                         "IsoAlpha2": "US",
//                         "IsoAlpha3": "USA",
//                         "UNCode": "840"
//                     }
//                 },
//                 "JobPeriod": "1999 - 2000",
//                 "FormattedJobPeriod": "1999 to 2000",
//                 "StartDate": "01/01/1999",
//                 "EndDate": "12/31/2000",
//                 "IsCurrentEmployer": "false",
//                 "JobDescription": "Tutor for students in Italian language courses",
//                 "Projects": [
//                     {
//                         "UsedSkills": "",
//                         "ProjectName": "",
//                         "TeamSize": ""
//                     }
//                 ]
//             }
//         ],
//         "CurrentEmployer": "Henry Ford Hospital",
//         "JobProfile": "Cardiologist",
//         "WorkedPeriod": {
//             "TotalExperienceInMonths": "138",
//             "TotalExperienceInYear": "11.6",
//             "TotalExperienceRange": "GREATER THAN 10 YEAR"
//         },
//         "GapPeriod": "1/2006 To 12/2012",
//         "AverageStay": "27",
//         "LongestStay": "48",
//         "Summary": "",
//         "ExecutiveSummary": "John has an experience in the domain of Health Care and Social Assistance, particularly in Cardiovascular Technologists and Technicians. and is currently working as Cardiologist at Henry Ford Hospital since 1.6 Years. ",
//         "ManagementSummary": "",
//         "Coverletter": "",
//         "Publication": "",
//         "SegregatedPublication": [
//             {
//                 "PublicationTitle": "",
//                 "Publisher": "",
//                 "PublicationNumber": "",
//                 "PublicationUrl": "",
//                 "Authors": "",
//                 "Description": ""
//             }
//         ],
//         "CurrentLocation": [
//             {
//                 "City": "Detroit",
//                 "State": "MI",
//                 "StateIsoCode": "US-MI",
//                 "Country": "USA",
//                 "CountryCode": {
//                     "IsoAlpha2": "US",
//                     "IsoAlpha3": "USA",
//                     "UNCode": "840"
//                 }
//             }
//         ],
//         "PreferredLocation": [
//             {
//                 "City": "Chicago",
//                 "State": "IL",
//                 "StateIsoCode": "US-IL",
//                 "Country": "USA",
//                 "CountryCode": {
//                     "IsoAlpha2": "US",
//                     "IsoAlpha3": "USA",
//                     "UNCode": "840"
//                 }
//             }
//         ],
//         "Availability": "1 Month",
//         "Hobbies": "Travel, Soccer / Tennis / Basketball, Opera, Cooking, Winemaking",
//         "Objectives": "Motivated Board-Certified Hospitalist seeking gainful employment \r within an outpatient adult medical practice. Experienced in working in diverse \r healthcare settings. Able to work on own initiative and as part of a team. Dedicated to \r maintaining quality medical practice standards.",
//         "Achievements": "Associated with Medical- Resident of the Year Award - NYU Department of Medicine 2013 \r Volunteer Service Award - NYU Department of Medicine 2012 \r Intern of the Year Award - NYU Department of Medicine 2011",
//         "SegregatedAchievement": [
//             {
//                 "AwardTitle": "Associated with Medical- Resident of the Year Award",
//                 "Issuer": "NYU Department of Medicine",
//                 "AssociatedWith": "",
//                 "IssuingDate": "2013",
//                 "Description": "Associated with Medical- Resident of the Year Award - NYU Department of Medicine   "
//             },
//             {
//                 "AwardTitle": "Volunteer Service Award",
//                 "Issuer": "NYU Department of Medicine",
//                 "AssociatedWith": "",
//                 "IssuingDate": "2012",
//                 "Description": "Volunteer Service Award - NYU Department of Medicine   "
//             },
//             {
//                 "AwardTitle": "Intern of the Year Award",
//                 "Issuer": "NYU Department of Medicine",
//                 "AssociatedWith": "",
//                 "IssuingDate": "2011",
//                 "Description": "Intern of the Year Award - NYU Department of Medicine  "
//             }
//         ],
//         "References": "Dean Dobbert, MD \r Supervising physician, Express Care; Dover, DE \r dedobbert@christianacare.org \r 302-236-7313  \r Benjamin Levy, DO \r Supervising physician, Dover AFB; Dover, DE \r  \r ben.s.levy@gmail.com \r 612-508-9554  \r Tom Barnett, MD \r Supervising physician, Surgical Associates; Dover, DE \r 302-674-0600",
//         "CustomFields": "",
//         "EmailInfo": {
//             "EmailTo": " ",
//             "EmailBody": " ",
//             "EmailReplyTo": " ",
//             "EmailSignature": " ",
//             "EmailFrom": " ",
//             "EmailSubject": " ",
//             "EmailCC": " "
//         },
//         "Recommendations": [
//             {
//                 "PersonName": "",
//                 "CompanyName": "",
//                 "Relation": "",
//                 "PositionTitle": "",
//                 "Description": ""
//             }
//         ],
//         "DetailResume": "John Deo\n\nAddress\t\t\n2915 John R St. Apt 306\t\t\t  \t\t\t\nDetroit, MI USA 48201\n\nPermanent Address\n180 N Jefferson St. Apt 2703\nChicago, IL USA 60661\t\n\t\t\nContact Information\t\t\nMobile : 1234567890\t  \t\t\nPhone : 200-600-3000\nFax : +1-212-9876000\t\t\nEmail : Johndeo@rchilli.com\n  John75@xyz.com\n\nLinkedIn ID\nUrl : https://www.linkedin.com/Johndeo/\nFacebook ID\nUrl : https://www.facebook.com/Johndeo \nTwitter ID\nUrl : https://twitter.com/Johndeo \n\t\t\n\t\t\n\nObjective\nMotivated Board-Certified Hospitalist seeking gainful employment\nwithin an outpatient adult medical practice. Experienced in working in diverse\nhealthcare settings. Able to work on own initiative and as part of a team. Dedicated to\nmaintaining quality medical practice standards.\n\nSkills\nGood communication skills are essential for interventional cardiologists. As their work is physically intricate, so must be their communication with other medical personnel as they perform complex cardiac procedures. These cardiologists must also explain the procedures to their patients in language they can understand. Pre- and post-catheterization care of patients involves communication skills being used by cardiologists for evaluations and explanations.\nMedicine and Dentistry - Knowledge of the information and techniques needed to diagnose and treat human injuries, diseases, and deformities. This includes symptoms, treatment alternatives, drug properties and interactions, and preventive health-care measures.\nScheduling patient appointments\nMaintaining medical records, and billing and coding information for insurance\nPreparing patients for examination\nHelping physicians with patient examinations\nTaking and recording vital signs, such as blood pressure\nDrawing blood\nPreparing blood samples for laboratory tests\nGiving patients injections or medications as directed by a physician (in some states) \n\nEducation and Training\n2005 - 2009 \t- St. George's University School of Medicine, New Haven, CT, USA\n\t  - St. George's School of Medicine, New Haven, CT, USA\n- Doctor of Medicine degree, 3.5 CGPA\n\n1998 - 2002\t- Yale University, New Haven, CT, USA\n\t\t  \t- Bachelor of Science 3.97 CGPA \n\t  Molecular, Cellular and Developmental Biology\n\n1997 - 1998\t  - Secondary Education, Carnegie Vanguard High School, Houston, Texas, USA\n\t  \n\nHonors and Awards\nAssociated with Medical- Resident of the Year Award - NYU Department of Medicine 2013\nVolunteer Service Award - NYU Department of Medicine 2012\nIntern of the Year Award - NYU Department of Medicine 2011\n\nCertification\nOct 2016\t  - National Board Certification. Expire 2020\n\nWork Experience\n7/2016 - 12/2017 - Henry Ford Hospital, Detroit, MI, USA - Cardiologist\nExamine patients and assess their condition.\nGive health advice to patients.\n\n2013 - 2016\t - Allegiance Health, Detroit, MI\nHospitalist, Clinical Decision Unit Physician\nMethodology, Clinical Research, Medical Research, Interpreting Medical Research\n\n2003 - 2005 \t - Kaplan Inc. Hanover, NJ\nTutor, classroom teacher for MCAT and SAT preparatory courses\n\n2003 - 2005\t - Estelle Finkel Associates, Livingston, NJ\nTutor, High School students for Advanced Placement science/math exams\n\n2000-2003\t - Market Measures, Intern. Livingston, NJ\nCreated PowerPoint presentations for this market research and analysis firm\n\n1999 - 2000\t - Yale University, Tutor. New Haven, CT\nTutor for students in Italian language courses\n\nLanguages\nLanguages : Italian (fluent) \nSpanish (proficient) \nFrench (proficient) \n\nHobbies\nTravel, Soccer/Tennis/Basketball, Opera, Cooking, Winemaking\n\nPersonal Data\nFull Name : John Deo\nDate of Birth : March 13 , 1980\nMarital Status : Single\nGender : Female\nNationality : USA\nFather Name : Charlene Deo\nMother Name : Amanda Deo\nVisa : J1\nLicenses : USA Medical license\nPassport Details\nPassport Number : 31195884\nDate of Issue : 18 Sept. 2008\nExpiry Date : 5 June 2021\nPlace of Issue : United states of America\nPan No : ADPAR9789T\nSocial Security No : 17946232\nCurrent Location : Detroit, MI, USA\nPreferred Location : Chicago, IL, USA\nAvailability : 1 Month\nCurrent Salary : US $ 276800 per year\nExpected Salary : US $ 300000 per year\n\nReferences\nDean Dobbert, MD\nSupervising physician, Express Care; Dover, DE\ndedobbert@christianacare.org\n302-236-7313 \nBenjamin Levy, DO\nSupervising physician, Dover AFB; Dover, DE\n\nben.s.levy@gmail.com\n612-508-9554 \nTom Barnett, MD\nSupervising physician, Surgical Associates; Dover, DE\n302-674-0600",

//         "CandidateImage": {
//             "CandidateImageData": "",
//             "CandidateImageFormat": ""
//         },
//         "TemplateOutput": {
//             "TemplateOutputFileName": "",
//             "TemplateOutputData": ""
//         },
//         "ApiInfo": {
//             "Metered": "No",
//             "CreditLeft": "61",
//             "AccountExpiryDate": "06/30/2020 23:59:00.0",
//             "BuildVersion": ""
//         }
//     },
// }