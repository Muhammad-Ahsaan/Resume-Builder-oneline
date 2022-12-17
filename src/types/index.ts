export type TCVFormType =  BasicInfoType & EducationInfoType & WorkHistoryInfoType & SkillFormType

export type BasicInfoType = {
    firstName: string;
    surName: string;
    profession: string;
    city: string;
    country: string;
    postalCode: string;
    phone: string;
    email: string;
}

export type EducationInfoType = {
    schoolName:string;
    schoolLocation:string;
    degreeName:string;
    fieldofStudy:string;
    educationStartDate: Date,
    educationEndDate:Date,
}

export type WorkHistoryInfoType ={
    jobTitle: string;
    employer:string;
    jobCity: string;
    jobCountry:string;
    jobDescription:string;
    startDate: Date;
    endDate:Date;
}

export type SkillFormType = {
    skills:SkillFormAttributes[]
}

export type SkillFormAttributes = {
    id:number;
    label:string;
    checked:boolean;
    expert:boolean;
}