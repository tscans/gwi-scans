import { IHousing } from "../..";
import { getCurrentDateId, IConstraints, randomId } from "../helpers";
import { MAX_DATE, MIN_DATE, ONE_YEAR, TEN_YEARS } from "../standards";

const FIVE_YEARS = ONE_YEAR * 5;

export const structure = () : IHousing => ({
    id:randomId(),
    houseName:"My Home",
    isRenting:false,
    rentCost:1000,
    houseValue:250000,
    currentHouseValue:250000,
    houseValueInterestRate:0.02,
    downPayment:50000,
    loanInterestRate:0.03,
    loanAmount:200000,
    loanLengthMonths:360,
    loanMonthlyPayment:850,
    propertyTaxesYearly:150,
    hoiFees:100,
    hoaFees:0,
    pmiFees:0,
    monthlyPayment:1100,
    dateIdRentStart:getCurrentDateId(),
    isRentingForever:true,
    dateIdRentEnd:getCurrentDateId() + FIVE_YEARS,
    dateIdPurchaseStart:getCurrentDateId(),
    isOwningForever:true,
    dateIdSellEnd:getCurrentDateId() + FIVE_YEARS
});

export const sorter = (arr:IHousing[],reverse:boolean) =>{
    let one = reverse ? -1 : 1;
    let nOne = reverse ? 1 : -1;
    return arr.sort((a:IHousing, b:IHousing) => {
        return a.houseValue - b.houseValue ? one : nOne;
    })
}

export const constraints : IConstraints = {
    numeric:{
        rentCost:{
            min:0,
            max:3500,
            trueMax:50000,
            step:100
        },
        houseValue:{
            min:0,
            max:1500000,
            trueMax:100000000,
            step:10000
        },
        currentHouseValue:{
            min:0,
            max:1500000,
            trueMax:100000000,
            step:10000
        },
        houseValueInterestRate:{
            min:0,
            max:0.1,
            trueMax:1,
            step:0.01
        },
        downPayment:{
            min:0,
            max:1500000,
            trueMax:100000000,
            step:50000
        },
        loanInterestRate:{
            min:0,
            max:0.1,
            trueMax:1,
            step:0.01
        },
        loanAmount:{
            min:0,
            max:1500000,
            trueMax:100000000,
            step:10000
        },
        loanLengthMonths:{
            min:0,
            max:360,
            trueMax:500,
            step:12
        },
        loanMonthlyPayment:{
            min:0,
            max:5000,
            trueMax:250000,
            step:100
        },
        propertyTaxesYearly:{
            min:0,
            max:10000,
            trueMax:100000000,
            step:200
        },
        hoiFees:{
            min:0,
            max:1000,
            trueMax:100000,
            step:50
        },
        hoaFees:{
            min:0,
            max:2000,
            trueMax:100000,
            step:50
        },
        pmiFees:{
            min:0,
            max:1000,
            trueMax:100000,
            step:50
        },
        monthlyPayment:{
            min:0,
            max:5000,
            trueMax:250000,
            step:100
        },
    },
    dateFormat:{}
}