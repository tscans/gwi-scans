import { IEconomicAssumptions } from "../..";
import { getCurrentDateId, IConstraints } from "../helpers";
import { EIGHTEEN_YEARS, FIFTY_YEARS, MIN_DATE, SEVENTY_YEARS, SIXTEEN_YEARS } from "../standards";

export const structure = (birthDateId:number = getCurrentDateId() - EIGHTEEN_YEARS) : IEconomicAssumptions => ({
    inflationRate:0.02,
    taxRates:false,
    isMarried:false,
    dateIdMarriage:getCurrentDateId(),
    userBirthDateId: birthDateId,
    preferredZipCode:"",
    preferredRetirementDateId: birthDateId + SEVENTY_YEARS,
    retirementInvestmentRate: 0.05,
    generalInvestmentRate: 0.03,
    preferredPumaCode:""
});

export const constraints : IConstraints = {
    numeric:{
        inflationRate:{
            min:0,
            max:0.1,
            trueMax:1,
            step:0.005
        },
        retirementInvestmentRate:{
            min:0,
            max:0.15,
            trueMax:1,
            step:0.005
        },
    },
    dateFormat:{
        userBirthDateId:{
            minDate:MIN_DATE,
            maxDate:getCurrentDateId() - SIXTEEN_YEARS
        },
        dateIdMarriage:{
            minDate:MIN_DATE,
            maxDate:getCurrentDateId() + FIFTY_YEARS
        }
    }
}