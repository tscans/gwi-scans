
import { Request, Response } from 'express';
import { structure } from './structures/economicAssumptions';

export enum EMonthToId{
    January = 1,
    February = 2,
    March = 3,
    April = 4,
    May = 5,
    June = 6,
    July = 7,
    August = 8,
    September = 9,
    October = 10,
    November = 11,
    December = 12
}

export const monthListArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

export interface IIncomePercentChanged{
    id:string;
    percentChangeFromBase: number;
    dateIdChange: number;
    isLinearRaise: boolean;
}

export interface IIncome{
    id:string;
    baseIncome:number;
    incomePercentChangedList:IIncomePercentChanged[];
    jobId:string;
    isCurrent:boolean;
    dateIdStart:number;
    dateIdEnd:number;
    customJobTitle:string;
    geoState:string;
    retirementContributionPercent:number;
    employerMatches:boolean;
    employerMatchesPercent:number;
    employerMatchesUpToPercent:number;
}

export enum IAssetType{
    stocks = "Stocks/Investments",
    realEstate = "Real Estate",
    cars = "Cars, Boats, and Other Vehicles",
    art = "Artwork and Collectibles",
    patents = "Patents, Copyrights, Trademarks",
    business = "Businesses and IP"
}

export interface IAssets{
    id:string;
    assetName:string;
    assetType:IAssetType;
    interestRate:number;
    originalBalance:number;
    currentBalance:number;
    dateIdStart:number;
    dateIdEnd:number;
    isCurrent:boolean;
    shouldTaxCapitalGainLiquify:boolean;
}

export interface IBudgets{
    id:string;
    food:number;
    health:number;
    utilities:number;
    entertainment:number;
    auto:number;
    other:number;
    isCurrent:boolean;
    dateIdStart:number;
    dateIdEnd:number;
    budgetAdjustmentName:string;
}

export enum ELiabilityType{
    auto = "Auto Loan",
    student = "Student/Education Loan",
    personal = "Personal Loan",
    creditCard = "Credit Card Loan",
    smallBusiness = "Small Business Loan",
    housing = "Housing Loan",
    other = "Other Loan"
}

export enum EEducationLevel{
    highSchool = "High School",
    someCollege = "Some College",
    associates = "Associates",
    bachelors = "Bachelors",
    masters = "Masters",
    doctorate = "Doctorate"
}

export interface ILiabilities{
    id:string;
    loanName:string;
    loanAmount:number;
    interestRate:number;
    monthlyPayment:number;
    loanType:ELiabilityType;
    dateIdStart:number;
    dateIdEnd:number;
}

export interface IHousing{
    id:string;
    houseName:string;
    isRenting:boolean;
    rentCost:number;
    houseValue:number;
    currentHouseValue:number;
    houseValueInterestRate:number;
    downPayment:number;
    loanInterestRate:number;
    loanAmount:number;
    loanLengthMonths:number;
    loanMonthlyPayment:number;
    propertyTaxesYearly:number;
    hoiFees:number;
    hoaFees:number;
    pmiFees:number;
    monthlyPayment:number;
    dateIdRentStart:number;
    dateIdRentEnd:number;
    dateIdPurchaseStart:number;
    dateIdSellEnd:number;
    isRentingForever:boolean;
    isOwningForever:boolean;
}

export enum EUserAccountType{
    investing = "Investing",
    cashSavings = "Cash and Savings",
    retirement = "Retirement",
    retirementAfterTax = "Retirement After Taxes"
}

export interface IHistoricalValueMarker{
    value:number;
    dateId:number;
    id:string;
}

export enum EAccountContributionType{
    percentOfIncome = "Percent of Income",
    specifiedAmount = "Specified Amount",
    percentOfProfit = "Percent of Profit"
}
export interface IUserAccounts{
    id:string;
    userAccountName:string;
    accountType:EUserAccountType;
    accountValue:number;
    projectedInvestmentRate:number;
    isConnectedToRealAccount:boolean;
    realAccountId:string;
    isIncludedInCalculations:boolean;
    lastUpdatedDateId:number;
    historicalValueMarkers:IHistoricalValueMarker[];
    contributionType: EAccountContributionType;
    percentOfIncome:number;
    specifiedAmount:number;
    percentOfProfit:number;
}

export interface IEconomicAssumptions{
    inflationRate:number;
    //defaults if not otherwise specified
    retirementInvestmentRate:number;
    generalInvestmentRate:number;
    taxRates:boolean;//eh maybe, adding boolean for now.
    isMarried:boolean;
    dateIdMarriage:number;
    userBirthDateId:number;
    preferredPumaCode:string;
    preferredRetirementDateId:number;
    socialSecurityBenefitsAge:number;
    userEducationLevel:EEducationLevel;
}

export interface IExpenses{
    id:string;
    isRepeating:boolean;
    expenseDateId:number;
    isRepeatingIndefinite:boolean;
    repeatingMonthId:number[];
    repeatingDateIdStart:number;
    repeatingDateIdEnd:number;
    amountExpensed:number;
    expenseName:string;
}

export interface IEarnings{
    id:string;
    isRepeating:boolean;
    earningDateId:number;
    isRepeatingIndefinite:boolean;
    repeatingMonthId:number[];
    repeatingDateIdStart:number;
    repeatingDateIdEnd:number;
    amountEarned:number;
    earningName:string;
    shouldBeTaxed:boolean;
}

export interface IUserFuturePlans{
    id:string;
    dateId:number;
    futurePlanName:string;
    notes:string;
    futurePlanType:string;
    attachedIds:string[];
}

export interface IFinancialPlan{
    income:IIncome[];
    children:IChildren[];
    budgets:IBudgets[];
    liabilities:ILiabilities[];
    assets:IAssets[];
    housing:IHousing[];
    expenses:IExpenses[];
    earnings:IEarnings[];
    userAccounts:IUserAccounts[];
    userFuturePlans:IUserFuturePlans[];
    economicAssumptions:IEconomicAssumptions;
}

export const createInitialTimeline = (
    birthDateId?:number
) : IFinancialPlan => ({
    income:[],
    children:[],
    budgets: [],
    liabilities: [],
    housing: [],
    assets: [],
    expenses: [],
    earnings: [],
    userAccounts: [],
    userFuturePlans: [],
    economicAssumptions: structure(birthDateId)
});

export const createInitialMetaPlan = (
        ownerId:string,
        firstName:string,
        lastName:string,
        planId:string
    ) : IMetaPlans => ({
    planId,
    ownerId,
    createdAt:(new Date()).getTime(),
    lastEdited:(new Date()).getTime(),
    isShared:false,
    sharedWith:[],
    firstName,
    lastName,
    isPublic:false,
    isAllowedToDuplicate:false,
    planName:"My Plan",
    description:""
});

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
    collegeTuition:number;
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
    birthday:number;
    emailVerified:boolean;
    createdAt: number;
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

export interface ISignUpBody{
    email:string;
    password:string;
    firstName:string;
    lastName:string;
    birthday:number;
}