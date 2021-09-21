import { IBudgets, IChildren } from "../..";
import { getCurrentDateId, IConstraints, randomId } from "../helpers";
import { MAX_DATE, MIN_DATE, ONE_YEAR } from "../standards";

export const structure = () : IBudgets => ({
    id:randomId(),
    food:600,
    health:160,
    utilities:300,
    entertainment:120,
    auto:700,
    other:300,
    isCurrent:true,
    dateIdStart:getCurrentDateId(),
    dateIdEnd:getCurrentDateId() + ONE_YEAR,
    budgetAdjustmentName:"My Budget"
});

export const sorter = (arr:IBudgets[],reverse:boolean) =>{
    let one = reverse ? -1 : 1;
    let nOne = reverse ? 1 : -1;
    return arr.sort((a:IBudgets, b:IBudgets) => { 
        if(a.isCurrent && !b.isCurrent){
            return one;
        }
        else if(!a.isCurrent && b.isCurrent){
            return nOne;
        }
        return a.dateIdStart - b.dateIdStart ? one : nOne;
    })
}

export const constraints : IConstraints = {
    numeric:{
        food:{
            min:0,
            max:2000,
            trueMax:10000,
            step:100
        },
        health:{
            min:0,
            max:1000,
            trueMax:25000,
            step:50
        },
        utilities:{
            min:0,
            max:1200,
            trueMax:10000,
            step:50
        },
        entertainment:{
            min:0,
            max:800,
            trueMax:10000,
            step:50
        },
        auto:{
            min:0,
            max:1800,
            trueMax:10000,
            step:50
        },
        other:{
            min:0,
            max:1000,
            trueMax:100000,
            step:50
        }
    },
    dateFormat:{
        dateIdStart:{
            minDate:MIN_DATE,
            maxDate:MAX_DATE
        },
        dateIdEnd:{
            minDate:MIN_DATE,
            maxDate:MAX_DATE
        }
    }
}