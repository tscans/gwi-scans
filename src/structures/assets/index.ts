import { IAssets, IAssetType } from "../..";
import { getCurrentDateId, IConstraints, randomId } from "../helpers";
import { MAX_DATE, MIN_DATE, ONE_YEAR } from "../standards";

export const structure = () : IAssets => ({
    id:randomId(),
    assetName:"My Asset",
    interestRate:0.03,
    currentBalance:5000,
    assetType:IAssetType.realEstate,
    isCurrent:true,
    dateIdStart:getCurrentDateId(),
    dateIdEnd:getCurrentDateId() + ONE_YEAR
});

export const sorter = (arr:IAssets[],reverse:boolean) =>{
    let one = reverse ? -1 : 1;
    let nOne = reverse ? 1 : -1;
    return arr.sort((a:IAssets, b:IAssets) => { 
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
        interestRate:{
            min:0,
            max:0.15,
            trueMax:1,
            step:0.01
        },
        currentBalance:{
            min:0,
            max:100000,
            trueMax:50000000,
            step:5000
        },
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