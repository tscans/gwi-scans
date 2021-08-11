import { IEconomicAssumptions } from "../..";
import { getCurrentDateId, IConstraints } from "../helpers";
import { EIGHTEEN_YEARS, FIFTY_YEARS, MIN_DATE, SEVENTY_YEARS, SIXTEEN_YEARS } from "../standards";

export const structure = () : IEconomicAssumptions => ({
    inflationRate:0.02,
    taxRates:false,
    isMarried:false,
    dateIdMarriage:getCurrentDateId(),
    userBirthDateId:getCurrentDateId() - EIGHTEEN_YEARS,
    preferredZipCode:"60655",
    preferredRetirementDateId:getCurrentDateId() - EIGHTEEN_YEARS + SEVENTY_YEARS,
    retirementInvestmentRate: 0.05
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