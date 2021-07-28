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
    preferredRetirementDateId:getCurrentDateId() - EIGHTEEN_YEARS + SEVENTY_YEARS
});

export const constraints : IConstraints = {
    numeric:{
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
        },
        dateIdMarriage:{
            minDate:MIN_DATE,
            maxDate:getCurrentDateId() + FIFTY_YEARS
        }
    }
}