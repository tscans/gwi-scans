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

export const sorter = (arr:IExpenses[],reverse:boolean) =>{
    let one = reverse ? -1 : 1;
    let nOne = reverse ? 1 : -1;
    return arr.sort((a:IExpenses, b:IExpenses) => { 
        const a_start = a.isRepeating ? a.repeatingDateIdEnd : a.expenseDateId;
        const b_start = b.isRepeating ? b.repeatingDateIdEnd : b.expenseDateId;
        if(a.isRepeatingIndefinite && !b.isRepeatingIndefinite){
            return one;
        }
        else if(!a.isRepeatingIndefinite && b.isRepeatingIndefinite){
            return nOne;
        }
        return a_start - b_start ? one : nOne;
    })
}

export const constraints : IConstraints = {
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