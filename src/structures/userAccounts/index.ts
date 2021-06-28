import { IUserAccounts } from "../..";
import { getCurrentDateId, IConstraints, randomId } from "../helpers";
import { MAX_DATE, MIN_DATE, ONE_YEAR } from "../standards";

export const structure = () : IUserAccounts => ({
    id:randomId(),
    cashAccounts:0,
    investmentsBalance:0,
    retirementInvestmentBalance:0,
    generalInvestmentRate:0.03,
    retirementInvestmentRate:0.05,
    dateId:getCurrentDateId(),
    isCurrent:true
});

export const constraints : IConstraints = {
    numeric:{
        cashAccounts:{
            min:0,
            max:100000,
            trueMax:50000000,
            step:1000
        },
        investmentsBalance:{
            min:0,
            max:100000,
            trueMax:50000000,
            step:1000
        },
        retirementInvestmentBalance:{
            min:0,
            max:1000000,
            trueMax:90000000,
            step:10000
        },
        generalInvestmentRate:{
            min:0,
            max:0.1,
            trueMax:1,
            step:0.01
        },
        retirementInvestmentRate:{
            min:0,
            max:0.1,
            trueMax:1,
            step:0.01
        },
    },
    dateFormat:{
        dateId:{
            minDate:MIN_DATE,
            maxDate:MAX_DATE
        }
    }
}