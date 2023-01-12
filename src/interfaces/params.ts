import { ITips } from "./Place"

export enum SORT {
    POPULAR = "popular",
    NEWEST = "newest"
}

export enum CLASSIFICATION {
    FOOD = "food",
    INDOOR = "indoor",
    MENU = "menu",
    OUTDOOR = "outdoor"
}

export interface Params {
    ll: string
    v: string
}

export interface PhotoParams {
    limit?: number
    sort?:  SORT
    classifications?: CLASSIFICATION
}
export interface TipsParams {
    limit?: number
    sort?: SORT
    filds?: ITips
}