import { IUserFuturePlans } from "../..";
import { getCurrentDateId, randomId } from "../helpers";

export const structure = () : IUserFuturePlans => ({
    id:randomId(),
    dateId: getCurrentDateId(),
    notes:"",
    futurePlanName:"My Future Plan",
    futurePlanType:"",
    attachedIds:[]
});