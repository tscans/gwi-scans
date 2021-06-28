import { IIncome } from "../..";
import { getCurrentDateId, IConstraints, randomId } from "../helpers";
import { MAX_DATE, MIN_DATE, ONE_YEAR } from "../standards";

export const structure = () : IIncome => ({
    id:randomId(),
    baseIncome:40000,
    jobName:"All Occupations",
    jobSalaryId: "00-0000",
    isCurrent:true,
    dateIdStart:getCurrentDateId(),
    dateIdEnd:getCurrentDateId() + ONE_YEAR,
    customJobTitle: "My Job",
    geoState: "Illinois",
    employerMatches:false,
    retirementContributionPercent:0.05,
    employerMatchesPercent:0.5,
    employerMatchesUpToPercent:0.05
});

//ask Alex Wolek for a better word than sanitize
//need standard dates

export const constraints : IConstraints = {
    numeric:{
        baseIncome:{
            min:0,
            max:250000,
            trueMax:10000000,
            step:500
        },
        retirementContributionPercent:{
            min:0,
            max:0.2,
            trueMax:0.5,
            step:0.01
        },
        employerMatchesPercent:{
            min:0,
            max:1,
            trueMax:1,
            step:0.05
        },
        employerMatchesUpToPercent:{
            min:0,
            max:0.1,
            trueMax:0.5,
            step:0.01
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