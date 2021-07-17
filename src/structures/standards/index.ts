import { getCurrentDateId } from "../helpers";

export const ONE_YEAR = 100;
export const SIXTEEN_YEARS = 1600;
export const EIGHTEEN_YEARS = 1800;
export const EIGHTY_YEARS = 8000;
export const FIFTY_YEARS = 5000;
export const SEVENTY_YEARS = 7000;

export const MIN_BIRTH_DATE = 195001;
export const MAX_BIRTH_DATE = getCurrentDateId() - SIXTEEN_YEARS;

export const MIN_DATE = 195001 + SIXTEEN_YEARS;
export const MAX_DATE = getCurrentDateId() + FIFTY_YEARS;

export const minDateUser = (birthDateId:number) =>{
    return birthDateId + SIXTEEN_YEARS;
}

export const maxDateUser = (birthDateId:number) =>{
    return birthDateId + SEVENTY_YEARS; 
}