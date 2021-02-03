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

export interface IPlanInterableObjects extends IEmploymentAndSalary, IHousing, ILoan, IInvestment, 
IChildren, IAutomobile, IEducation, ILargePayments, IBusinesses{}

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
    endMonth:number | null;
    startYear:number;
    endYear:number | null;
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
    endMonth:number | null;
    endYear:number | null;
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
    endMonth:number | null;
    endYear:number | null;
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
    endMonth:number | null;
    endYear:number | null;
    periodType:EPaymentPeriodType;
    paymentAmount:number;
    isPaying:boolean;
}

export interface IBusinesses{
    id:string;
    businessName:string;
    startMonth:number;
    startYear:number;
    isCurrent:boolean;
    endMonth:number | null;
    endYear:number | null;
    
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

export interface IZipData{
    city: string;
    county: string;
    geoId: string;
    housingUnits: number;
    laborForceOverAge16: number;
    meanError: number;
    meanIncome: number;
    medIncAge25Under: number;
    medIncAge25UnderErr: number;
    medIncAge65Up: number;
    medIncAge65UpErr: number;
    medIncAge2544: number;
    medIncAge2544Err: number;
    medIncAge4564: number;
    medIncAge4564Err: number;
    medianAge: number;
    medianError: number;
    medianHouseholdIncome: number;
    medianUnitValue: number;
    numFamilies: number;
    numH2550: number;
    numH5075: number;
    numH75100: number;
    numH100150: number;
    numH150200: number;
    numHOver200: number;
    numHUnder25: number;
    numHouseholds: number;
    numHouseholds2: number;
    numMarried: number;
    numMarriedWithChildren: number;
    numNonFamilies: number;
    numSingleParentFamilies: number;
    numSingleParentWithChildren: number;
    perCapitaIncome: number;
    perCapitaIncomeErr: number;
    percBachelors: number;
    percGraduate: number;
    percHighSchool: number;
    percNoDiploma: number;
    percSomeCollege: number;
    percentHouseholds200k: number;
    percentHouseholds200kErr: number;
    popAgeOver25: number;
    popAsian: number;
    popBlack: number;
    popDensity: number;
    popF09: number;
    popF70Up: number;
    popF1019: number;
    popF2029: number;
    popF3039: number;
    popF4049: number;
    popF5059: number;
    popF6069: number;
    popHispanic: number;
    popIslander: number;
    popM09: number;
    popM70Up: number;
    popM1019: number;
    popM2029: number;
    popM3039: number;
    popM4049: number;
    popM5059: number;
    popM6069: number;
    popNative: number;
    popOther: number;
    popTwo:number;
    popWhite: number;
    population: number;
    population2: number;
    povertyFamilyPercent: number;
    povertyHouseholds: number;
    unemploymentRate: number;
    usState: string;
    zipCode: string;
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

export const demographicCategoryEntries = {
    age:["babyBoomer","generationX","millennial","silent"],
    race:["white","black","hispanic","indian","asian","other"],
    school:["high","highGrad","someCollege","bach","master"],
    sex:["1","2"]
}


export enum EwsjCategories{
    age = "age",
    race = "race",
    school = "school",
    sex = "sex"
}

export interface IwsjQuery{
    age:string | null;
    race:string | null;
    school:string | null;
    sex:string | null;
}

export interface IwsjResult{
    percentiles:number[];
    sample:number;
    id:string;
    minIncome:number;
    maxIncome:number;
}
