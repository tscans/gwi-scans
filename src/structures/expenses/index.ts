import { IAssets, IAssetType, IExpenses } from "../..";
import { getCurrentDateId, IConstraints, randomId } from "../helpers";
import { MAX_DATE, MIN_DATE, ONE_YEAR } from "../standards";

export const structure = () : IExpenses => ({
    id:randomId(),
    isRepeating:false,
    expenseDateId:getCurrentDateId(),
    isRepeatingIndefinite:false,
    repeatingDateIdEnd:getCurrentDateId() + ONE_YEAR,
    repeatingMonthId:1,
    repeatingDateIdStart:getCurrentDateId(),
    amountExpensed:10000,
    expenseName:"My Big Purchase"
});

//ask Alex Wolek for a better word than sanitize
//need standard dates

export const contrains : IConstraints = {
    numeric:{
        amountExpensed:{
            min:0,
            max:100000,
            trueMax:10000000,
            step:1000
        }
    },
    dateFormat:{
        repeatingDateIdStart:{
            minDate:MIN_DATE,
            maxDate:MAX_DATE
        },
        repeatingDateIdEnd:{
            minDate:MIN_DATE,
            maxDate:MAX_DATE
        },
        expenseDateId:{
            minDate:MIN_DATE,
            maxDate:MAX_DATE
        }
    }
}