import { AnyTxtRecord } from 'dns';
import { Request, Response } from 'express';


export interface IDemographics{
    dob:string | null;
    sex:string | null;
    race:string | null;
    state:string | null;
    education:string | null;
    relationship:ERelationship;
    zipCode:string | null;
}

export enum ERelationship{
    Single = "Single",
    Marries = "Married"
}

export interface IAssetContribution{
    id:string;
    isPreTaxDeduction:boolean;
    assetId:string;
    contributionIsPercent:boolean;
    percent:number;
    flatAmount:number;
}

export interface IFamilyMembers{
    id:string;
    name:string;
    birthday:number;
    sex:string;
    race:string;
    education:string;
}

export interface IIncome{
    id:string;
    baseIncome:number;
    bonus:number;
    equityInvestment:number;
    jobName:string;
    jobSalaryId:string;
    isCurrent:boolean;
    dateIdStart:number;
    dateIdEnd:number | null;
    customJobTitle:string;
    geoState:string | null;
    retirementContributionPercent:number;
    employerMatches:boolean;
    employerMatchesPercent:number;
    employerMatchesUpToPercent:number;
}

// export const generateDefaultIncome = (id:string,memberOwnerId:string) => ({
//     id,
//     memberOwnerId,
//     income:40000,
//     jobName:"",
//     jobSalaryId:"",
//     isCurrent:true,
//     startMonth:null,
//     endMonth:null,
//     startYear:null,
//     endYear:null,
//     customJobTitle:"My Job",
//     geoState:null,
//     assetContributions:[]
// }) as IIncome

export interface IAssets{
    id:string;
    investmentName:string;
    investmentType:string;
    interestRate:number;
    currentBalance:number;
    dateIdStart:number;
    dateIdEnd:number;
    isCurrent:boolean;
}

export interface IBudgets{
    id:string;
    food:number;
    health:number;
    utilities:number;
    entertainment:number;
    housing:number;
    auto:number;
    other:number;
    isCurrent:boolean;
    dateIdStart:number;
    endIdStart:number | null;
    budgetAdjustmentName:string;
}

export interface ILiabilities{
    id:string;
    loanName:string;
    loanAmount:number;
    interestRate:number;
    monthlyPayment:number;
    loanType:string;
    dateIdStart:number;
    dateIdEnd:number;
}

export interface IPlan{
    //for family members monitoring
    familyMembers:IFamilyMembers[];
    //income to build from
    income:IIncome[];
    //creating areas to pool
    assets:IAssets[];
    //simple budget systems
    budgets:IBudgets[];
    //large expenses and moving money
    //transfers:ITransfers[];
    //loans
    liabilities:ILiabilities[];
}

export interface IUserAccounts{
    id:string;
    cashAccounts:number;
    investmentsBalance:number;
    retirementInvestmentBalance:number;
    generalInvestmentRate:number;
    retirementInvestmentRate:number;
    dateId:number;
    isCurrent:boolean;
}

export interface IEconomicAssumptions{
    autoInvestRule:/*for auto investing cash over certain value */boolean;
    autoInvestLimitAmount:number;
    inflationRate:number;
    //future option for inflation rate modifier for lifetime
    taxRates:boolean;//eh maybe, adding boolean for now.
    dateIdMarriage:number | null;
}

export interface IExpenses{
    id:string;
    isRepeating:boolean;
    expenseDateId:number;
    repeatingMonthId:number;
    repeatingDateIdStart:number;
    repeatingDateIdEnd:number;
    amountExpensed:number;
    expenseName:string;
}

export interface IEarnings{
    id:string;
    isRepeating:boolean;
    earningDateId:number;
    repeatingMonthId:number;
    repeatingDateIdStart:number;
    repeatingDateIdEnd:number;
    amountEarned:number;
    earningName:string;
}

export interface IFinancialPlan{
    income:IIncome[];
    children:IChildren[];
    budgets:IBudgets[];
    liabilities:ILiabilities[];
    assets:IAssets[];
    expenses:IExpenses[];
    earnings:IEarnings[];
    userAccounts:IUserAccounts[];
    economicAssumptions:IEconomicAssumptions;
}

export enum EPlanItems {
    familyMembers = "familyMembers",
    income = "income",
    assets = "assets",
    budgets = "budgets",
    transfers = "transfers",
    liabilities = "liabilities"
}

// demographics:IDemographics;
// budgetClaims:IBudgetClaims[];

// employmentAndSalary:IEmploymentAndSalary[];
// housing:IHousing[];

// loans:ILoan[];
// investments:IInvestment[];
// divestments:IDivestment[];

// children:IChildren[];
// automobiles:IAutomobile[];
// educationList:IEducation[];
// largePayments:ILargePayments[];
// businesses:IBusinesses[];


export enum ELivingSituation{
    own = "Own",
    ownWithLoan = "Own with loan",
    planToOwn = "Plan to own",
    rent = "Rent",
    liveAtHome = "Live at Home"
}

//should be option for one time, recurring time
//allow user to pick the investment it comes from, set percent or exact amount
//upon deleting an Investment, it needs to check for all divestments that have access to it.
//


export interface IChildren{
    id:string;
    childName:string;
    birthDateId:number;
    initialChildExpenses:number;
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

export interface IDateFittedPlan{
    dateIndex:any;
    planIndex:any;
}

export interface IPEId{
    editType:string | null;
    editId:string | null;
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
    familyMembers:[],
    income:[],
    assets:[],
    budgets:[],
    transfers:[],
    liabilities:[]
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
