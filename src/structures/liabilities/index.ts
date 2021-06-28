import { ELiabilityType, IIncome, ILiabilities } from "../..";
import { getCurrentDateId, IConstraints, randomId } from "../helpers";
import { MAX_DATE, MIN_DATE, ONE_YEAR } from "../standards";

export const structure = () : ILiabilities => ({
    id:randomId(),
    loanName:"My Loan",
    loanAmount:5000,
    interestRate:0.05,
    monthlyPayment:500,
    loanType:ELiabilityType.student,
    dateIdStart:getCurrentDateId(),
    dateIdEnd:getCurrentDateId() + ONE_YEAR
});

//ask Alex Wolek for a better word than sanitize
//need standard dates

export const contrains : IConstraints = {
    numeric:{
        loanAmount:{
            min:0,
            max:100000,
            trueMax:5000000,
            step:5000
        },
        interestRate:{
            min:0,
            max:0.1,
            trueMax:1,
            step:0.01
        },
        monthlyPayment:{
            min:0,
            max:5000,
            trueMax:50000,
            step:100
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