import { Dispatch, SetStateAction } from "react";


export interface IFilters {
    price: string;
    clothesType: string;
}

export interface IFiltersState {
    filters: IFilters;
    setFilters: Dispatch<SetStateAction<IFilters>>;
}

export interface ICheckbox {
    priceOrder: string;
    isChecked: boolean;
    id: number;
}

export interface ProductsFiltersValuesI {
    allCheckboxes: ICheckbox[]
    setAllCheckboxes: React.Dispatch<React.SetStateAction<ICheckbox[]>>
    setFilters: React.Dispatch<React.SetStateAction<IFilters>>
}