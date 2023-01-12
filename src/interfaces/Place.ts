import { CLASSIFICATION } from "./params";

interface IIcon {
  prefix: string;
  suffix: string;
}

interface ICategory {
  name: string;
  id: number;
  icon: IIcon;
}

export interface IPlace {
  categories: ICategory[];
  chains: any[];
  distance: number;
  fsq_id: string;
  geocodes: any;
  link: string;
  location: Location;
  name: string;
  related_places: any;
  timezone: string;
}

export interface IPhoto{
  id: string
  created_at: Date
  prefix: string
  suffix: string
  width: number
  height: number
  classification: CLASSIFICATION[]
}
