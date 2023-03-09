"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumeService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const resume_entity_1 = require("./entities/resume.entity");
var fs = require('fs');
let ResumeService = class ResumeService {
    constructor(resumeRepository) {
        this.resumeRepository = resumeRepository;
    }
    async create(createResumeDto) {
        try {
            let newJob = this.resumeRepository.create(Object.assign({}, createResumeDto));
            console.log(newJob);
            let aw = await this.resumeRepository.save(newJob);
            console.log("Reee", aw);
            return aw;
        }
        catch (error) {
            return error;
        }
    }
    async findAll() {
        try {
            let newUser = await this.resumeRepository.find({
                relations: {
                    phone: true
                }
            });
            return { result: newUser };
        }
        catch (error) {
            console.log("here", error);
            return error;
        }
    }
    async findOne(id) {
        try {
            const res = await this.resumeRepository.findOne({
                where: {
                    id: id,
                },
                relations: {
                    phone: false,
                    email: false,
                    website: false,
                    currentSalary: false,
                    skills: false,
                    expectedSalary: false,
                    experience: true,
                    qualifications: true
                }
            });
            return { result: res };
        }
        catch (error) {
            console.log("here", error);
            return error;
        }
    }
    update(id, updateResumeDto) {
        return `This action updates a #${id} resume`;
    }
    remove(id) {
        return `This action removes a #${id} resume`;
    }
    async uploadResume(res) {
        console.log(res);
        let data = fs.readFileSync(`./uploads/` + res.file);
        console.log(data.toString('base64'));
        return data.toString('base64');
    }
    async reStructureData() {
        let resumeFileName = resData.ResumeParserData.ResumeFileName;
        let resumeLanguage = resData.ResumeParserData.ResumeLanguage ? resData.ResumeParserData.ResumeLanguage.Language : "";
        let resumeLanguageCode = resData.ResumeParserData.ResumeLanguage ? resData.ResumeParserData.ResumeLanguage.LanguageCode : "";
        let parsingDate = resData.ResumeParserData.ParsingDate;
        let fullName = resData.ResumeParserData.Name.FullName;
        let titleName = resData.ResumeParserData.Name.TitleName;
        let firstName = resData.ResumeParserData.Name.FirstName;
        let middleName = resData.ResumeParserData.Name.MiddleName;
        let lastName = resData.ResumeParserData.Name.LastName;
        let formattedName = resData.ResumeParserData.Name.FormattedName;
        let nameScore = resData.ResumeParserData.Name.ConfidenceScore;
        let dateOfBirth = resData.ResumeParserData.DateOfBirth;
        let gender = resData.ResumeParserData.Gender;
        let fatherName = resData.ResumeParserData.FatherName;
        let motherName = resData.ResumeParserData.MotherName;
        let maritalStatus = resData.ResumeParserData.MaritalStatus;
        let nationality = resData.ResumeParserData.Nationality;
        let uniqueId = resData.ResumeParserData.UniqueID;
        let licenseNo = resData.ResumeParserData.LicenseNo;
        let passportNumber = resData.ResumeParserData.PassportDetail ? resData.ResumeParserData.PassportDetail.PassportNumber : "";
        let dateOfExpiry = resData.ResumeParserData.PassportDetail ? resData.ResumeParserData.PassportDetail.DateOfExpiry : "";
        let dateOfIssue = resData.ResumeParserData.PassportDetail ? resData.ResumeParserData.PassportDetail.DateOfIssue : "";
        let placeOfIssue = resData.ResumeParserData.PassportDetail ? resData.ResumeParserData.PassportDetail.PlaceOfIssue : "";
        let panNo = resData.ResumeParserData.PanNo;
        let visaStatus = resData.ResumeParserData.VisaStatus;
        let category = resData.ResumeParserData.Category;
        let subCategory = resData.ResumeParserData.SubCategory;
        let certificationText = resData.ResumeParserData.Certification;
        let qualification = resData.ResumeParserData.Qualification;
        let skillBlock = resData.ResumeParserData.SkillBlock;
        let skillKeywords = resData.ResumeParserData.SkillKeywords;
        let experienceText = resData.ResumeParserData.Experience;
        let currentEmployer = resData.ResumeParserData.CurrentEmployer;
        let jobProfile = resData.ResumeParserData.JobProfile;
        let workedPeriodTotalExperienceInMonths = resData.ResumeParserData.WorkedPeriod ? resData.ResumeParserData.WorkedPeriod.TotalExperienceInMonths : "";
        let workedPeriodTotalExperienceInYear = resData.ResumeParserData.WorkedPeriod ? resData.ResumeParserData.WorkedPeriod.TotalExperienceInYear : "";
        let workedPeriodTotalExperienceRange = resData.ResumeParserData.WorkedPeriod ? resData.ResumeParserData.WorkedPeriod.TotalExperienceRange : "";
        let gapPeriod = resData.ResumeParserData.GapPeriod;
        let averageStay = resData.ResumeParserData.AverageStay;
        let longestStay = resData.ResumeParserData.LongestStay;
        let summary = resData.ResumeParserData.Summary;
        let executiveSummary = resData.ResumeParserData.ExecutiveSummary;
        let managementSummary = resData.ResumeParserData.ManagementSummary;
        let coverLetter = resData.ResumeParserData.Coverletter;
        let publication = resData.ResumeParserData.Publication;
        let availability = resData.ResumeParserData.Availability;
        let hobbies = resData.ResumeParserData.Hobbies;
        let objectives = resData.ResumeParserData.Objectives;
        let achievement = resData.ResumeParserData.Achievements;
        let references = resData.ResumeParserData.References;
        let languages = [];
        for (let index = 0; index < (resData.ResumeParserData.LanguageKnown ? resData.ResumeParserData.LanguageKnown.length : 0); index++) {
            const element = resData.ResumeParserData.LanguageKnown[index];
            languages.push({ title: element.Language, code: element.LanguageCode });
        }
        let phone = [];
        for (let index = 0; index < (resData.ResumeParserData.PhoneNumber ? resData.ResumeParserData.PhoneNumber.length : 0); index++) {
            const element = resData.ResumeParserData.PhoneNumber[index];
            phone.push({ phoneNumber: element.Number, ISDCode: element.ISDCode, originalNumber: element.OriginalNumber, formattedNumber: element.FormattedNumber, type: element.Type, confidenceScore: element.ConfidenceScore });
        }
        let email = [];
        for (let index = 0; index < (resData.ResumeParserData.Email ? resData.ResumeParserData.Email.length : 0); index++) {
            const element = resData.ResumeParserData.Email[index];
            email.push({ email: element.EmailAddress, confidenceScore: element.ConfidenceScore });
        }
        let website = [];
        for (let index = 0; index < (resData.ResumeParserData.WebSite ? resData.ResumeParserData.WebSite.length : 0); index++) {
            const element = resData.ResumeParserData.WebSite[index];
            website.push({ type: element.Type, url: element.Url });
        }
        let currentSalary = null;
        if (resData.ResumeParserData.CurrentSalary) {
            const element = resData.ResumeParserData.CurrentSalary;
            currentSalary.push({ amount: element.Amount, symbol: element.Symbol, currency: element.Currency, unit: element.Unit, text: element.Text });
        }
        let expectedSalary = null;
        if (resData.ResumeParserData.ExpectedSalary) {
            const element = resData.ResumeParserData.ExpectedSalary;
            expectedSalary.push({ amount: element.Amount, symbol: element.Symbol, currency: element.Currency, unit: element.Unit, text: element.Text });
        }
        let skills = [];
        for (let index = 0; index < (resData.ResumeParserData.SegregatedSkill ? resData.ResumeParserData.SegregatedSkill.length : 0); index++) {
            const element = resData.ResumeParserData.SegregatedSkill[index];
            skills.push({ type: element.Type, skill: element.Skill, ontology: element.Ontology, alias: element.Alias, formattedName: element.FormattedName, evidence: element.Evidence, lastUsed: element.LastUsed, experienceInMonths: element.ExperienceInMonths });
        }
        let address = [];
        for (let index = 0; index < (resData.ResumeParserData.Address ? resData.ResumeParserData.Address.length : 0); index++) {
            const element = resData.ResumeParserData.Address[index];
            address.push({ street: element.Street, city: element.City, state: element.State, stateIsoCode: element.StateIsoCode, country: element.Country, zipCode: element.ZipCode, formattedAddress: element.FormattedAddress, type: element.Type, isoAlpha2: element.CountryCode ? element.CountryCode.IsoAlpha2 : "", isoAlpha3: element.CountryCode ? element.CountryCode.IsoAlpha3 : "", uNCode: element.CountryCode ? element.CountryCode.UNCode : "", confidenceScore: element.ConfidenceScore });
        }
        let qualifications = [];
        for (let index = 0; index < (resData.ResumeParserData.SegregatedQualification ? resData.ResumeParserData.SegregatedQualification.length : 0); index++) {
            const element = resData.ResumeParserData.SegregatedQualification[index];
            let nObj = {};
            if (element.Institution) {
                nObj = Object.assign(Object.assign({}, nObj), { institutionName: element.Institution.Name, institutionConfidenceScore: element.Institution.ConfidenceScore, institutionType: element.Institution.Type });
                if (element.Institution.Location) {
                    nObj = Object.assign(Object.assign({}, nObj), { institutionCity: element.Institution.Location.City, institutionState: element.Institution.Location.State, institutionStateIsoCode: element.Institution.Location.StateIsoCode, institutionCountry: element.Institution.Location.Country });
                    if (element.Institution.Location.CountryCode) {
                        nObj = Object.assign(Object.assign({}, nObj), { institutionIsoAlpha2: element.Institution.Location.CountryCode.IsoAlpha2, institutionIsoAlpha3: element.Institution.Location.CountryCode.IsoAlpha3, institutionUNCode: element.Institution.Location.CountryCode.UNCode });
                    }
                }
            }
        }
        let obj = {
            resumeFileName, resumeLanguage, resumeLanguageCode, parsingDate, fullName, titleName, firstName, middleName, lastName, formattedName, nameScore, dateOfBirth, gender, fatherName, motherName, maritalStatus, nationality, uniqueId, licenseNo, passportNumber, dateOfExpiry, dateOfIssue, placeOfIssue, panNo, visaStatus, category, subCategory, certificationText, qualification, skillBlock, skillKeywords, experienceText, currentEmployer, jobProfile, workedPeriodTotalExperienceInMonths, workedPeriodTotalExperienceInYear, workedPeriodTotalExperienceRange, gapPeriod, averageStay, longestStay, summary, executiveSummary, managementSummary, coverLetter, publication, availability, hobbies, objectives, achievement, references
        };
        if (expectedSalary) {
            obj['expectedSalary'] = Object.assign({}, expectedSalary);
        }
        if (currentSalary) {
            obj['currentSalary'] = Object.assign({}, currentSalary);
        }
        if (website) {
            obj['website'] = [...website];
        }
        if (email) {
            obj['email'] = [...email];
        }
        if (phone) {
            obj['phone'] = [...phone];
        }
        if (languages) {
            obj['languages'] = [...languages];
        }
        if (skills) {
            obj['skills'] = [...skills];
        }
        if (address) {
            obj['address'] = [...address];
        }
        if (qualifications) {
            obj['qualifications'] = [...qualifications];
        }
        let newJob = this.resumeRepository.create(Object.assign({}, obj));
        console.log(newJob);
        let aw = await this.resumeRepository.save(newJob);
        console.log("Reee", aw);
        return aw;
    }
};
ResumeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(resume_entity_1.Resume)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ResumeService);
exports.ResumeService = ResumeService;
let resData = {
    "ResumeParserData": {
        "ResumeFileName": "SampleResume1.docx",
        "ResumeLanguage": { "Language": "English", "LanguageCode": "en" },
        "ParsingDate": "03/03/2023 11:33:41",
        "ResumeCountry": {
            "Country": "USA",
            "Evidence": "CurrentLocation",
            "CountryCode": { "IsoAlpha2": "US", "IsoAlpha3": "USA", "UNCode": "840" }
        },
        "Name": {
            "FullName": "Johan Marc Doe",
            "TitleName": "",
            "FirstName": "Johan",
            "MiddleName": "Marc",
            "LastName": "Doe",
            "FormattedName": "Johan Marc Doe",
            "ConfidenceScore": 10
        },
        "DateOfBirth": "04/05/1995",
        "Gender": "Male",
        "FatherName": "Davis Carlin",
        "MotherName": "Merry Carlin",
        "MaritalStatus": "Single",
        "Nationality": "USA",
        "LanguageKnown": [
            { "Language": "English", "LanguageCode": "en" },
            { "Language": "French", "LanguageCode": "fr" },
            { "Language": "Spanish", "LanguageCode": "es" }
        ],
        "UniqueID": "27956236",
        "LicenseNo": "USA Medical license",
        "PassportDetail": {
            "PassportNumber": "3125884",
            "DateOfExpiry": "05/06/2022",
            "DateOfIssue": "18/09/2007",
            "PlaceOfIssue": "United states of America"
        },
        "PanNo": "ADPAR7787T",
        "VisaStatus": "H1",
        "Email": [{ "EmailAddress": "johnndoee@gmail.com", "ConfidenceScore": 10 }],
        "PhoneNumber": [
            {
                "Number": "202-819-6470",
                "ISDCode": "+1",
                "OriginalNumber": "202-819-6470",
                "FormattedNumber": "+1 202-819-6470",
                "Type": "Phone",
                "ConfidenceScore": 10
            },
            {
                "Number": "3125444306",
                "ISDCode": "+1",
                "OriginalNumber": "312-544-4306",
                "FormattedNumber": "+1 312-544-4306",
                "Type": "Mobile",
                "ConfidenceScore": 10
            }
        ],
        "WebSite": [
            {
                "Type": "Linkedin",
                "Url": "https://www.linkedin.com/in/john-doe-50652a15/"
            },
            { "Type": "Facebook", "Url": "https://www.facebook.com/john-doe/" },
            { "Type": "Twitter", "Url": "https://twitter.com/doejohan" }
        ],
        "Address": [
            {
                "Street": "437 William Way",
                "City": "Syracuse",
                "State": "NY",
                "StateIsoCode": "US-NY",
                "Country": "USA",
                "CountryCode": {
                    "IsoAlpha2": "US",
                    "IsoAlpha3": "USA",
                    "UNCode": "840"
                },
                "ZipCode": "13203",
                "FormattedAddress": "437 William Way, Syracuse, NY, 13203, USA",
                "Type": "Present",
                "ConfidenceScore": 10
            },
            {
                "Street": "124 Main Street",
                "City": "San Francisco",
                "State": "CA",
                "StateIsoCode": "US-CA",
                "Country": "USA",
                "CountryCode": {
                    "IsoAlpha2": "US",
                    "IsoAlpha3": "USA",
                    "UNCode": "840"
                },
                "ZipCode": "94123",
                "FormattedAddress": "124 Main Street, San Francisco, CA, 94123, USA",
                "Type": "Permanent",
                "ConfidenceScore": 10
            }
        ],
        "Category": "Health Care and Social Assistance",
        "SubCategory": "Physicians and Surgeons",
        "CurrentSalary": {
            "Amount": "200000.0",
            "Symbol": "$",
            "Currency": "USD",
            "Unit": "",
            "Text": "200000 $"
        },
        "ExpectedSalary": {
            "Amount": "300000.0",
            "Symbol": "$",
            "Currency": "USD",
            "Unit": "",
            "Text": "300000 $"
        },
        "Qualification": "2007-2011\t\tDoctor of Medicine 78% \r St. George's University School of Medicine \r \t\t\tGrenada, West Indies \r \t\t\t  \r 2002-2006\t\tBachelor of Sciences in Biology, Chemistry 89% \r Fairleigh Dickinson University \r Madison, NJ",
        "SegregatedQualification": [
            {
                "Institution": {
                    "Name": "St. George's University School of Medicine",
                    "Type": "University",
                    "ConfidenceScore": 10,
                    "Location": {
                        "City": "Grenada",
                        "State": "West Indies",
                        "StateIsoCode": "",
                        "Country": "",
                        "CountryCode": { "IsoAlpha2": "", "IsoAlpha3": "", "UNCode": "" }
                    }
                },
                "Degree": {
                    "DegreeName": "Doctor of Medicine",
                    "NormalizeDegree": "Doctor of Medicine",
                    "Specialization": [],
                    "ConfidenceScore": 10
                },
                "FormattedDegreePeriod": "2007 to 2011",
                "StartDate": "01/01/2007",
                "EndDate": "31/12/2011",
                "Aggregate": { "Value": "78", "MeasureType": "Percentage" }
            },
            {
                "Institution": {
                    "Name": "Fairleigh Dickinson University",
                    "Type": "University",
                    "ConfidenceScore": 10,
                    "Location": {
                        "City": "Madison",
                        "State": "NJ",
                        "StateIsoCode": "US-NJ",
                        "Country": "USA",
                        "CountryCode": {
                            "IsoAlpha2": "US",
                            "IsoAlpha3": "USA",
                            "UNCode": "840"
                        }
                    }
                },
                "Degree": {
                    "DegreeName": "Bachelor of Sciences in Biology Chemistry",
                    "NormalizeDegree": "Bachelor of Sciences",
                    "Specialization": ["Biology Chemistry"],
                    "ConfidenceScore": 10
                },
                "FormattedDegreePeriod": "2002 to 2006",
                "StartDate": "01/01/2002",
                "EndDate": "31/12/2006",
                "Aggregate": { "Value": "89", "MeasureType": "Percentage" }
            }
        ],
        "Certification": "2009\t-\tUSMLE Certified \r 2010\t-\tUSMLE CS Certified",
        "SegregatedCertification": [],
        "SkillBlock": "-Proven and effective communication skills with patients, families, and other medical professionals. -Leadership abilities to lead and manage practice staff in providing patients with quality care. -Highly organized, which allows me to keep appointments, records, and patient details in order. -Able to quickly and properly diagnose patient conditions in emergency situations to ensure they receive the treatment they need as soon as possible under controlled conditions. -Detailed oriented, which reduces mistakes made in patient treatment, diagnosis, and medication administration.",
        "SkillKeywords": "Detailed Oriented,Highly Organized,Listening,Leadership Abilities,Effective Communication Skills,Able To Quickly and Properly Diagnose Patient Conditions,Patient Satisfaction,Physical Examination,Disease Prevention,Patient Assessment,Patient Treatment,Health Promotion,Medical Care,Patient Care,Healthcare,Electronic Health Records,Medical Procedures,Medical Histories,Patient Outcomes,Medication Administration,Radiology,Prescribing Medication,Providing Emotional Support,Pathology,Manage Practice Staff,Maintaining Confidentiality",
        "SegregatedSkill": [
            {
                "Type": "SoftSkill",
                "Skill": "Detailed Oriented",
                "Ontology": "Management of Companies and Enterprises>Managers, All Other>Attention to Detail",
                "Alias": "A good eye for detail and high level of accuracy, Acute attention to detail, Attend To Detail, attend to details, attending to details, attention for details, Attention To Details, attention to the details, Attention to-Detail, attention-to-detail, attentive to detail, attentive to details, attentiveness to detail, attentiveness to details, detail driven, detail focused, Detail Minded, Detail Orientated, detail orientation, Detail Oriented, detail-minded, detail-orientated, detail-orientation, Detail-Oriented, detail-oriented tasks, detailed oriented, detailed-oriented, Eye For Detail, Eye For Details, high attention to detail, highly detail oriented, highly detail-oriented, meticulous, organized and detail oriented, Pay Attention To Detail, Paying Close Attention To Detail, Pays Attention To Detail, Pays Attention To Details",
                "FormattedName": "Attention to Detail",
                "Evidence": "SkillSection",
                "LastUsed": "",
                "ExperienceInMonths": 0
            },
            {
                "Type": "SoftSkill",
                "Skill": "Highly Organized",
                "Ontology": "Management of Companies and Enterprises>Managers, All Other>Highly Organized",
                "Alias": "highly organised, organise work, organise work according to deadlines, organize work, Well Organised, Well Organized, Well Presented, well-organised, well-organized, work in an orderly manner, Work in an Organised Manner, work in an organized manner",
                "FormattedName": "Highly Organized",
                "Evidence": "SkillSection",
                "LastUsed": "",
                "ExperienceInMonths": 0
            },
            {
                "Type": "SoftSkill",
                "Skill": "Listening",
                "Ontology": "Management of Companies and Enterprises>Managers, All Other>Active listening",
                "Alias": "Ability To Listen, Able To Listen, Active listener, actively listening, attentive listening, conscious listening, deep listening, deliberate listening, listen actively, Listen Attentively, Listening, Listening Attentively, Listening Carefully, listening skill, listening skills, Listens Attentively",
                "FormattedName": "Active listening",
                "Evidence": "SummarySection",
                "LastUsed": "",
                "ExperienceInMonths": 0
            },
            {
                "Type": "SoftSkill",
                "Skill": "Leadership Abilities",
                "Ontology": "Management of Companies and Enterprises>Top Executives>Leadership",
                "Alias": "abilities to lead, established leadership skills, Inclusive Leadership, leadership abilities, Leadership Ability, leadership management, leadership qualities, leadership skills, leaderships skills, Leading People, Leading Skills, people leadership, provide leadership, strong leadership",
                "FormattedName": "Leadership",
                "Evidence": "SkillSection",
                "LastUsed": "",
                "ExperienceInMonths": 0
            },
            {
                "Type": "SoftSkill",
                "Skill": "Effective Communication Skills",
                "Ontology": "Management of Companies and Enterprises>Chief Executives>Effective Communication",
                "Alias": "able to communicate effectively, Able To Convey Information, Able To Convey Information Clearly, Clear & Concise Communication, Clear and Concise Communication, communicated effectively, Communicated regularly, Communicating With Supervisors, Develop effective communication skills, develop strong communication, Developing Effective Communication, effective communication is paramount, effective communication skills, effective communicator, Effective-Communication, Excellent Communicator, Great communicators",
                "FormattedName": "Effective Communication",
                "Evidence": "SkillSection",
                "LastUsed": "",
                "ExperienceInMonths": 0
            },
            {
                "Type": "OperationalSkill",
                "Skill": "Able To Quickly and Properly Diagnose Patient Conditions",
                "Ontology": "Health Care and Social Assistance>Health Diagnosing and Treating Practitioners>Medical Diagnosis",
                "Alias": "Able To Quickly and Properly Diagnose Patient Conditions, Able-To-Quickly and Properly Diagnose Patient Conditions, clinical diagnosis, clinical diagnostics, diagnose disorders, diagnosing ailments, Diagnosing Health Conditions, diagnosing illnesses, Diagnosing-Health Conditions, Diagnosing-Health- Conditions, diagnosis of patients, diagnosis process, Diagnostic Process, Diagnostic-Process, disease diagnosis, disease-diagnosis, Health Conditions Diagnosing, Medical diagnosis Process, Medical Diagnostics, Medical-Diagnosis, Patient diagnosis, Process Diagnosis",
                "FormattedName": "Medical Diagnosis",
                "Evidence": "SkillSection",
                "LastUsed": "",
                "ExperienceInMonths": 0
            },
            {
                "Type": "OperationalSkill",
                "Skill": "Patient Satisfaction",
                "Ontology": "Health Care and Social Assistance>Health Diagnosing and Treating Practitioners, All Other>Patient Satisfaction",
                "Alias": "Assessing Patient Satisfaction, Patient-Satisfaction",
                "FormattedName": "Patient Satisfaction",
                "Evidence": "SummarySection",
                "LastUsed": "",
                "ExperienceInMonths": 0
            },
            {
                "Type": "OperationalSkill",
                "Skill": "Physical Examination",
                "Ontology": "Health Care and Social Assistance>Health Diagnosing and Treating Practitioners>Physical Examination",
                "Alias": "arrange patients for assessments, Assess new patients, assess patients, assessed patients, assesses patient condition, assessing a patients condition, assessing patients, assessment of patient, assessment on patients, assisting with exams and treatment, clinical examination, Clinical Investigations, develop patients for assessments, evaluate patients, evaluating medical services, Evaluating The Effectiveness Of Treatment, Evaluating The-Effectiveness Of Treatment, Evaluating Treatment Effectiveness, Examination Physical, Examining Patients, Examining Patients to Assess Their Condition, Head to Toe Analysis, Head to Toe Assessment, head to toe evaluation, Head to Toe Examination, Head-to-toe assessment, Head-to-toe assessments, Head-to-Toe Examination, head-to-toe nursing assessment, health examination, Medical Evaluation, medical examination, Medical-Evaluation, Monitored and assessed patients, Nursing Head-to-Toe Assessment, Patient Assessment, Patient assessments, Patient Evaluation, Patient Evaluations, patient examination, patient physical examination, patient physical examinations, Patient-Evaluation, Physical Analysis, Physical assessment, physical assessments, physical checks, Physical Conditions Assessment, physical diagnosis, Physical inspection, Physical Test, Physical Testing, physical tests, Physical-Analysis, physical-examination, Physical-Test, Physical-Testing, plan patients for assessments, prepare a patient for an assessment, prepare a patient for assessments, Prepare Patients for Assessments, Prepare-Patients for Assessments, Prepare-Patients-for-Assessments, preparing patients for assessments, Preparing Patients For Examination, provide patients for assessments, Testing Physical, Treatment Evaluation, Treatment Evaluations",
                "FormattedName": "Physical Examination",
                "Evidence": "ExperienceSection",
                "LastUsed": "31/03/2017",
                "ExperienceInMonths": 21
            },
            {
                "Type": "OperationalSkill",
                "Skill": "Disease Prevention",
                "Ontology": "Health Care and Social Assistance>Health Diagnosing and Treating Practitioners, All Other>Preventive Healthcare",
                "Alias": "disease control, Disease Prevention, disease prevention in medicine, Disease-Prevention, Health Maintenance, Health-Maintenance, Healthcare preventive, Maintenance of health, measures for disease prevention, medical disease prevention, Medical Maintenance, Medical Prophylactic Therapy, Medical-Maintenance, preventative medicine, preventive care, Preventive Health Care, preventive health services, Preventive health-care, Preventive health-care measures, Preventive Medicine, Preventive-Healthcare, Prophylactic Therapy, prophylactic treatment, prophylaxis",
                "FormattedName": "Preventive Healthcare",
                "Evidence": "ExperienceSection",
                "LastUsed": "31/03/2017",
                "ExperienceInMonths": 21
            },
            {
                "Type": "OperationalSkill",
                "Skill": "Patient Assessment",
                "Ontology": "Health Care and Social Assistance>Health Diagnosing and Treating Practitioners>Physical Examination",
                "Alias": "arrange patients for assessments, Assess new patients, assess patients, assessed patients, assesses patient condition, assessing a patients condition, assessing patients, assessment of patient, assessment on patients, assisting with exams and treatment, clinical examination, Clinical Investigations, develop patients for assessments, evaluate patients, evaluating medical services, Evaluating The Effectiveness Of Treatment, Evaluating The-Effectiveness Of Treatment, Evaluating Treatment Effectiveness, Examination Physical, Examining Patients, Examining Patients to Assess Their Condition, Head to Toe Analysis, Head to Toe Assessment, head to toe evaluation, Head to Toe Examination, Head-to-toe assessment, Head-to-toe assessments, Head-to-Toe Examination, head-to-toe nursing assessment, health examination, Medical Evaluation, medical examination, Medical-Evaluation, Monitored and assessed patients, Nursing Head-to-Toe Assessment, Patient Assessment, Patient assessments, Patient Evaluation, Patient Evaluations, patient examination, patient physical examination, patient physical examinations, Patient-Evaluation, Physical Analysis, Physical assessment, physical assessments, physical checks, Physical Conditions Assessment, physical diagnosis, Physical inspection, Physical Test, Physical Testing, physical tests, Physical-Analysis, physical-examination, Physical-Test, Physical-Testing, plan patients for assessments, prepare a patient for an assessment, prepare a patient for assessments, Prepare Patients for Assessments, Prepare-Patients for Assessments, Prepare-Patients-for-Assessments, preparing patients for assessments, Preparing Patients For Examination, provide patients for assessments, Testing Physical, Treatment Evaluation, Treatment Evaluations",
                "FormattedName": "Physical Examination",
                "Evidence": "ExperienceSection",
                "LastUsed": "03/03/2023",
                "ExperienceInMonths": 71
            },
            {
                "Type": "OperationalSkill",
                "Skill": "Patient Treatment",
                "Ontology": "Health Care and Social Assistance>Health Diagnosing and Treating Practitioners>Medical Treatment",
                "Alias": "Implementation Of Treatment, Medical Intervention, Medical-Intervention, Medical-Treatment, Monitor and treat patients, Patient Treatment, providing treatments, treat patients, treatment of patient, Treatment Service, Treatment Services",
                "FormattedName": "Medical Treatment",
                "Evidence": "SkillSection",
                "LastUsed": "",
                "ExperienceInMonths": 0
            },
            {
                "Type": "OperationalSkill",
                "Skill": "Health Promotion",
                "Ontology": "Health Care and Social Assistance>Health Diagnosing and Treating Practitioners>Health Promotion",
                "Alias": "health promoting, Health Promotion process, health-promoting, Health-Promotion, patient Health Promotion, promoting health, promoting positive health behaviors, promotion of health, workplace health promotion, Worksite health promotion",
                "FormattedName": "Health Promotion",
                "Evidence": "ExperienceSection",
                "LastUsed": "31/03/2017",
                "ExperienceInMonths": 21
            },
            {
                "Type": "OperationalSkill",
                "Skill": "Medical Care",
                "Ontology": "Health Care and Social Assistance>Health Diagnosing and Treating Practitioners, All Other>Healthcare",
                "Alias": "Basic Care Services, Basic Health Services, Care for patient, Care in Common Health Problems, care of patients, care to patient, Caring for patients, clinic based care, clinic services, clinic-based care, Clinic-Care, Clinical Care, clinical expertise, Clinical Service, Clinical Services, Clinical Skills, Clinical-Care, Clinical-Skills, Health Care, Health Care Business Operations, Health Care Operations, Health Care System, health care systems, health plan operations, Health Services, Health system, Health Systems, Healthcare Operations, Healthcare Operations Management, Healthcare Services, healthcare skills, healthcare system, medical and health care services, Medical Care, medical operations, medical operations management, medical service, Medical Services, medical skills, Medical System, Medical Systems, operations health plan, Patient Care, patient care services, Patient-Care, Provides care for general medical patients, Providing care to patients",
                "FormattedName": "Healthcare",
                "Evidence": "ExperienceSection",
                "LastUsed": "03/03/2023",
                "ExperienceInMonths": 92
            },
            {
                "Type": "OperationalSkill",
                "Skill": "Patient Care",
                "Ontology": "Health Care and Social Assistance>Health Diagnosing and Treating Practitioners, All Other>Healthcare",
                "Alias": "Basic Care Services, Basic Health Services, Care for patient, Care in Common Health Problems, care of patients, care to patient, Caring for patients, clinic based care, clinic services, clinic-based care, Clinic-Care, Clinical Care, clinical expertise, Clinical Service, Clinical Services, Clinical Skills, Clinical-Care, Clinical-Skills, Health Care, Health Care Business Operations, Health Care Operations, Health Care System, health care systems, health plan operations, Health Services, Health system, Health Systems, Healthcare Operations, Healthcare Operations Management, Healthcare Services, healthcare skills, healthcare system, medical and health care services, Medical Care, medical operations, medical operations management, medical service, Medical Services, medical skills, Medical System, Medical Systems, operations health plan, Patient Care, patient care services, Patient-Care, Provides care for general medical patients, Providing care to patients",
                "FormattedName": "Healthcare",
                "Evidence": "ExperienceSection",
                "LastUsed": "03/03/2023",
                "ExperienceInMonths": 71
            },
            {
                "Type": "OperationalSkill",
                "Skill": "Healthcare",
                "Ontology": "Health Care and Social Assistance>Health Diagnosing and Treating Practitioners, All Other>Healthcare",
                "Alias": "Basic Care Services, Basic Health Services, Care for patient, Care in Common Health Problems, care of patients, care to patient, Caring for patients, clinic based care, clinic services, clinic-based care, Clinic-Care, Clinical Care, clinical expertise, Clinical Service, Clinical Services, Clinical Skills, Clinical-Care, Clinical-Skills, Health Care, Health Care Business Operations, Health Care Operations, Health Care System, health care systems, health plan operations, Health Services, Health system, Health Systems, Healthcare Operations, Healthcare Operations Management, Healthcare Services, healthcare skills, healthcare system, medical and health care services, Medical Care, medical operations, medical operations management, medical service, Medical Services, medical skills, Medical System, Medical Systems, operations health plan, Patient Care, patient care services, Patient-Care, Provides care for general medical patients, Providing care to patients",
                "FormattedName": "Healthcare",
                "Evidence": "ExperienceSection",
                "LastUsed": "03/03/2023",
                "ExperienceInMonths": 71
            },
            {
                "Type": "OperationalSkill",
                "Skill": "Electronic Health Records",
                "Ontology": "Health Care and Social Assistance>Medical Records and Health Information Technicians>Electronic Health Record",
                "Alias": "computer charting, Computer Medical Record, Computer Medical Records, Computerized Medical Record, Computerized Medical Records, Computerized Medical-Record, Computerized Patient Records, EHR, EHR data, electronic charting, Electronic Health Record Management, Electronic Health Records, Electronic Medical Record, Electronic Medical Record Framework, Electronic Medical Records, electronic patient record, electronic patient records, Electronic-Health-Record, EMR, EMR charting, EMR data",
                "FormattedName": "Electronic Health Record",
                "Evidence": "ExperienceSection",
                "LastUsed": "03/03/2023",
                "ExperienceInMonths": 71
            },
            {
                "Type": "OperationalSkill",
                "Skill": "Medical Procedures",
                "Ontology": "Health Care and Social Assistance>Medical Records and Health Information Technicians>Medical Procedures",
                "Alias": "clinical procedure, clinical procedures, explain treatment procedures, explaining treatment procedures to patients, health care procedure, healthcare procedure, Treatment procedure, treatment procedures",
                "FormattedName": "Medical Procedures",
                "Evidence": "SummarySection",
                "LastUsed": "",
                "ExperienceInMonths": 0
            },
            {
                "Type": "OperationalSkill",
                "Skill": "Medical Histories",
                "Ontology": "Health Care and Social Assistance>Medical Records and Health Information Technicians>Medical Record",
                "Alias": "clinical record, collecting patient histories, Dental Records, document clinical information, enter medical records, entering all patient medical records, Inpatient Treatment Records, interpreting medical records, Maintaining Patient Charts, Medical Chart, medical histories, Medical History, medical history documentation, medical information, medical records, Medical-History, patient charting, patient charts, patient history, patient\\u2019s history, recording patient notes, records patients data",
                "FormattedName": "Medical Record",
                "Evidence": "ExperienceSection",
                "LastUsed": "31/03/2017",
                "ExperienceInMonths": 21
            },
            {
                "Type": "OperationalSkill",
                "Skill": "Patient Outcomes",
                "Ontology": "Health Care and Social Assistance>Medical Records and Health Information Technicians>Patient Outcomes Management",
                "Alias": "Patient outcomes, Patient Outcomes mgmt, Patient-Outcomes Management, Patient-Outcomes-Management",
                "FormattedName": "Patient Outcomes Management",
                "Evidence": "SummarySection",
                "LastUsed": "",
                "ExperienceInMonths": 0
            },
            {
                "Type": "OperationalSkill",
                "Skill": "Medication Administration",
                "Ontology": "Health Care and Social Assistance>Pharmacists>Medication Management",
                "Alias": "Administer medication, Administer medications, Administered medication, Administered medications, administering medication, administering medications, administering the proper medications, Administers prescribed medications,, administration of medication, Administration Of Medications, Administration of prescribed medication, drug management, Drug Therapy Management, Managed prescription, managing medications, Medication Administration, Medication Administration System, Medication Administration Systems, Medication Management Process, Medication Management Strategy, Medication Mgmt., Medication Therapy Management, Medication Therapy Mgmt, Medication-Administration, Medication-Management, medicine use review, prescription management, Safe administration, Safe administration of medication",
                "FormattedName": "Medication Management",
                "Evidence": "SkillSection",
                "LastUsed": "",
                "ExperienceInMonths": 0
            },
            {
                "Type": "OperationalSkill",
                "Skill": "Radiology",
                "Ontology": "Health Care and Social Assistance>Radiologic Technologists>Medical Terminology>Medical Imaging",
                "Alias": "clinical imaging analysis, clinical imaging method, clinical imaging methods, clinical imaging technique, Clinical Imaging Techniques, clinical radiology, Diagnostic Imaging, Diagnostic Radiology, diagnostic radiology procedures, Diagnostic-Radiology, Imaging Medical, interpret medical images, Medical Image Processing, Medical Imaging Management, Medical Imaging Operations, medical imaging procedures, Medical Imaging Process, Medical Imaging Technique, Medical-Imaging, PubHlth Medical Imaging, radiologic technology, Radiological, radiological procedures, Radiology, Radiology Diagnostic, radiology for medical diagnoses, radiology for medical diagnosis, Radiology Imaging, X-Ray Diagnostic",
                "FormattedName": "Medical Imaging",
                "Evidence": "ExperienceSection",
                "LastUsed": "03/03/2023",
                "ExperienceInMonths": 71
            },
            {
                "Type": "OperationalSkill",
                "Skill": "Prescribing Medication",
                "Ontology": "Health Care and Social Assistance>Medical Transcriptionists>Prescribe Medication",
                "Alias": "arranging prescription refills, Check Information On Prescriptions, dispensing information, Medical Prescription, prescribe health care products, prescribe healthcare product, Prescribe Healthcare Products, prescribe medications, Prescribe-Healthcare Products, Prescribe-Healthcare-Products, Prescribe-Medication, Prescribing Medication, Prescribing Medications, write a prescription for healthcare products, write prescription for health care products",
                "FormattedName": "Prescribe Medication",
                "Evidence": "ExperienceSection",
                "LastUsed": "03/03/2023",
                "ExperienceInMonths": 71
            },
            {
                "Type": "OperationalSkill",
                "Skill": "Providing Emotional Support",
                "Ontology": "Health Care and Social Assistance>Orderlies>Emotional Support",
                "Alias": "Give Emotional Support, Giving emotional support, Providing emotional support",
                "FormattedName": "Emotional Support",
                "Evidence": "ExperienceSection",
                "LastUsed": "31/03/2017",
                "ExperienceInMonths": 21
            },
            {
                "Type": "OperationalSkill",
                "Skill": "Pathology",
                "Ontology": "Health Care and Social Assistance>Speech-Language Pathologists>Pathology",
                "Alias": "Clinical Pathology, Clinical Pathology Management, Clinical-Pathology, Laboratory Medicine, Laboratory-Medicine, Patho-logy",
                "FormattedName": "Pathology",
                "Evidence": "ExperienceSection",
                "LastUsed": "03/03/2023",
                "ExperienceInMonths": 71
            },
            {
                "Type": "OperationalSkill",
                "Skill": "Manage Practice Staff",
                "Ontology": "Finance and Insurance>Human Resources Specialists>Staff Management",
                "Alias": "global staff management, manage practice staff, Manage Staff, Managed Staff, management of employees, Management of staffing schedule, managing staff, Managing staffing, Staff Administration, Staff Mgmt, Staff Mgmt., Staff Oversight, Staff-Management, Staffing Management, Staffing Mgmt, Technical Staff management",
                "FormattedName": "Staff Management",
                "Evidence": "SkillSection",
                "LastUsed": "",
                "ExperienceInMonths": 0
            },
            {
                "Type": "OperationalSkill",
                "Skill": "Maintaining Confidentiality",
                "Ontology": "Information>Data Processing, Hosting, and Related Services>Data Confidentiality",
                "Alias": "Customer Data Confidentiality, Data-Confidentiality, handle confidential information, handle conﬁdential information, Handling Conﬁdential Information, maintain confidentiality, maintaining confidentiality, Maintaining Data Confidentiality, Managing data confidentiality",
                "FormattedName": "Data Confidentiality",
                "Evidence": "ExperienceSection",
                "LastUsed": "03/03/2023",
                "ExperienceInMonths": 71
            }
        ],
        "Experience": "April 2017 - Present\t\t \r Medical Doctor ,Golden Valley Medical Groups, Syracuse, NY  \r Performing accurate and thorough patient assessment and diagnosis as well as providing high-quality, individualized, complete and timely medical care to patients consistent with best healthcare practices, policies, and procedures \r Providing effective treatment as well as prescribing medication for basic health conditions like physical injuries or minor abrasions, infections, cold or related diseases in adults and children Prescribing radiology and pathology tests as needed, and evaluating patients' conditions Providing guidance and direction to physician assistants, students, nurse practitioners, and other healthcare staff as and when needed Conducting daily patient rounds to monitor recovery and progress as well as following up with outpatients on a weekly basis Participating in the development of patient care protocols as well as completing and maintaining confidentiality of electronic health records, including medical charts as per healthcare standards and policies \r  \r July 2015 - March 2017  \r Junior Medical Doctor Pro-Health Medical Care, Syracuse, NY \r Provided direct medical care and treatment to patients based on medical histories, physical examination or screening evaluations as well as referred them for specialty care and hospitalization in emergency or serious medical cases Built and maintained strong relationship with patients and their families by providing emotional support as well as  \r through proper education about course of treatment, medication, and disease prevention \r Reviewed medical policies, procedures, and protocols as well as attended health promotion and community service programs Ordered diagnostic procedures and interpreted laboratory tests needed for treatment as well as documented patients' diagnosis and treatment",
        "SegregatedExperience": [
            {
                "Employer": {
                    "EmployerName": "Golden Valley Medical Groups",
                    "FormattedName": "",
                    "ConfidenceScore": 6
                },
                "JobProfile": {
                    "Title": "Medical Doctor",
                    "FormattedName": "Junior Medical Doctor",
                    "Alias": "Jr Medical Doctor, Jr. Doctor, Junior Doctor, Junior Level Medical Doctor, Junior Physician, Medical Doctor Jr., Medical Doctor Junior, Medical Jr. Doctor",
                    "RelatedSkills": [],
                    "ConfidenceScore": 8
                },
                "Location": {
                    "City": "Syracuse",
                    "State": "NY",
                    "StateIsoCode": "US-NY",
                    "Country": "USA",
                    "CountryCode": {
                        "IsoAlpha2": "US",
                        "IsoAlpha3": "USA",
                        "UNCode": "840"
                    }
                },
                "JobPeriod": "April 2017 - till",
                "FormattedJobPeriod": "04/2017 to till",
                "StartDate": "01/04/2017",
                "EndDate": "03/03/2023",
                "IsCurrentEmployer": "true",
                "JobDescription": "Performing accurate and thorough patient assessment and diagnosis as well as providing high-quality, individualized, complete and timely medical care to patients consistent with best healthcare practices, policies, and procedures \n Providing effective treatment as well as prescribing medication for basic health conditions like physical injuries or minor abrasions, infections, cold or related diseases in adults and children Prescribing radiology and pathology tests as needed, and evaluating patients' conditions Providing guidance and direction to physician assistants, students, nurse practitioners, and other healthcare staff as and when needed Conducting daily patient rounds to monitor recovery and progress as well as following up with outpatients on a weekly basis Participating in the development of patient care protocols as well as completing and maintaining confidentiality of electronic health records, including medical charts as per healthcare standards and policies",
                "Projects": [{ "UsedSkills": "", "ProjectName": "", "TeamSize": "" }]
            },
            {
                "Employer": {
                    "EmployerName": "Pro-Health Medical Care",
                    "FormattedName": "",
                    "ConfidenceScore": 10
                },
                "JobProfile": {
                    "Title": "Junior Medical Doctor",
                    "FormattedName": "Junior Medical Doctor",
                    "Alias": "Jr Medical Doctor, Jr. Doctor, Junior Doctor, Junior Level Medical Doctor, Junior Physician, Medical Doctor Jr., Medical Doctor Junior, Medical Jr. Doctor",
                    "RelatedSkills": [],
                    "ConfidenceScore": 10
                },
                "Location": {
                    "City": "Syracuse",
                    "State": "NY",
                    "StateIsoCode": "US-NY",
                    "Country": "USA",
                    "CountryCode": {
                        "IsoAlpha2": "US",
                        "IsoAlpha3": "USA",
                        "UNCode": "840"
                    }
                },
                "JobPeriod": "July 2015 - March 2017",
                "FormattedJobPeriod": "07/2015 to 03/2017",
                "StartDate": "01/07/2015",
                "EndDate": "31/03/2017",
                "IsCurrentEmployer": "false",
                "JobDescription": "Provided direct medical care and treatment to patients based on medical histories, physical examination or screening evaluations as well as referred them for specialty care and hospitalization in emergency or serious medical cases Built and maintained strong relationship with patients and their families by providing emotional support as well as \n through proper education about course of treatment, medication, and disease prevention \n Reviewed medical policies, procedures, and protocols as well as attended health promotion and community service programs Ordered diagnostic procedures and interpreted laboratory tests needed for treatment as well as documented patients' diagnosis and treatment",
                "Projects": [{ "UsedSkills": "", "ProjectName": "", "TeamSize": "" }]
            }
        ],
        "CurrentEmployer": "Golden Valley Medical Groups",
        "JobProfile": "Medical Doctor",
        "WorkedPeriod": {
            "TotalExperienceInMonths": "93",
            "TotalExperienceInYear": "7.9",
            "TotalExperienceRange": "5-8 YEAR"
        },
        "GapPeriod": "",
        "AverageStay": "46",
        "LongestStay": "72",
        "Summary": "Adept medical doctor with eight solid years of practice experience. Dedicated to exemplary patient outcomes and following all necessary medical procedures with the use of the latest industry equipment and technology. Strong focus on listening to and addressing patient concerns and answering all questions in terms patients can easily understand. Willingness to work with all members of the medical team and listen to their suggestions and input to improve results and maximize patient satisfaction. Specialized as\n\na general internist during residency, providing me with knowledge of a range of health issues that impact internal organs.",
        "ExecutiveSummary": "Johan has an experience in the domain of 'Health Care and Social Assistance', particularly in the sub-domain of 'Physicians and Surgeons. The candidate has been working as a Medical Doctor at Golden Valley Medical Groups for the last 6.0 years. ",
        "ManagementSummary": "Johan doesn't have any management level experience in the resume.",
        "Coverletter": "Cover Letter\rI am writing to apply for your Medical Doctor position at Sunnyview Medical Clinic. I am a doctor with over four years of experience working in a clinic setting. In my current position as a Medical Doctor with the Golden Valley Medical Groups I see numerous patients each day assess symptoms provide diagnoses and treatment options based on my conclusions. I am an astute observer with exemplary diagnostic skills.\rMy energetic but calming demeanour puts my patients at ease. I am a strong communicator and believe in providing patients with information regarding their health as well as allowing them time to ask questions. I have received praise from both patients and administrators on my approachable nature and genuine concern. I enjoy collaboration and have no problem with asking for assistance or referring patients for a second opinion when needed.\rI am confident you'll find I possess the skills dedication and personal characteristics to make a positive contribution to the staff as a Medical Doctor with Sunnyview Medical Clinic. Please contact me at a time that is convenient for you to further discuss my qualifications and what I have to offer. Thank you so much for your consideration and I look forward to speaking with you.\rSincerely\rJohn Marc Doe",
        "Publication": "Marcus LS, Carlin N, Carlin, R : Carbon Dioxide Fractional Laser Used to Treat Actinic Damage and Actinic Keratosis. Cosmetic Dermatology. 2010 \r  \r Carlin, N,  Marcus, LS, Carlin, R.\t  Gourgerot-Charteaud Syndrome Treated with Isotretinoin and Literature Review. The Journal of Clinical and Aesthetic Dermatology. 2010 \r  \r Carlin, N, Marcus, LS, Carlin, R. Rare Malignant Neoplasm of the Leg : Diagnosis and Management Dilemma. The Journal of Clinical and Aesthetic Dermatology. 2010",
        "SegregatedPublication": [],
        "CurrentLocation": [
            {
                "City": "Syracuse",
                "State": "NY",
                "StateIsoCode": "US-NY",
                "Country": "USA",
                "CountryCode": {
                    "IsoAlpha2": "US",
                    "IsoAlpha3": "USA",
                    "UNCode": "840"
                }
            }
        ],
        "PreferredLocation": [],
        "Availability": "2 Month",
        "Hobbies": "When Im not practicing medicine, I enjoy flying drones, crocheting, and sewing to maintain manual dexterity. I also enjoy writing short stories when I have the time, and I offer free medical services down at the community center every weekend. I've recently taken up meditation, which has improved my focus at work and my personal relationships.",
        "Objectives": "Looking for position of Jr.Doctor in reputed hospital to learn about new skills  \r and to gain more knowledge to enhance my personal growth.",
        "Achievements": "Chief Cardiology Fellow Recognition Award, Seton Hall University June 2009 \r   \r Chief Medical Resident Recognition Award ,Seton Hall University June 2000",
        "SegregatedAchievement": [],
        "References": "Bernie Noronha \r Operations Manager of GPI Automotive Division \r M : 202-816-6364 \r  \r Andrew Gill \r National Sales Manager of GPI Sports & Fitness Division \r  \r M : 202- 734- 4228",
        "CustomFields": "Parsing Time : 1208ms",
        "EmailInfo": {
            "EmailTo": " ",
            "EmailBody": " ",
            "EmailReplyTo": " ",
            "EmailSignature": " ",
            "EmailFrom": " ",
            "EmailSubject": " ",
            "EmailCC": " "
        },
        "Recommendations": [
            {
                "PersonName": "",
                "CompanyName": "",
                "Relation": "",
                "PositionTitle": "",
                "Description": ""
            }
        ],
        "DetailResume": "#TopInformation# \nMr John Marc Doe\nTelephone : 202-819-6470 , Mobile : 3125444306  \n  johnndoee@gmail.com\n\nCAREER OBJECTIVE\nLooking for position of Jr.Doctor in reputed hospital to learn about new skills \nand to gain more knowledge to enhance my personal growth.\n\nProfessional Summary\nAdept medical doctor with eight solid years of practice experience. Dedicated to exemplary patient outcomes and following all necessary medical procedures with the use of the latest industry equipment and technology. Strong focus on listening to and addressing patient concerns and answering all questions in terms patients can easily understand. Willingness to work with all members of the medical team and listen to their suggestions and input to improve results and maximize patient satisfaction. Specialized as\n\na general internist during residency, providing me with knowledge of a range of health issues that impact internal organs.\n\nPersonal Data\n\nAddress\t\t\t\n437 William Way\t\nSyracuse NY, USA 13203\t\t\nPermanent Address\n124 Main Street, San Francisco, CA , USA 94123\n\nFull Name : Johan Marc Doe\nMarital Status : Single\nGender : Male\nFather name- Davis Carlin\nMothers name- Merry Carlin\nCurrent Salary- 200000 $\nExpected Salary- 300000 $\nDate of Birth- 4/5/1995\n  Nationality- USA\nCurrent Location : Syracuse, NY, USA\nAvailability : 2 Month\nVisa : H1\nPassport Details : \nPassport Number : 3125884\nDate of Issue : 18 Sept. 2007\nExpiry Date : 5 June 2022\nPlace of Issue : United states of America\nPan No : ADPAR7787T\nSocial Security No : 27956236\nLicenses : USA Medical license\nLinkedIn ID\nUrl : https://www.linkedin.com/in/john-doe-50652a15/\nFacebook ID\nUrl : https://www.facebook.com/john-doe/\nTwitter ID\nUrl : https://twitter.com/doejohan\n\nLanguages\n English (fluent) \nSpanish (proficient) \nFrench (proficient) \n\n\t\n\nEDUCATION\n2007-2011\t\tDoctor of Medicine 78%\nSt. George's University School of Medicine\n\t\t\tGrenada, West Indies\n\t\t\t \n2002-2006\t\tBachelor of Sciences in Biology, Chemistry 89%\nFairleigh Dickinson University\nMadison, NJ\n\t\t\t\n\nSkills\n\n-Proven and effective communication skills with patients, families, and other medical professionals. -Leadership abilities to lead and manage practice staff in providing patients with quality care. -Highly organized, which allows me to keep appointments, records, and patient details in order. -Able to quickly and properly diagnose patient conditions in emergency situations to ensure they receive the treatment they need as soon as possible under controlled conditions. -Detailed oriented, which reduces mistakes made in patient treatment, diagnosis, and medication administration.\n\nWORK EXPERIENCE\n\nApril 2017 - Present\t\t\nMedical Doctor ,Golden Valley Medical Groups, Syracuse, NY \nPerforming accurate and thorough patient assessment and diagnosis as well as providing high-quality, individualized, complete and timely medical care to patients consistent with best healthcare practices, policies, and procedures\nProviding effective treatment as well as prescribing medication for basic health conditions like physical injuries or minor abrasions, infections, cold or related diseases in adults and children Prescribing radiology and pathology tests as needed, and evaluating patients' conditions Providing guidance and direction to physician assistants, students, nurse practitioners, and other healthcare staff as and when needed Conducting daily patient rounds to monitor recovery and progress as well as following up with outpatients on a weekly basis Participating in the development of patient care protocols as well as completing and maintaining confidentiality of electronic health records, including medical charts as per healthcare standards and policies\n\nJuly 2015 - March 2017 \nJunior Medical Doctor Pro-Health Medical Care, Syracuse, NY\nProvided direct medical care and treatment to patients based on medical histories, physical examination or screening evaluations as well as referred them for specialty care and hospitalization in emergency or serious medical cases Built and maintained strong relationship with patients and their families by providing emotional support as well as \nthrough proper education about course of treatment, medication, and disease prevention\nReviewed medical policies, procedures, and protocols as well as attended health promotion and community service programs Ordered diagnostic procedures and interpreted laboratory tests needed for treatment as well as documented patients' diagnosis and treatment\n\nHobbies and Interests\n\nWhen I'm not practicing medicine, I enjoy flying drones, crocheting, and sewing to maintain manual dexterity. I also enjoy writing short stories when I have the time, and I offer free medical services down at the community center every weekend. I've recently taken up meditation, which has improved my focus at work and my personal relationships.\n\nCERTIFICATIONS\n2009\t-\tUSMLE Certified\n2010\t-\tUSMLE CS Certified\n\t\nPUBLICATIONS\n\nMarcus LS, Carlin N, Carlin, R : Carbon Dioxide Fractional Laser Used to Treat Actinic Damage and Actinic Keratosis. Cosmetic Dermatology. 2010\n\nCarlin, N,  Marcus, LS, Carlin, R.\t  Gourgerot-Charteaud Syndrome Treated with Isotretinoin and Literature Review. The Journal of Clinical and Aesthetic Dermatology. 2010\n\nCarlin, N, Marcus, LS, Carlin, R. Rare Malignant Neoplasm of the Leg : Diagnosis and Management Dilemma. The Journal of Clinical and Aesthetic Dermatology. 2010\n\nAwards : \n\nChief Cardiology Fellow Recognition Award, Seton Hall University June 2009\n \nChief Medical Resident Recognition Award ,Seton Hall University June 2000\n\nReferences \n\nBernie Noronha\nOperations Manager of GPI Automotive Division\nM : 202-816-6364\n\nAndrew Gill\nNational Sales Manager of GPI Sports & Fitness Division\n\nM : 202- 734- 4228",
        "CandidateImage": { "CandidateImageData": "", "CandidateImageFormat": "" },
        "TemplateOutput": {
            "TemplateOutputFileName": "",
            "TemplateOutputData": ""
        },
        "ApiInfo": {
            "Metered": "No",
            "CreditLeft": "47",
            "AccountExpiryDate": "16/03/2023 23:59:00.0",
            "BuildVersion": "8.0.0.2023.03.01"
        }
    }
};
//# sourceMappingURL=resume.service.js.map