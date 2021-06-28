import { IEconomicAssumptions, IUserAccounts } from "../..";
import { getCurrentDateId, IConstraints, randomId } from "../helpers";
import { EIGHTEEN_YEARS, MAX_DATE, MIN_DATE, ONE_YEAR, SIXTEEN_YEARS } from "../standards";

export const structure = () : IEconomicAssumptions => ({
    autoInvestRule:true,
    autoInvestLimitAmount:25000,
    inflationRate:0.02,
    taxRates:false,
    dateIdMarriage:null,
    userBirthDateId:getCurrentDateId() - EIGHTEEN_YEARS,
    preferredZipCode:"60655"
});

export const constraints : IConstraints = {
    numeric:{
        autoInvestLimitAmount:{
            min:0,
            max:100000,
            trueMax:100000000,
            step:1000
        },
        inflationRate:{
            min:0,
            max:0.1,
            trueMax:1,
            step:0.01
        },
    },
    dateFormat:{
        userBirthDateId:{
            minDate:MIN_DATE,
            maxDate:getCurrentDateId() - SIXTEEN_YEARS
        }
    }
}