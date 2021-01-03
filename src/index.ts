import { Request, Response, NextFunction } from 'express';

export interface IDemographics{
    dob:string | null;
    sex:string | null;
    race:string | null;
    education:string | null;
    relationship:string | null;
    zipCode:string | null;
}

export interface IPlan{
    demographics:IDemographics;
    
    employmentAndSalary:IEmploymentAndSalary[];
    housing:IHousing[];
    
    loans:ILoan[],
    investments:IInvestment[]

    children:IChildren[],
    automobiles:IAutomobile[],
    educationList:IEducation[],
    largePayments:ILargePayments[],
    businesses:IBusinesses[]
}

export interface IPlanIteratable{
    employmentAndSalary:IEmploymentAndSalary[];
    housing:IHousing[];
    
    loans:ILoan[],
    investments:IInvestment[]

    children:IChildren[],
    automobiles:IAutomobile[],
    educationList:IEducation[],
    largePayments:ILargePayments[],
    businesses:IBusinesses[]
}

export enum EHousing{
    livingSituation = "livingSituation",
    housingSpending = "housingSpending",
    monthlyHousingSpending = "monthlyHousingSpending",
    isCurrent = "isCurrent",
    startMonth = "startMonth",
    endMonth = "endMonth",
    startYear = "startYear",
    endYear = "endYear",
    homePrice = "homePrice",
    downPayment = "downPayment",
    lengthOfLoan = "lengthOfLoan",
    interestRate = "interestRate",
    creditScore = "creditScore",
    propertyTax = "propertyTax",
    additionalFees = "additionalFees",
    zipCode = "zipCode"
}

export enum EEmploymentAndSalary{
    id = "id",
    income = "income",
    jobName = "jobName",
    jobSalaryId = "jobSalaryId",
    isCurrent = "isCurrent",
    startMonth = "startMonth",
    endMonth = "endMonth",
    startYear = "startYear",
    endYear = "endYear",
    customJobTitle = "customJobTitle"
}

export enum ELoan{
    id = "id",
    loanName = "loanName",
    loanAmount = "loanAmount",
    interestRate = "interestRate",
    timeInRepayment = "timeInRepayment",
    monthlyPayment = "monthlyPayment",
    loanType = "loanType"
}

export enum EPlanItems {
    demographics = "demographics",
    employmentAndSalary = "employmentAndSalary",
    housing = "housing",
    loans = "loans",
    investments = "investments",
    children = "children",
    automobiles = "automobiles",
    educationList = "educationList",
    largePayments = "largePayments",
    businesses = 'businesses'
}

export interface IHousing{
    id:string;
    livingSituation:string;
    monthlyHousingSpending: number;
    isCurrent:boolean;
    startMonth:number;
    endMonth:number;
    startYear:number;
    endYear:number;
    homePrice:number;
    downPayment:number;
    lengthOfLoan:number;
    interestRate:number;
    creditScore:number;
    propertyTax:number;
    additionalFees:number;
    zipCode:string;
}

export interface IEmploymentAndSalary{
    id:string;
    income:number;
    jobName:string;
    jobSalaryId:string;
    isCurrent:boolean;
    startMonth:number;
    endMonth:number | null;
    startYear:number;
    endYear:number | null;
    customJobTitle:string;
}

export interface ILoan{
    id:string;
    loanName:string;
    loanAmount:number;
    interestRate:number;
    monthsInRepayment:number;
    monthlyPayment:number;
    loanType:string;
    startMonth:number;
    startYear:number;
}

export interface IInvestment{
    id:string;
    investmentName:string;
    investmentType:string;
    interestRate:number;
    isPercentOfPay:boolean;
    isEmployerMatching:boolean;
    percentOfPay:number;
    percentEmployerMatch:number;
    percentEmployerMatchUpTo:number;
    monthlyInvestment:number;
    currentBalance:number;
    startMonth:number;
    startYear:number;
    isCurrent:boolean;
    endMonth:number;
    endYear:number;
    isSiphon:boolean;
    isSiphonPercent:boolean;
    siphonPercent:number;
    siphonAmount:number;
}

export interface IChildren{
    id:string;
    childName:string;
    startMonth:number;
    startYear:number;
    monthlyChildCost:number;
    isPrivateSchool:boolean;
    privateTuitionK8:number;
    privateTuitionHS:number;
    ageOfSupportEnd:number;
}

export enum EVehicleType{
    Car = "Car",
    Motorcycle = "Motorcycle",
    Boat = "Boat",
    Other = "Other"
}

export enum ECantDivestEasily{
    retireAccount = "Retirenment Accounts (401k/403b)",
    roth = "Roth/Other IRA",
    bond = "Bonds",
    realEstate = "Real Estate (Not your primary home)"
}

export interface IAutomobile{
    id:string;
    vehicleName:string;
    startMonth:number;
    startYear:number;
    isCurrent:boolean;
    endMonth:boolean;
    endYear:boolean;
    vehicleType:EVehicleType;
    initialVehicleCost:number;
    interestRate:number;
    yoyDepreciation:number;
    monthsInRepayment:number;
    monthlyPayment:number;
    isPaidInFull:boolean;
    otherMonthlyAutoExpenses:number;
}

export interface IEducationOwner{
    ownerId:string;
    ownerName:string;
}

export interface IEducation{
    id:string;
    educationOwner:IEducationOwner;
    educationName:string;
    startMonth:number;
    startYear:number;
    academicPeriodsInSession:number;
    tuitionCostPerPeriod:number;
    roomAndBoardCostPerPeriod:number;
    isLoanNeeded:boolean;
    percentOfTotalCost:number;
    monthsInRepayment:number;
    interestRate:number;
}

export enum EPaymentPeriodType{
    monthly = "monthly",
    yearly = "yearly"
}

export interface ILargePayments{
    id:string;
    paymentName:string;
    paymentType:string;
    startMonth:number;
    startYear:number;
    isCurrent:boolean;
    isReoccurring:boolean;
    endMonth:boolean;
    endYear:boolean;
    periodType:EPaymentPeriodType;
    paymentAmount:number;
    isPaying:boolean;
}

export interface IBusinesses{
    id:string;
    businessName:string;
    startMonth:number;
    startYear:number;
    isCurrent:number;
    endMonth:number;
    endYear:number;
    
}

export interface ILiveValues{
    jobTitle:string | null;
    jobSalaryId:string | null;
    income:number;
}

export interface IMetaPlans{
    planId:string;
    ownerId:string;
    createdAt:number;
    lastEdited:number;
    isShared:boolean;
    sharedWith:string[];
    firstName:string;
    lastName:string;
    isPublic:boolean;
    isAllowedToDuplicate:boolean;
    planName:string;
    description:string;
}

export enum EMetaPlans{
    myPlans = "myPlans",
    sharedPlans = "sharedPlans"
}

export interface IContext{
    plan:IPlan;
    liveValues:ILiveValues;
    changePlanItem:(key:string,value:any)=>void;
    changeMultiplePlanItems:(keyValuePairs:Partial<IPlan>)=>void;
    changeMultipleLiveValues:(keyValuePairs:Partial<ILiveValues>)=>void;
}

export enum EContext{
    plan = "plan",
    liveValues = "liveValues",
    changePlanItem = "changePlanItem",
    changeMultiplePlanItems = "changeMultiplePlanItems",
    changeMultipleLiveValues = "changeMultipleLiveValues"
}

export interface IPEId{
    editType:string | null;
    editId:string | null;
}

export interface IUtil{
    bannerVisualAccessor:string;
    metaPlans:IMetaPlans[];
    selectedPlanId:string;
    powerCineModal:(cineModal:any)=>void;
    bannerVisualOpen:boolean;
    toggleBannerVisualOpen:(isOpen:boolean)=>void;
    planEditorEditingId:IPEId
    changePlanEditorEditingId:(obj:IPEId | null)=>void;
    metaPlansApiDistribution:(metaPlans:IMetaPlans[])=>void;
    downloadAndSetPlan:(selectedPlanId:string)=>void;
    saveMetaPlan:(metaPlans:IMetaPlans)=>void;
}

export enum EUtil{
    bannerVisualAccessor = "bannerVisualAccessor",
    metaPlans = "metaPlans",
    selectedPlanId = "selectedPlanId",
    powerCineModal = "powerCineModal",
    bannerVisualOpen = "bannerVisualOpen",
    toggleBannerVisualOpen = "toggleBannerVisualOpen",
    planEditorEditingId = "planEditorEditingId",
    changePlanEditorEditingId = "changePlanEditorEditingId",
    metaPlansApiDistribution = "metaPlansApiDistribution",
    downloadAndSetPlan = "downloadAndSetPlan",
    saveMetaPlan = "saveMetaPlan"
}

export interface IMatchRoutes{
    editType:string;
    editId:string;
}

//backend

export enum ERoutingType{
    post = "post",
    get = "get"
}

export interface IRouterMap{
    routingType:ERoutingType;
    routeString:string;
    routeFunction:(req:Request,res:Response)=>void;
}

export enum ECollections{
    Profiles = "Profiles",
    Plans = "Plans",
    UserPlanLists = "UserPlanLists",
    MetaPlans = "MetaPlans"
}

export interface IPlanLists{
    myPlans:string[];
}

export interface IProfile{
    email:string;
    firstName:string;
    lastName:string;
    uid:string;
}

//data structures

export const basicPlanLayout = {
    demographics:{
        dob:null,
        sex:null,
        race:null,
        education:null,
        relationship:null,
        zipCode:null
    },

    employmentAndSalary:[],
    housing:[],
    loans:[],
    investments:[],

    children:[],
    automobiles:[],
    educationList:[],
    largePayments:[],
    businesses:[]
}