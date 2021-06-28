export const randomId = () => Math.random().toString(36).substring(10);
export const getCurrentDateId = () => {
    const month = new Date().getMonth() + 1;
    return parseInt(`${(new Date().getFullYear())}${ month < 10 ? "0" : "" }${month}`);
}

export interface INumericInterface{
    min:number;
    max:number;
    trueMax:number;
    step:number;
}

export interface IDateInterface{
    minDate:number | null;
    maxDate:number | null;
}

export interface INumericConstaints{
    [key:string]: INumericInterface;
}

export interface IDateFormatConstraints{
    [key:string]: IDateInterface;
}

export interface IConstraints{
    numeric:INumericConstaints;
    dateFormat:IDateFormatConstraints;
}

export interface IGenericPlanObject{
    id:string;
    isCurrent?:boolean;
    [key:string]:any;
}

export const isValidInput = (obj:IGenericPlanObject,constraints:IConstraints) =>{
    return !Object.keys(obj).map((k:string)=>{
        const val = obj[k];
        const numConst = constraints.numeric[k];
        const datConst = constraints.dateFormat[k];
        if(typeof(val) === "string" && val === ""){
            return false;
        }
        if(numConst){
            if(val > numConst.trueMax || val < numConst.min){
                return false;
            }
        }
        if(datConst){
            if((datConst.minDate && val < datConst.minDate!) || (datConst.maxDate && val > datConst.maxDate!)){
                return false;
            }
        }
        return true;
    }).includes(false);
}