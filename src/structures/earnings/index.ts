import { IAssets, IAssetType, IEarnings, IExpenses } from "../..";
import { getCurrentDateId, IConstraints, randomId } from "../helpers";
import { MAX_DATE, MIN_DATE, ONE_YEAR } from "../standards";

export const structure = () : IEarnings => ({
    id:randomId(),
    isRepeating:false,
    earningDateId:getCurrentDateId(),
    isRepeatingIndefinite:false,
    repeatingDateIdEnd:getCurrentDateId() + ONE_YEAR,
    repeatingMonthId:[1],
    repeatingDateIdStart:getCurrentDateId(),
    amountEarned:10000,
    earningName:"My Big Purchase",
    shouldBeTaxed:false
});

export const sorter = (arr:IEarnings[],reverse:boolean) =>{
    let one = reverse ? -1 : 1;
    let nOne = reverse ? 1 : -1;
    return arr.sort((a:IEarnings, b:IEarnings) => { 
        const a_start = a.isRepeating ? a.repeatingDateIdEnd : a.earningDateId;
        const b_start = b.isRepeating ? b.repeatingDateIdEnd : b.earningDateId;
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
        amountEarned:{
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
        earningDateId:{
            minDate:MIN_DATE,
            maxDate:MAX_DATE
        }
    }
}