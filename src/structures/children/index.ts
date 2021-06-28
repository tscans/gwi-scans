import { IChildren } from "../..";
import { getCurrentDateId, IConstraints, randomId } from "../helpers";
import { MAX_DATE, MIN_DATE, ONE_YEAR } from "../standards";

export const structure = () : IChildren => ({
    id:randomId(),
    childName:"My Child",
    birthDateId:getCurrentDateId(),
    initialChildExpenses:5000,
    monthlyChildCost:1000,
    isPrivateSchool:false,
    privateTuitionK8:6000,
    privateTuitionHS:12000,
    collegeTuition:80000,
    ageOfSupportEnd:22
});

//ask Alex Wolek for a better word than sanitize
//need standard dates

export const contrains : IConstraints = {
    numeric:{
        
        initialChildExpenses:{
            min:0,
            max:30000,
            trueMax:200000,
            step:500
        },
        monthlyChildCost:{
            min:0,
            max:3000,
            trueMax:120000,
            step:100
        },
        privateTuitionK8:{
            min:0,
            max:12000,
            trueMax:50000,
            step:500
        },
        privateTuitionHS:{
            min:0,
            max:50000,
            trueMax:100000,
            step:500
        },
        collegeTuition:{
            min:0,
            max:200000,
            trueMax:500000,
            step:5000
        },
        ageOfSupportEnd:{
            min:18,
            max:30,
            trueMax:30,
            step:1
        }
    },
    dateFormat:{
        birthDateId:{
            minDate:MIN_DATE,
            maxDate:MAX_DATE
        }
    }
}