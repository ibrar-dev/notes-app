import { Language } from "../../languages/entities/language.entity";
import { Address } from './address.entity';
import { Email } from './email.entity';
import { Phone } from './phone.entity';
import { Salary } from './salary.entity';
import { Website } from './website.entity';
export declare class Resume {
    id: string;
    resumeFileName: string;
    languages: Language[];
    phone: Phone[];
    email: Email[];
    website: Website[];
    currentSalary: Salary[];
    expectedSalary: Salary[];
    address: Address[];
}
