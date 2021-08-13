import { EAccountContributionType, EUserAccountType, IUserAccounts } from "../..";
import { getCurrentDateId, IConstraints, randomId } from "../helpers";
import { MAX_DATE, MIN_DATE, ONE_YEAR } from "../standards";

export const structure = () : IUserAccounts => ({
    id:randomId(),
    userAccountName:"My Financial Account",
    accountType: EUserAccountType.cashSavings,
    accountValue: 0,
    projectedInvestmentRate: 0,
    isConnectedToRealAccount:false,
    realAccountId: "",
    isIncludedInCalculations: true,
    lastUpdatedDateId: getCurrentDateId(),
    historicalValueMarkers:[],
    contributionType: EAccountContributionType.percentOfProfit,
    percentOfIncome: 0,
    specifiedAmount: 0,
    percentOfProfit: 0
});

export const constraints : IConstraints = {
    numeric:{
        accountValue:{
            min:0,
            max:1000000,
            trueMax:999999999,
            step:5000
        },
        projectedInvestmentRate:{
            min:0,
            max:0.1,
            trueMax:1,
            step:0.01
        },
        percentOfIncome:{
            min:0,
            max:0.2,
            trueMax:1,
            step:0.01
        },
        specifiedAmount:{
            min:0,
            max:1000000,
            trueMax:999999999,
            step:5000
        },
        percentOfProfit:{
            min:0,
            max:1,
            trueMax:1,
            step:0.01
        },
    },
    dateFormat:{
        lastUpdatedDateId:{
            minDate:MIN_DATE,
            maxDate:MAX_DATE
        }
    }
}